import { useTranslations } from 'next-intl'

import { List } from '@components'

import styles from '@styles/widgets/IExperience.module.scss'

const Experience = () => {
  const t = useTranslations('Index')

  const info = {
    company: 'Equip',
    companyWeb: 'http://equipconstruye.com',
    jobPosition: t('job'),
    jobDescription: [
      t('jobDescription1'),
      t('jobDescription2'),
      t('jobDescription3'),
      t('jobDescription4'),
    ],
  }
  return (
    <div className={styles.IExperience__container}>
      <h2 className={styles.IExperience__heading}>{t('work')}</h2>
      <p className={styles.IExperience__subheading}>
        {`${info.jobPosition} `}
        <span className={styles.IExperience__highlight}>
          @{' '}
          <a href={info.companyWeb} target="_blank" rel="noreferrer">
            <span>{info.company}</span>
          </a>
        </span>
      </p>
      <p className={styles.IExperience__body}>{t('jobDate1')}</p>

      <List arr={info.jobDescription} />
    </div>
  )
}
export default Experience
