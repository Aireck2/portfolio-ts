import { useTranslations } from 'next-intl'

import { Button } from '@components'

import styles from '@styles/widgets/IHome.module.scss'

const Banner = () => {
  const t = useTranslations('Index')

  const homeInfo = {
    greetings: t('greet'),
    name: 'Erick Escriba',
    phrase: t('phrase'),
    description: t('description'),
    email: 'erickescribaa@gmail.com',
  }
  return (
    <div className={styles.IHome__container}>
      <h2 className={styles.IHome__body__brand}>{homeInfo.greetings}</h2>
      <h2 className={styles.IHome__heading}>{homeInfo.name}.</h2>
      <h2 className={styles.IHome__heading}>{homeInfo.phrase}.</h2>
      <p className={styles.IHome__body}>{homeInfo.description}</p>
      <Button href={`mailto:${homeInfo.email}`} text={t('getInTouch')} />
    </div>
  )
}
export default Banner
