import React, {
  Fragment,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
// import { PxToRem } from '@/utils'
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
  /**
   * 高度，若不传动态计算，建议传入，计算有性能开销
   */
  height?: number
}

const prefix = 'fix-block'

export default function FixBlock(props: PropsWithChildren<IProps>) {
  const {
    className,
    children,
    top,
    disabled,
    bottom,
    height: propsHeight = 0
  } = props

  const ref = useRef<HTMLDivElement>(null)

  const [height, setHeight] = useState(propsHeight)

  const id = useMemo(
    () => `id_${Date.now()}_${parseInt(`${Math.random() * 1000}`, 10)}`,
    []
  )

  useEffect(() => {
    if (propsHeight) {
      return
    }
    setTimeout(() => {
      Taro.createSelectorQuery()
        .select('.' + id)
        .boundingClientRect(function(rect) {
          console.log(rect, id, 'rect')
          setHeight(rect?.height || 0)
        })
        .exec()
    }, 0)
  }, [children, id, propsHeight])

  const style =
    height > 0
      ? {
          height: `${height}rpx`
        }
      : {}

  if (disabled) {
    return <Fragment>{children}</Fragment>
  }

  // fix top or bottom
  const fixStyle: { [key: string]: string } = {}

  if (bottom !== undefined) {
    fixStyle.bottom = Taro.pxTransform(bottom)
  } else {
    fixStyle.top = Taro.pxTransform(top || 0)
  }

  return (
    <View
      className={cn(prefix, className, {
        [`${prefix}--bottom`]: bottom === 0 && propsHeight
      })}
      style={style}
    >
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
