'use client'
import React from 'react'
import { motion } from 'PackagesClientComponents/framerMotion'

interface IButtonIconProps {
  onClick?: (arg?: any) => void
  onPointerDown?: (args?: any) => void
  children: React.ReactNode
  className?: string
}

function ButtonIcon(props: IButtonIconProps): JSX.Element {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      onTap={props.onClick}
      onPointerDown={props.onPointerDown}
      onTouchStart={props.onPointerDown}
      className={props.className}
    >
      {props.children}
    </motion.button>
  )
}

export default ButtonIcon
