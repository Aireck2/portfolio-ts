import { useTranslations } from 'next-intl'

import { Icon } from '@components'

import FolderIcon from '@public/icons/folder.svg'

import { otherProjects } from './data'

import styles from '@styles/widgets/IOtherProjects.module.scss'

const IOtherProjects = () => {
  const t = useTranslations('Index')

  return (
    <div className={styles.IOtherProjects__container}>
      <h2 className={styles.IOtherProjects__heading}>{t('otherProjectsTitle')}</h2>

      <ul className={styles.IOtherProjects__list__container}>
        {otherProjects.map((project, index) => (
          <li className={styles.IOtherProjects__item__container} key={index}>
            <div className={styles.IOtherProjects__item__header}>
              <FolderIcon />
              <ul className={styles.IOtherProjects__links}>
                {project.links.map((link, index) => (
                  <li key={index}>
                    <Icon type={link.type} url={link.url} />
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.IOtherProjects__inner__content__description}>
              <p className={styles.IOtherProjects__subheading__title}>{project.name}</p>
              <p className={styles.IOtherProjects__body}>{project.description}</p>
              <ul className={styles.IOtherProjects__list}>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default IOtherProjects
