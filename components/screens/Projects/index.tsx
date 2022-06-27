import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Icon } from '@components'
import { projects } from './data'

import styles from '@styles/widgets/IProjects.module.scss'

const Projects = () => {
  const t = useTranslations('Index')

  return (
    <div className={styles.IProjects__container}>
      <h2 className={styles.IProjects__heading}>{t('projectsTitle')}</h2>

      <ul>
        {projects.map((project, index) => (
          <li className={styles.IProjects__inner__container} key={index}>
            <div className={styles.IProjects__inner__content}>
              <div>
                <div className={styles.IProjects__inner__content__description}>
                  <div className={styles.IProjects__subheading__container}>
                    <p className={styles.IProjects__subheading__overline}>{t('projectSubtitle')}</p>
                    <p className={styles.IProjects__subheading__title}>{project.name}</p>
                  </div>
                  <p className={styles.IProjects__body}>{t(project.description)}</p>
                  <ul className={styles.IProjects__inner__content__list}>
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                  <ul className={styles.IProjects__inner__content__links}>
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
                  width={700}
                  height={438}
                />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Projects
