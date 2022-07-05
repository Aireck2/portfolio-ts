import { useMediaQuery } from '@hooks/useMediaQuery'
import { useOutside } from '@hooks/useOutside'
import { CSS, styled } from '@nextui-org/react'

import { useRef, useState } from 'react'

interface Props {
  open?: boolean
  css?: CSS
  menu: any
}

const StyledButton = styled('button', {
  zIndex: 500,
  dflex: 'center',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
  position: 'relative',
  marginRight: -15,
  padding: 15,
  transition: 'opacity 0.15s linear, filter 0.15s linear',
  '& .ham-box': {
    display: 'inline-block',
    position: 'relative',
    width: 30,
    height: 24,
    '& .ham-box-inner': {
      position: 'absolute',
      top: '50%',
      right: 0,
      width: 30,
      height: 2,
      borderRadius: 4,
      backgroundColor: '$colors$accents6',
      transform: 'rotate(0deg)',
      transition: 'transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      '&:before, &:after': {
        content: '',
        display: 'block',
        position: 'absolute',
        left: 'auto',
        right: 0,
        width: 30,
        height: 2,
        borderRadius: 4,
        backgroundColor: '$colors$accents6',
        transition: 'transform 0.15s ease',
      },
      '&:before': {
        width: '120%',
        top: -10,
        opacity: 1,
      },
      '&:after': {
        width: '80%',
        bottom: -10,
        transform: 'rotate(0)',
      },
    },
  },
  '&.active': {
    '& .ham-box-inner': {
      transform: 'rotate(225deg)',
      transition: 'transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s',
      '&:before': { width: '100%', top: 0, opacity: 0 },
      '&:after': { width: '100%', bottom: 0, transform: 'rotate(-90deg)' },
    },
  },
})
const StyledAside = styled('aside', {
  dflex: 'center',
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  padding: '50px 10px',
  width: '75vw',
  maxWidth: 400,
  height: '100vh',
  outline: 0,
  backgroundColor: '$colors$accents1',
  boxShadow: '-10px 0px 30px -15px $colors$accents6',
  zIndex: 400,
  transform: 'translateX(100vw)',
  visibility: 'hidden',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
  '&.active': {
    dflex: 'center',
    flexDirection: 'column',
    transform: 'translateX(0vw)',
    visibility: 'visible',
    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
  },
})

export const MobileNavigation: React.FC<Props> = ({ css, menu }) => {
  const [active, setActive] = useState(false)
  const showMobile = useMediaQuery(767)
  const asideRef = useRef(null)

  const handleToggleMenu = () => {
    document.querySelector('body')?.classList.toggle('showBlur')
    setActive(!active)
    console.log('toggleMenu')
  }

  const handleCloseMenu = () => {
    document.querySelector('body')?.classList.remove('showBlur')
    setActive(false)
  }

  useOutside(asideRef, handleCloseMenu)

  if (showMobile)
    return (
      <div ref={asideRef}>
        <StyledButton
          aria-label="toggle mobile navigation menu"
          className={active ? 'active' : undefined}
          onClick={handleToggleMenu}
          css={css}
        >
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </StyledButton>
        <StyledAside className={active ? 'active' : undefined}>{menu}</StyledAside>
      </div>
    )
  return <></>
}
