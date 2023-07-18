'use client'
import React from 'react'
import { motion } from 'PackagesClientComponents/framerMotion'

interface IButtonAltProps {
  onClick?: (arg?: any) => void
  children: React.ReactNode
  className?: string
}

function ButtonAlt(props: IButtonAltProps): JSX.Element {
  return (
    <motion.button
      className={`md:px-6 px-3 py-2 border border-button ${
        props.className === undefined ? '' : props.className
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onTap={props.onClick}
    >
      {props.children}
    </motion.button>
  )
}

export default ButtonAlt
