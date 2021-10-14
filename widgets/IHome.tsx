import { useTranslations } from 'next-intl'
import styles from '../styles/widgets/IHome.module.scss'

const IHome = () => {
  const t = useTranslations('Index')

  const homeInfo = {
    greetings: t('greet'),
    name: 'Erick Escriba',
    phrase: 'I build things for the web',
    description: t('description'),
    email: 'erickescribaa@gmail.com',
  }
  return (
    <div className={styles.IHome__container}>
      <h2 className={styles.IHome__body__brand}>{homeInfo.greetings}</h2>
      <h2 className={styles.IHome__heading}>{homeInfo.name}.</h2>
      <h2 className={styles.IHome__heading}>{homeInfo.phrase}.</h2>
      <p className={styles.IHome__body}>{homeInfo.description}</p>
      <button className={styles.IHome__button}>
        <a href={`mailto:${homeInfo.email}`} target="_blank" rel="noreferrer">
          {t('getInTouch')}
        </a>
      </button>
    </div>
  )
}
export default IHome
