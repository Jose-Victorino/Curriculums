import React from 'react'
import cn from 'classnames'

import s from './Button.module.scss'

const Button = ({
  btnType = 'primary',  // 'primary', 'secondary', 'tertiary', 'nav'
  text = 'no input',
  type = 'button',      // 'button', 'submit', 'reset'
  icon = null,
  iconPos = 'left',     // 'left', 'right'
  title,
  classNames = {},
  onClick = () => {},
}) => (
  <button
    className={cn(
      {...classNames},
      s[`btn-${btnType}`],
      (icon && iconPos === 'left') && 'flex-row',
      (icon && iconPos === 'right') && 'flex-row-reverse',
      'a-center'
    )}
    title={title}
    type={type}
    onClick={() => onClick()}
  >
    {icon}
    <p>{text}</p>
  </button>
)

export default Button