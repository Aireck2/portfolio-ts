import { useTranslations } from 'next-intl'

import styles from '@styles/widgets/IExperience.module.scss'

const IExperience = () => {
  const t = useTranslations('Index')

  const info = {
    name: 'Erick Escriba',
    company: 'EquipIndustry',
    companyWeb: 'http://equipindustry.com',
    jobPosition: 'Front-end Developer',
    email: 'erickescribaa@gmail.com',
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
            {info.company}
          </a>
        </span>
      </p>
      <p className={styles.IExperience__body}>{t('jobDate1')}</p>
      <ul className={styles.IExperience__skill_list}>
        {info.jobDescription.map((job, index) => (
          <li key={index} className={styles.IExperience__skill_item}>
            {job}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default IExperience
