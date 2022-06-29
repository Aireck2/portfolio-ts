import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { Button, Icon } from '@components'

import styles from '@styles/widgets/IContact.module.scss'

const Contact = () => {
  const t = useTranslations('Index')
  const [githubInfo, setGitHubInfo] = useState({
    stars: '0',
    forks: '0',
  })

  const info = {
    email: 'erickescribaa@gmail.com',
    github: [
      {
        type: 'star' as const,
        url: 'https://github.com/Aireck2/portfolio-next',
        count: githubInfo.stars,
      },
      {
        type: 'fork' as const,
        url: 'https://github.com/Aireck2/portfolio-next',
        count: githubInfo.forks,
      },
    ],
    socialArr: [
      { type: 'github' as const, url: 'https://github.com/Aireck2' },
      { type: 'instagram' as const, url: 'https://www.instagram.com/_aireck._/' },
      { type: 'linkedIn' as const, url: 'https://www.linkedin.com/in/erickescriba/' },
      { type: 'codePen' as const, url: 'https://codepen.io/Aireck' },
    ],
  }
  useEffect(() => {
    fetch('https://api.github.com/repos/Aireck2/portfolio-ts')
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        })
      })
      .catch((e) => console.error(e))
  }, [])

  return (
    <div className={styles.IContact__container}>
      <div className={styles.IContact__container_contact}>
        <p className={styles.IContact__subheading_highlight}>{t('whatsNext')}</p>
        <h2 className={styles.IContact__heading}>{t('getInTouch')}</h2>
        <p className={styles.IContact__subheading}>{t('contactDescription')}</p>

        <Button href={`mailto:${info.email}`} text={t('sayHello')} />
      </div>

      <ul className={styles.IContact__social}>
        {info.socialArr.map((social, index) => (
          <li key={index}>
            <Icon type={social.type} url={social.url} />
          </li>
        ))}
      </ul>
      <ul className={styles.IContact__github_stats}>
        {info.github.map((item, index) => (
          <li key={index}>
            <Icon type={item.type} url={item.url} size="small" text={item.count.toString()} />
          </li>
        ))}
      </ul>
      <p className={styles.IContact__body}> 2022 © Erick Escriba - {t('footerQuote')}</p>
    </div>
  )
}
export default Contact
