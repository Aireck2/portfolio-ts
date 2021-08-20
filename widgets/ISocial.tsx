import Github from '../public/icons/github.svg'
import LinkedIn from '../public/icons/linkedin.svg'
import Instagram from '../public/icons/instagram.svg'
import CodePen from '../public/icons/codepen.svg'


import styles from '../styles/widgets/ISocial.module.scss'

const ISocial = () => {
  const info = {
    email: 'erickescribaa@gmail.com',
    github: 'https://github.com/Aireck2',
    instagram: 'https://www.instagram.com/_aireck._/',
    linkedIn: 'https://www.linkedin.com/in/erickescriba/',
    codePen: 'https://codepen.io/Aireck',
  }
  return (
    <div className={styles.ISocial__container}>
      <ul className={styles.ISocial__container__social}>
        <li>
          <a href={`${info.github}`} target="_blank">
            <Github />
          </a>
        </li>
        <li>
          <a href={`${info.instagram}`} target="_blank">
            <Instagram />
          </a>
        </li>
        <li>
          <a href={`${info.linkedIn}`} target="_blank">
            <LinkedIn />
          </a>
        </li>
        <li>
          <a href={`${info.codePen}`} target="_blank">
            <CodePen />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default ISocial
