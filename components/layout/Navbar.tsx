import { useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { Dropdown, useTheme } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import { useTheme as useNextTheme } from 'next-themes'

import constants, { Languages } from '@helpers/constants'

import styles from '@styles/layouts/VMenu.module.scss'

const Navbar: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { locale, locales, route } = useRouter()
  const { setTheme } = useNextTheme()
  const { isDark } = useTheme()

  const t = useTranslations('Index')

  const otherLocale = locales?.filter((cur) => cur !== locale)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

  const menuItems = [
    { name: t('about'), url: '#about' },
    { name: t('experience'), url: '#experience' },
    { name: t('projects'), url: '#projects' },
    { name: t('contact'), url: '#contact' },
  ]

  const menu = (
    <nav>
      <ul className={styles.VMenu__navbar}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
        <li key="button">
          <button className={styles.VMenu__button}>
            <Link href={`/resume_${locale?.toUpperCase()}.pdf`}>
              <a target="_blank">
                <span>{t('resume')}</span>
              </a>
            </Link>
          </button>
        </li>
        <li style={{ display: 'flex', gridGap: 5 }}>
          <Dropdown>
            <Dropdown.Button
              flat
              color="primary"
              icon={constants.languages[locale as Languages].icon}
            >
              {constants.languages[locale as Languages].text}
            </Dropdown.Button>

            <Dropdown.Menu aria-label="Static Actions" disabledKeys={['de']}>
              {otherLocale?.map((locale) => (
                <Dropdown.Item
                  key={locale}
                  css={{ a: { display: 'block' } }}
                  icon={constants.languages[locale as Languages].icon}
                  textValue={locale}
                >
                  {locale !== 'de' ? (
                    <Link href={route} locale={locale}>
                      <a>{constants.languages[locale as Languages].text}</a>
                    </Link>
                  ) : (
                    constants.languages[locale as Languages].text
                  )}
                </Dropdown.Item>
              )) ?? (
                <Dropdown.Item key={'es'} textValue={'ES'}>
                  ES
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          {/* <Button auto flat onClick={toggleTheme} icon={isDark ? <Sun /> : <Moon />} /> */}
        </li>
      </ul>
    </nav>
  )

  return (
    <div className={styles.VMenu__background}>
      <nav className={styles.VMenu__container}>
        <h3>
          <Link href="/">
            <a>
              <Image src="/logos/logo.svg" alt="Erick Logo" width={34} height={34} />
            </a>
          </Link>
        </h3>
        <div className={styles.VMenu__container__wrapper}>{menu}</div>
        <button
          type="button"
          onClick={toggleMenu}
          className={`MenuIcon${isMenuOpen ? ' active' : ''}`}
        >
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </button>
        <aside className={`Aside${isMenuOpen ? ' active' : ''}`}>{menu}</aside>
      </nav>
    </div>
  )
}
export default Navbar
