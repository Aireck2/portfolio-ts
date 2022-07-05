import React, { useState, useEffect } from 'react'
import NextLink from 'next/link'
import Image from 'next/future/image'

import { Row, Col, Spacer, Link, Container } from '@nextui-org/react'
import { useTranslations } from 'next-intl'

import { LanguageSelect, MobileNavigation, ResumeButton, ThemeToggle } from '@components'

import { StyledNavContainer, StyledNavMainContainer } from './styles'

const Navbar: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const t = useTranslations('Index')

  const detached = scrollPosition > 0
  const showBlur = !!detached

  const onScroll = () => {
    requestAnimationFrame(() => {
      setScrollPosition(window.pageYOffset)
    })
  }

  const menuItems = [
    { name: t('about'), url: '#about' },
    { name: t('experience'), url: '#experience' },
    { name: t('projects'), url: '#projects' },
    { name: t('contact'), url: '#contact' },
  ]

  const menu = (
    <>
      {menuItems.map(({ name, url }, index) => (
        <div key={index} style={{ display: 'flex' }}>
          <Link
            href={url}
            css={{
              color: '$text',
            }}
          >
            {name}
          </Link>
          <Spacer x={1} />
        </div>
      ))}
      <ResumeButton />
    </>
  )
  useEffect(() => {
    setScrollPosition((typeof window !== 'undefined' && window.pageYOffset) || 0)
    window.addEventListener('scroll', onScroll.bind(this))
    return () => {
      window.removeEventListener('scroll', onScroll.bind(this))
    }
  }, [])

  return (
    <StyledNavMainContainer>
      <StyledNavContainer detached={detached} showBlur={showBlur}>
        <Container lg={true} as="nav" display="flex" wrap="nowrap" alignItems="center">
          <Row align="center">
            <NextLink href="/">
              <Link href="/">
                <Image src="/logos/logo.svg" alt="Erick Logo" width={34} height={34} />
              </Link>
            </NextLink>
          </Row>
          <Col>
            <Row justify="flex-end" align="center">
              <Col
                css={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  '@media screen and (max-width: 767px)': { d: 'none' },
                }}
              >
                {menu}
              </Col>
              <Col
                css={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  width: 'auto',
                }}
              >
                <Spacer x={1} />
                <LanguageSelect />
                <Spacer x={0.5} />
                <ThemeToggle />
              </Col>
            </Row>
          </Col>
          <MobileNavigation menu={menu} />
        </Container>
      </StyledNavContainer>
    </StyledNavMainContainer>
  )
}

export default Navbar
