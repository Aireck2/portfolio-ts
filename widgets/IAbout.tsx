import { useTranslations } from 'next-intl'
import Image from 'next/image'

import QList from '@components/QList'

import styles from '@styles/widgets/IAbout.module.scss'

const IAbout = () => {
  const t = useTranslations('Index')

  const info = {
    description: [t('description1'), t('description2'), t('description3')],
    skills: [
      'Typescript',
      'React',
      'NextJS',
      'JavaScript (ES6+)',
      'GraphQL',
      'Node.js',
      'MongoDB',
      'Git',
      'CSS3',
      'SCSS',
      'LESS',
    ],
  }
  return (
    <div className={styles.IAbout__container}>
      <h2 className={styles.IAbout__subheading}>{t('aboutMe')}</h2>
      <div className={styles.IAbout__grid_container}>
        <div>
          {info.description.map((description, index) => (
            <p key={index} className={styles.IAbout__body}>
              {description}
            </p>
          ))}
          <QList arr={info.skills} column={2} />
        </div>

        <div className={styles.IAbout__photo_container}>
          <div className={styles.IAbout__photo__wrapper}>
            <Image
              src="/images/photo.png"
              alt="Erick Logo"
              width={400}
              height={400}
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default IAbout
