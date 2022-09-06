import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import Taro from '@tarojs/taro'
import { Image, Text, View } from '@tarojs/components'
import { APIS } from '@/services2'
import Avatar, { NickName } from '@/components/Avatar'
import { showToast, withRequest } from '@/utils'
import Time from '@/components/Time'
import LikeIcon from '@/assets/community-imgs/like.png'
import LikeSelectedIcon from '@/assets/community-imgs/like_selected.png'
import CommentInput, { CommentType } from '../comment-input'
import './CommentList.less'

interface IWrapperProps {
  hotList?: GetApiResultType<typeof APIS.CommentApi.apiCommentBrickIdGet>
  list: GetApiResultType<typeof APIS.CommentApi.apiCommentBrickIdGet>
  onCommentSubmit?: (value: string, to?: string, commentId?: string) => void
  showInput?: boolean
  commentCount?: number
}

interface IProps {
  list: GetApiResultType<typeof APIS.CommentApi.apiCommentBrickIdGet>
  onCommentSubmit?: (value: string, to?: string, commentId?: string) => void
  onCommentItemClick?: (
    to?: string,
    commentId?: string,
    nickName?: string
  ) => void
  showInput?: boolean
  avatarSize?: string
  /**
   * 父级评论 id
   */
  parentId?: string
  replyCount?: number
}

const prefix = 'comment-list'

export function CommentList(props: IProps) {
  const {
    list = [],
    avatarSize = '70rpx',
    parentId = '',
    onCommentItemClick,
    replyCount = 0
  } = props

  const [listLocal, setListLocal] = useState(list)
  const [pageNum, setPageNum] = useState(1)

  let replyCountLocal = useMemo(() => replyCount, [replyCount])
  console.log(listLocal.length, replyCount, replyCountLocal)
  const showReplyMore = listLocal.length < replyCountLocal
  // const [showReplyMore, setShowReplyMore] = useState(list.length < replyCount)

  useEffect(() => {
    setListLocal(list)
    setPageNum(1)
  }, [list])

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
              replyCountLocal && (replyCountLocal -= 1)
            }
          }
        }
      })
    },
    [listLocal]
  )

  // 点击
  const onItemClick = useCallback(
    (item: typeof list[0]) => {
      onCommentItemClick?.(
        item.from?._id,
        parentId || item._id,
        item.from?.userInfo?.customName
      )
    },
    [list, onCommentItemClick, parentId]
  )

  const loadReplyMore = useCallback(async () => {
    const [err, res] = await withRequest(
      APIS.CommentApi.apiCommentCommentIdGet
    )({ id: parentId, pageNum: String(pageNum), pageSize: '3' })
    setPageNum(pageNum + 1)
    if (!err && res) {
      setListLocal(listLocal.concat(res))
      // if (res.length < 3) {
      //   setShowReplyMore(false)
      // }
    }
  }, [listLocal, pageNum, parentId])

  return (
    <Fragment>
      {listLocal.length === 0 ? (
        <View className={`${prefix}__community-no-data community-no-data`}>
          暂无评论
        </View>
      ) : (
        <View className={prefix}>
          {listLocal.map((item, index) => {
            const {
              replyComment = [],
              content,
              from,
              type,
              to,
              isPublisher
            } = item
            return (
              <Fragment key={item._id}>
                <View
                  className={`${prefix}__item`}
                  onClick={() => {
                    onItemClick(item)
                    // setCurrentIndex(index)
                  }}
                >
                  <Avatar
                    className={`${prefix}__item__avatar`}
                    avatarSize={avatarSize}
                    customAvatarUrl={from?.userInfo?.customAvatarUrl}
                    avatarUrl={from?.userInfo?.avatarUrl}
                    _id={from?._id}
                    onClickType="jump"
                  ></Avatar>
                  <View className={`${prefix}__item-right`}>
                    <View className={`${prefix}__item__title`}>
                      <NickName
                        className={`${prefix}__item__title__name`}
                        nickName={from?.userInfo?.nickName}
                        customName={from?.userInfo?.customName}
                        isPublisher={isPublisher}
                        tags={from?.tags}
                      ></NickName>
                      <Time
                        className={`${prefix}__item__title__time`}
                        time={item.createdAt}
                        type="relative"
                      ></Time>
                    </View>
                    <Text user-select className={`${prefix}__item__content`}>
                      {type === CommentType.ReplyComment
                        ? `@${to?.userInfo?.customName}: ${content}`
                        : content}
                    </Text>

                    <View className={`${prefix}__item-footer`}>
                      {isPublisher && (
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
                        <Text className={item.isLike ? 'red-text' : ''}>
                          {item.likeCount}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                {replyComment?.length > 0 && (
                  <View className={`${prefix}__item-replay`}>
                    <CommentList
                      list={replyComment}
                      avatarSize="50rpx"
                      parentId={item._id}
                      onCommentItemClick={onCommentItemClick}
                      replyCount={item.replyCount}
                    ></CommentList>
                  </View>
                )}
              </Fragment>
            )
          })}
          {parentId && showReplyMore && (
            <View
              className={`${prefix}__replay-more blue-text`}
              onClick={loadReplyMore}
            >
              加载更多...
            </View>
          )}
        </View>
      )}
    </Fragment>
  )
}

export default function CommentListWrapper(props: IWrapperProps) {
  const {
    list = [],
    onCommentSubmit,
    showInput = false,
    hotList = [],
    commentCount
  } = props

  const [currentComment, setCurrentComment] = useState<{
    to?: string
    commentId?: string
    nickName?: string
  } | null>(null)

  const onCommentSubmitHandler = useCallback(
    async (value: string) => {
      console.log(value, currentComment?.to, currentComment?.commentId)
      await onCommentSubmit?.(
        value,
        currentComment?.to,
        currentComment?.commentId
      )
      setCurrentComment(null)
    },
    [onCommentSubmit, currentComment]
  )

  const onCommentItemClick = useCallback(
    (to?: string, commentId?: string, nickName?: string) => {
      setCurrentComment({ to, commentId, nickName })
    },
    []
  )

  return (
    <Fragment>
      {hotList && hotList.length > 0 && (
        <Fragment>
          <View className={`${prefix}__comment-title`}>
            热门评论 ({hotList.length})
          </View>
          <CommentList
            list={hotList}
            onCommentItemClick={onCommentItemClick}
          ></CommentList>
        </Fragment>
      )}

      {commentCount !== undefined && (
        <View className={`${prefix}__comment-title`}>
          最新评论 ({commentCount})
        </View>
      )}

      <CommentList
        list={list}
        onCommentItemClick={onCommentItemClick}
      ></CommentList>

      {showInput && (
        <CommentInput
          onSubmit={onCommentSubmitHandler}
          placeholder={
            currentComment?.nickName
              ? `回复${currentComment?.nickName}`
              : '快来撩一下~'
          }
          isReply={!!currentComment?.to}
          onBlur={() => {
            setCurrentComment(null)
          }}
        ></CommentInput>
      )}
    </Fragment>
  )
}
