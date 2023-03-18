import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { styled } from '@nextui-org/react'

import { Icon } from '@components'

import { projects } from './data'

import styles from '@styles/widgets/IProjects.module.scss'

const Projects = () => {
  const t = useTranslations('Index')

  const StyledContainer = styled('div', {
    maxWidth: '1000px',
    margin: '100px auto',
    h2: {
      marginBottom: 40,
      maxWidth: '45ch',
      fontFamily: '$sans',
      fontWeight: '$black',
      fontSize: '32px',
    },
    'p.gradient': {
      background: '$gradient',
      backgroundClip: 'text',
      color: 'transparent',
      margin: '16px 0 10px',
      letterSpacing: '$normal',
      fontFamily: '$mono',
      position: 'relative',
      zIndex: 40,
    },
    'p.subtitle': {
      letterSpacing: '$normal',
      fontSize: '$xl',
      fontWeight: '$bold',
      margin: 0,
      position: 'relative',
      zIndex: 40,
      color: '$white',
      '@media screen and (min-width: 767px)': {
        color: '$accents9',
      },
    },
    'p.body': {
      fontSize: 16,
      position: 'relative',
      zIndex: 40,
      padding: '0',
      borderRadius: '4px',
      letterSpacing: '$normal',
      fontFamily: '$mono',
      color: '$white',
      bg: 'unset',
      bs: '0 10px 30px -15px #23272a',
      '@media screen and (min-width: 767px)': {
        bg: '$accents0',
        color: '$accents9',
        padding: '25px',
      },
    },
    '.techList': {
      position: 'relative',
      zIndex: 40,
      display: 'flex',
      flexWrap: 'wrap',
      color: '$white',
      padding: 0,
      margin: 0,
      marginTop: 10,
      gridGap: '10px',
      '@media screen and (min-width: 767px)': {
        color: 'unset',
      },
    },
    '.linkList': {
      position: 'relative',
      zIndex: 40,
      display: 'flex',
      color: '$white',
      padding: 0,
      margin: 0,
      gridGap: '10px',
      '@media screen and (min-width: 767px)': {
        color: 'unset',
      },
    },
  })

  return (
    <StyledContainer>
      <h2>{t('projectsTitle')}</h2>

      <ul>
        {projects.map((project, index) => (
          <li className={styles.IProjects__inner__container} key={index}>
            <div className={styles.IProjects__inner__content}>
              <div>
                <div className={styles.IProjects__inner__content__description}>
                  <div className={styles.IProjects__subheading__container}>
                    <p className="gradient">{t('projectSubtitle')}</p>
                    <p className="subtitle">{project.name}</p>
                  </div>
                  <p className="body">{t(project.description)}</p>
                  <ul className="techList">
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                  <ul className="linkList">
                    {project.links.map((link, index) => (
                      <li key={index}>
                        <Icon type={link.type} url={link.url} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.IProjects__inner__image}>
              <a href={project.imageUrl} target="_blank" rel="noreferrer">
                <Image
                  className="project-img"
                  src={project.imageRef}
                  priority={true}
                  alt="Project photo"
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </StyledContainer>
  )
}
export default Projects
