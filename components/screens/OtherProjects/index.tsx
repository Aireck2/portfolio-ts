import { useTranslations } from 'next-intl'
import { styled } from '@nextui-org/react'

import { Icon } from '@components'

import FolderIcon from '@public/icons/folder.svg'

import { otherProjects } from './data'

import styles from '@styles/widgets/IOtherProjects.module.scss'

const OtherProjects = () => {
  const t = useTranslations('Index')

  const CardStyled = styled('li', {
    padding: '32px 28px',
    borderRadius: 2,
    bs: '2px 2px 7px -6px #23272a',
    bg: '$accents0',
  })

  return (
    <div className={styles.IOtherProjects__container}>
      <h2 className={styles.IOtherProjects__heading}>{t('otherProjectsTitle')}</h2>

      <ul className={styles.IOtherProjects__list__container}>
        {otherProjects.map((project, index) => (
          <CardStyled key={index}>
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
              <p className={styles.IOtherProjects__body}>{t(project.description)}</p>
              <ul className={styles.IOtherProjects__list}>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </CardStyled>
        ))}
      </ul>
    </div>
  )
}
export default OtherProjects
