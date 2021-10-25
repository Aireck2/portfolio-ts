import { useTranslations } from 'next-intl'
import Star from '@public/icons/star.svg'
import Fork from '@public/icons/fork.svg'
import Link from 'next/link'

import styles from '@styles/widgets/IContact.module.scss'

const IContact = () => {
  const t = useTranslations('Index')

  const info = {
    name: 'Erick Escriba',
    company: 'EquipIndustry',
    companyWeb: 'http://equipindustry.com',
    githubRepo: 'https://github.com/Aireck2/portfolio-next',
    jobPosition: 'Front-end Developer',
    email: 'erickescribaa@gmail.com',
    github: [
      { icon: Star, url: 'https://github.com/Aireck2/portfolio-next' },
      { icon: Fork, url: 'https://github.com/Aireck2/portfolio-next' },
    ],
  }
  return (
    <div className={styles.IContact__container}>
      <div className={styles.IContact__container_contact}>
        <p className={styles.IContact__subheading_highlight}>{t('whatsNext')}</p>
        <h2 className={styles.IContact__heading}>{t('getInTouch')}</h2>
        <p className={styles.IContact__subheading}>{t('contactDescription')}</p>
        <button className={styles.IContact__button}>
          <a href={`mailto:${info.email}`} target="_blank" rel="noreferrer">
            {t('sayHello')}
          </a>
        </button>
      </div>
      <ul className={styles.IContact__github_stats}>
        {info.github.map((item, index) => (
          <li key={index} className={styles.IContact__link}>
            <a href={`${item.url}`} target="_blank" rel="noreferrer">
              <span className={styles.IContact__github_stats__container}>
                <item.icon />
                <span>3</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.IContact__body}> 2021 © Erick Escriba - Take it easy</p>
    </div>
  )
}
export default IContact
