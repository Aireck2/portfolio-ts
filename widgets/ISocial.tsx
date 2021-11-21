import QIconLink from '@components/QIconLink'

import styles from '@styles/widgets/ISocial.module.scss'

const ISocial = () => {
  const socialArr = [
    { type: 'github' as const, url: 'https://github.com/Aireck2' },
    { type: 'linkedIn' as const, url: 'https://www.linkedin.com/in/erickescriba/' },
    { type: 'instagram' as const, url: 'https://www.instagram.com/_aireck._/' },
    { type: 'codePen' as const, url: 'https://codepen.io/Aireck' },
  ]
  return (
    <div className={styles.ISocial__container}>
      <ul className={styles.ISocial__container__social}>
        {socialArr.map((social, index) => (
          <li key={index}>
            <QIconLink type={social.type} url={social.url} />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ISocial
