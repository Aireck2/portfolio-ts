import { useTranslations } from 'next-intl'

import Github from '@public/icons/github.svg'
import ExternalLink from '@public/icons/external.svg'
import FolderIcon from '@public/icons/folder.svg'

import styles from '@styles/widgets/IOtherProjects.module.scss'

const IOtherProjects = () => {
  const t = useTranslations('Index')

  const projects = [
    {
      name: 'Halcyon Theme',
      description: `Halcyon Theme Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Aut non aliquid nesciunt repudiandae? Ad repellendus, blanditiis perspiciatis,
              nisi eveniet aspernatur accusantium ipsa adipisci delectus`,
      technologies: ['VS Code', 'Atom', 'Atom'],
      links: [
        { icon: Github, url: 'https://github.com/Aireck2' },
        { icon: ExternalLink, url: 'https://codepen.io/Aireck' },
      ],
    },
    {
      name: 'Halcyon Theme',
      description: `Halcyon Theme Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Aut non aliquid nesciunt repudiandae? Ad repellendus, blanditiis perspiciatis,
              nisi eveniet aspernatur accusantium ipsa adipisci delectus`,
      technologies: ['VS Code', 'Atom', 'Atom'],
      links: [
        { icon: Github, url: 'https://github.com/Aireck2' },
        { icon: ExternalLink, url: 'https://codepen.io/Aireck' },
      ],
    },
    {
      name: 'Halcyon Theme',
      description: `Halcyon Theme Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Aut non aliquid nesciunt repudiandae? Ad repellendus, blanditiis perspiciatis,
              nisi eveniet aspernatur accusantium ipsa adipisci delectus`,
      technologies: ['VS Code', 'Atom', 'Atom'],
      links: [
        { icon: Github, url: 'https://github.com/Aireck2' },
        { icon: ExternalLink, url: 'https://codepen.io/Aireck' },
      ],
    },
  ]
  return (
    <div className={styles.IOtherProjects__container}>
      <h2 className={styles.IOtherProjects__heading}>{t('otherProjectsTitle')}</h2>

      <ul className={styles.IOtherProjects__list__container}>
        {projects.map((project, index) => (
          <li className={styles.IOtherProjects__item__container} key={index}>
            <div className={styles.IOtherProjects__item__header}>
              <FolderIcon />
              <ul className={styles.IOtherProjects__links}>
                {project.links.map((link, index) => (
                  <li key={index}>
                    <a href={`${link.url}`} target="_blank" rel="noreferrer">
                      <link.icon />
                    </a>
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
