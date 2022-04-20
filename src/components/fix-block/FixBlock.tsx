import React, {
  Fragment,
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'
// import { PxToRem } from '@src/utils'
import cn from 'classnames'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './FixBlock.less'

interface IProps {
  className?: string
  /**
   * fix 距离顶部距离 单位 px 默认 0
   */
  top?: number
  /**
   * fix 距离底部距离 单位 px 默认 0
   */
  bottom?: number
  disabled?: boolean
}

const prefix = 'fix-block'

export default function FixBlock(props: PropsWithChildren<IProps>) {
  const { className, children, top, disabled, bottom } = props

  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const id = useMemo(
    () => `id_${Date.now()}_${parseInt(`${Math.random() * 1000}`, 10)}`,
    []
  )

  useEffect(() => {
    console.log('useLayoutEffect')
    setTimeout(() => {
      Taro.createSelectorQuery()
        .select('.' + id)
        .boundingClientRect(function(rect) {
          console.log(rect, id, 'rect')
          setHeight(rect?.height || 0)
        })
        .exec()
    }, 0)
  }, [children, id])

  const style =
    height > 0
      ? {
          height: `${height}px`
        }
      : {}

  if (disabled) {
    return <Fragment>children</Fragment>
  }

  // fix top or bottom
  const fixStyle: { [key: string]: string } = {}

  if (bottom !== undefined) {
    fixStyle.bottom = Taro.pxTransform(bottom)
  } else {
    fixStyle.top = Taro.pxTransform(top || 0)
  }

  console.log(fixStyle)

  return (
    <View className={cn(prefix, className)} style={style}>
      <View
        className={cn(`${prefix}__children`, id, {
          [`${prefix}__children--fixed`]: height > 0
        })}
        style={fixStyle}
        ref={ref}
      >
        {children}
      </View>
    </View>
  )
}
