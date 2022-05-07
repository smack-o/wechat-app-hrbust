import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import Taro from '@tarojs/taro'
import { Image, View } from '@tarojs/components'
import { APIS } from '@/services2'
import Avatar, { NickName } from '@/components/Avatar'
import { showToast, withRequest } from '@/utils'
import Time from '@/components/Time'
import CommentInput from '../comment-input'
import './CommentList.less'
import LikeIcon from '../../imgs/like.png'
import LikeSelectedIcon from '../../imgs/like_selected.png'

interface IProps {
  list: GetApiResultType<typeof APIS.CommentApi.apiCommentBrickIdGet>
  onCommentSubmit?: (value: string, currentIndex?: number) => void
}

const prefix = 'comment-list'
export default function CommentList(props: IProps) {
  const { list = [], onCommentSubmit } = props

  const [listLocal, setListLocal] = useState(list)

  const [currentIndex, setCurrentIndex] = useState(-1)

  useEffect(() => {
    setListLocal(list)
  }, [list])

  const nickName = useMemo(() => {
    return currentIndex >= 0
      ? list?.[currentIndex]?.from?.userInfo?.customName ||
          list?.[currentIndex]?.from?.userInfo?.nickName
      : ''
  }, [currentIndex, list])

  const onCommentSubmitHandler = useCallback(
    async (value: string) => {
      await onCommentSubmit?.(value, currentIndex)
      setCurrentIndex(-1)
    },
    [onCommentSubmit, currentIndex]
  )

  // 点赞
  const onLikeHandler = useCallback(
    async (index: number, e) => {
      e.stopPropagation()
      const item = listLocal[index]
      const [err] = await withRequest(APIS.CommentApi.apiCommentLikeIdPut)({
        id: item._id
      })

      // 脏逻辑，直接更该数据，然后手动触发强制更新
      if (!err) {
        const isLike = item.isLike
        item.isLike = !isLike
        item.likeCount = item.likeCount + (isLike ? -1 : 1)
      }
      setListLocal([...listLocal])
    },
    [listLocal]
  )

  // 删除评论
  const onDelete = useCallback(
    async (index: number, e) => {
      e.stopPropagation()
      Taro.showModal({
        title: '确认删除这条评论？',
        content: '删除后无法找回，请谨慎操作。',
        success: async res => {
          if (res.confirm) {
            const item = listLocal[index]
            const [err] = await withRequest(APIS.CommentApi.apiCommentIdDelete)(
              {
                id: item._id
              }
            )
            if (!err) {
              setListLocal(
                listLocal.slice(0, index).concat(listLocal.slice(index + 1))
              )
              showToast({
                title: '删除成功',
                icon: 'success'
              })
            }
          }
        }
      })
    },
    [listLocal]
  )
  return (
    <Fragment>
      {listLocal.length === 0 ? (
        <View className={`${prefix}__community-no-data community-no-data`}>
          暂无评论
        </View>
      ) : (
        <View className={prefix}>
          {listLocal.map((item, index) => {
            return (
              <View
                className={`${prefix}__item`}
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                }}
              >
                <Avatar
                  className={`${prefix}__item__avatar`}
                  avatarSize="70rpx"
                  customAvatarUrl={item.from?.userInfo?.customAvatarUrl}
                  avatarUrl={item.from?.userInfo?.avatarUrl}
                ></Avatar>
                <View className={`${prefix}__item-right`}>
                  <View className={`${prefix}__item__title`}>
                    <NickName
                      className={`${prefix}__item__title__name`}
                      nickName={item.from?.userInfo?.nickName}
                      customName={item.from?.userInfo?.customName}
                    ></NickName>
                    <Time
                      className={`${prefix}__item__title__time`}
                      time={item.createdAt}
                      type="relative"
                    ></Time>
                  </View>
                  <View className={`${prefix}__item__content`}>
                    {item.content}
                  </View>

                  <View className={`${prefix}__item-footer`}>
                    {item.isPublisher && (
                      <View
                        className={`${prefix}__item-footer__delete blue-text`}
                        onClick={e => onDelete(index, e)}
                      >
                        删除
                      </View>
                    )}
                    <View
                      className={`${prefix}__item-footer__like`}
                      onClick={e => onLikeHandler(index, e)}
                    >
                      <Image
                        src={item.isLike ? LikeSelectedIcon : LikeIcon}
                        mode="widthFix"
                      ></Image>
                      {item.likeCount}
                    </View>
                  </View>
                </View>
              </View>
            )
          })}
        </View>
      )}

      <CommentInput
        onSubmit={onCommentSubmitHandler}
        placeholder={nickName ? `回复${nickName}` : '快来撩一下~'}
        currentIndex={currentIndex}
        onBlur={() => {
          setTimeout(() => {
            setCurrentIndex(-1)
          }, 0)
        }}
      ></CommentInput>
    </Fragment>
  )
}
