import { useTranslations } from 'next-intl'

import { Button, Icon } from '@components'

import styles from '@styles/widgets/IContact.module.scss'

interface Github {
  stars?: number
  forks?: number
}

const Contact: React.FC<{ github: Github }> = ({ github }) => {
  const t = useTranslations('Index')

  const info = {
    email: 'erickescribaa@gmail.com',
    github: [
      {
        type: 'star' as const,
        url: 'https://github.com/Aireck2/portfolio-next',
        count: github?.stars,
      },
      {
        type: 'fork' as const,
        url: 'https://github.com/Aireck2/portfolio-next',
        count: github?.forks,
      },
    ],
    socialArr: [
      { type: 'github' as const, url: 'https://github.com/Aireck2' },
      { type: 'instagram' as const, url: 'https://www.instagram.com/_aireck._/' },
      { type: 'linkedIn' as const, url: 'https://www.linkedin.com/in/erickescriba/' },
      { type: 'codePen' as const, url: 'https://codepen.io/Aireck' },
    ],
  }

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
            <Icon type={item.type} url={item.url} size="small" text={item?.count?.toString()} />
          </li>
        ))}
      </ul>
      <p className={styles.IContact__body}> 2022 © Erick Escriba - {t('footerQuote')}</p>
    </div>
  )
}

export default Contact
