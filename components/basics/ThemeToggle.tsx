import { CSS, styled, useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'

import { Moon, Sun } from '@icons'

interface Props {
  className?: string
  css?: CSS
}

const StyledButton = styled('button', {
  dflex: 'center',
  size: 'auto',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
  padding: 0,
  '& .theme-selector-icon': {
    color: '$colors$accents6',
  },
  '@xsMax': {
    px: '$2',
  },
})

export const ThemeToggle: React.FC<Props> = ({ css }) => {
  const { setTheme } = useNextTheme()
  const { isDark } = useTheme()

  const handleToggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <StyledButton
      aria-label="toggle a light and dark color scheme"
      className={`${'theme-selector-container'}`}
      onClick={handleToggleTheme}
      css={css}
    >
      {isDark ? (
        <Sun filled className="theme-selector-icon" size={20} />
      ) : (
        <Moon filled className="theme-selector-icon" size={20} />
      )}
    </StyledButton>
  )
}

export default ThemeToggle
