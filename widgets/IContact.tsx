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
      <Link href={info.githubRepo}>
        <a target="_blank" className={styles.IContact__link}>
          <p className={styles.IContact__body}>Designed & Built by Erick Escriba</p>
          <div className={styles.IContact__github_stats}>
            <span className={styles.IContact__github_stats__container}>
              <Star />
              <span>3</span>
            </span>

            <span className={styles.IContact__github_stats__container}>
              <Fork />
              <span>5</span>
            </span>
          </div>
        </a>
      </Link>
      <p className={styles.IContact__body}>Copyright © 2021 All Rights Reserved</p>
    </div>
  )
}
export default IContact
