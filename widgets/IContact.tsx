import { useTranslations } from 'next-intl'

import { QButton, QIconLink } from '@components/index'

import styles from '@styles/widgets/IContact.module.scss'

const IContact = () => {
  const t = useTranslations('Index')

  const info = {
    githubRepo: 'https://github.com/Aireck2/portfolio-next',
    email: 'erickescribaa@gmail.com',
    github: [
      { type: 'star' as const, url: 'https://github.com/Aireck2/portfolio-next' },
      { type: 'fork' as const, url: 'https://github.com/Aireck2/portfolio-next' },
    ],
  }

  return (
    <div className={styles.IContact__container}>
      <div className={styles.IContact__container_contact}>
        <p className={styles.IContact__subheading_highlight}>{t('whatsNext')}</p>
        <h2 className={styles.IContact__heading}>{t('getInTouch')}</h2>
        <p className={styles.IContact__subheading}>{t('contactDescription')}</p>

        <QButton href={`mailto:${info.email}`} text={t('sayHello')} />
      </div>
      <ul className={styles.IContact__github_stats}>
        {info.github.map((item, index) => (
          <li key={index}>
            <QIconLink type={item.type} url={item.url} size="small" text="3" />
          </li>
        ))}
      </ul>
      <p className={styles.IContact__body}> 2021 © Erick Escriba - Have 365 Nice days</p>
    </div>
  )
}
export default IContact
