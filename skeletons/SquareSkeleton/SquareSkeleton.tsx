import React from 'react'

interface ISquareSkeleton {
  width: string
  height: string
  radius?: string
  color?: string
  className?: string
}

function SquareSkeleton({
  width = '400px',
  height = '40px',
  radius = '0px',
  color = '#e0e0e0',
  className = ''
}: ISquareSkeleton): JSX.Element {
  return (
    <div
      className={` ${className} animate-pulse`}
      style={{ width, height, backgroundColor: color, borderRadius: radius }}
    ></div>
  )
}

export default SquareSkeleton
