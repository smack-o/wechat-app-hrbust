import React from 'react'
import classnames from 'classnames'

import './index.less'

interface indexProps {
  className?: string
}
type Props = indexProps

const prefix = ''

/** index */

const index = (props: Props) => {
  const { className } = props

  return <div className={classnames(prefix, className)}>index</div>
}

export default index
