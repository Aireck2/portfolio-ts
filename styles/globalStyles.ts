import { globalCss } from '@nextui-org/react'

export const globalStyles = globalCss({
  html: { scrollBehavior: 'smooth' },

  'body.showBlur': {
    overflow: 'hidden',
    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
    '& main': {
      transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
      filter: 'blur(5px) brightness(0.7)',
      pointerEvents: 'none',
      userSelect: 'none',
    },
  },
  '::selection': { backgroundColor: '#2c2f33', color: '#fff' },
  'body::-webkit-scrollbar': {
    width: 12,
  },
  'body::-webkit-scrollbar-track': {
    background: '#f6f6f6',
  },
  'body::-webkit-scrollbar-thumb': {
    backgroundColor: '#bfbfc0',
    border: '3px solid #f6f6f6',
    borderRadius: 10,
  },
})
