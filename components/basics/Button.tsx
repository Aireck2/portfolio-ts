import useIsMounted from '@hooks/useIsMounted'
import { styled } from '@nextui-org/react'

interface IProps {
  href: string
  text: string
}

const StyledButton = styled('div', {
  display: 'inline-block',
  position: 'relative',
  zIndex: 1,
  padding: '13px 0',
  a: {
    position: 'relative',
    padding: '13px 30px',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    backgroundColor: '$background',
    color: '$accents10',
    fontSize: 18,
    fontFamily: '$mono',
    '&::after': {
      content: '',
      position: 'absolute',
      zIndex: -1,
      top: -2,
      left: -2,
      height: 'calc(100% + 4px)',
      width: 'calc(100% + 4px)',
      background: 'linear-gradient(90deg, #f7b500, #b620e0, #32c5ff)',
      borderRadius: 12,
      transition: 'all 300ms ease',
      // opacity: 0.7,
    },
  },
  '&:hover a': {
    '&::after': {
      filter: 'blur(3px)',
      opacity: 1,
    },
  },
})

export const Button: React.FC<IProps> = ({ href, text }) => {
  const isMounted = useIsMounted()

  if (!isMounted) return null

  return (
    <StyledButton>
      <a href={href} target="_blank" rel="noreferrer">
        {text}
      </a>
    </StyledButton>
  )
}
