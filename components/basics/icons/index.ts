import { CSS } from '@nextui-org/react'

export interface IconProps {
  fill?: string
  filled?: boolean
  size?: string | number
  height?: string | number
  width?: string | number
  label?: string
  onClick?: () => void
  className?: string
  css?: CSS
}

export { default as Sun } from './sun'
export { default as Moon } from './moon'
export { default as ESFlag } from './ES'
export { default as USFlag } from './US'
export { default as DEFlag } from './DE'
