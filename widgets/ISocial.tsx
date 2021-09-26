import Github from '../public/icons/github.svg'
import LinkedIn from '../public/icons/linkedin.svg'
import Instagram from '../public/icons/instagram.svg'
import CodePen from '../public/icons/codepen.svg'

import styles from '../styles/widgets/ISocial.module.scss'

const ISocial = () => {
  const socialArr = [
    { icon: Github, url: 'https://github.com/Aireck2' },
    { icon: Instagram, url: 'https://www.instagram.com/_aireck._/' },
    { icon: LinkedIn, url: 'https://www.linkedin.com/in/erickescriba/' },
    { icon: CodePen, url: 'https://codepen.io/Aireck' },
  ]
  return (
    <div className={styles.ISocial__container}>
      <ul className={styles.ISocial__container__social}>
        {socialArr.map((social, index) => (
          <li key={index}>
            <a href={`${social.url}`} target="_blank" rel="noreferrer">
              <social.icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ISocial
