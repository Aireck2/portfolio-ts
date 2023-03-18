import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { List } from '@components'

import styles from '@styles/widgets/IAbout.module.scss'
import { styled } from '@nextui-org/react'

const About = () => {
  const t = useTranslations('Index')

  const info = {
    description: [t('description1'), t('description2'), t('description3'), t('description4')],
    skills: [
      'Typescript',
      'NextJS',
      'React',
      'JavaScript (ES6+)',
      'GraphQL',
      'Node.js',
      'MongoDB',
      'Git',
      'HTML5',
      'CSS3',
      'SCSS',
      'LESS',
    ],
  }
  const StyledContainer = styled('div', {
    maxWidth: 1000,
    margin: '100px auto',
    position: 'relative',
    zIndex: 10,
    // opacity: 0.4,
  })

  return (
    <StyledContainer>
      <div>
        <h2 className={styles.IAbout__subheading}>{t('aboutMe')}</h2>
        <div className={styles.IAbout__grid_container}>
          <div>
            {info.description.map((description, index) => (
              <p key={index} className={styles.IAbout__body}>
                {description}
              </p>
            ))}
            <List arr={info.skills} column={2} />
          </div>

          <div className={styles.IAbout__photo_container}>
            <div className={styles.IAbout__photo__wrapper}>
              <Image
                src="/images/about.png"
                alt="Erick Logo"
                width={300}
                height={300}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  )
}
export default About
