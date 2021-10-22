import Image from 'next/image'
import { useTranslations } from 'next-intl'

import Github from '@public/icons/github.svg'
import ExternalLink from '@public/icons/external.svg'

import styles from '@styles/widgets/IProjects.module.scss'

const IProjects = () => {
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
  ]
  return (
    <div className={styles.IProjects__container}>
      <h2 className={styles.IProjects__heading}>{t('projectsTitle')}</h2>

      <ul>
        {projects.map((project, index) => (
          <li className={styles.IProjects__inner__container} key={index}>
            <div className={styles.IProjects__inner__content}>
              <div>
                <div className={styles.IProjects__inner__content__description}>
                  <p className={styles.IProjects__subheading__overline}>Featured Project</p>
                  <p className={styles.IProjects__subheading__title}>{`Halcyon Theme`}</p>
                  <p className={styles.IProjects__body}>
                    {`Halcyon Theme Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Aut non aliquid nesciunt repudiandae? Ad repellendus, blanditiis perspiciatis,
              nisi eveniet aspernatur accusantium ipsa adipisci delectus`}
                  </p>
                  <ul className={styles.IProjects__inner__content__list}>
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                  <ul className={styles.IProjects__inner__content__links}>
                    {project.links.map((link, index) => (
                      <li key={index}>
                        <a href={`${link.url}`} target="_blank" rel="noreferrer">
                          <link.icon />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.IProjects__inner__image}>
              <a href="">
                <Image
                  className="project-img"
                  src="/images/halcyon.png"
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
export default IProjects
