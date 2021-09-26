import { useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import styles from '../styles/layouts/VMenu.module.scss'

const VMenu: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { locale, locales, route } = useRouter()

  const t = useTranslations('Index')

  const otherLocale = locales?.find((cur) => cur !== locale)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { name: t('about'), url: '#about' },
    { name: t('experience'), url: '#experience' },
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
              <a target="_blank">{t('resume')}</a>
            </Link>
          </button>
        </li>
        <li key="button-locale">
          <Link href={route} locale={otherLocale}>
            <a>
              <button className={styles.VMenu__button}>
                {locale === 'es' ? (
                  <>
                    <Image src="/images/flag_spain.png" alt="" width="23.3" height="15.6" />
                    <span style={{ marginLeft: 8 }}>Español</span>
                  </>
                ) : (
                  <>
                    <Image src="/images/flag_usa.png" alt="" width="23.3" height="15.6" />
                    <span style={{ marginLeft: 8 }}>English</span>
                  </>
                )}
              </button>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )

  return (
    <div className={styles.VMenu__background}>
      <div className={styles.VMenu__container}>
        <h1>
          <Link href="/">
            <a>
              <Image src="/logos/logo.svg" alt="Erick Logo" width={34} height={34} />
            </a>
          </Link>
        </h1>
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
      </div>
    </div>
  )
}
export default VMenu
