import styles from '../styles/widgets/IHome.module.scss'

const IHome = () => {
  const homeInfo = {
    greetings: 'Hi, my name is',
    name: 'Erick Escriba',
    phrase: 'I build things for the web',
    description: `I'm a front-end developer based in Lima, Peru . I'm currently into Web Development and
              I'm passionate in building exceptional websites`,
    email: 'erickescribaa@gmail.com',
  }
  return (
    <div className={styles.IHome__container}>
      <h2 className={styles.IHome__body__brand}>Hi, my name is</h2>
      <h2 className={styles.IHome__heading}>{homeInfo.name}.</h2>
      <h2 className={styles.IHome__heading}>{homeInfo.phrase}.</h2>
      <p className={styles.IHome__body}>{homeInfo.description}</p>
      <button className={styles.IHome__button}>
        <a href={`mailto:${homeInfo.email}`} target="_blank">
          Get in touch
        </a>
      </button>
    </div>
  )
}
export default IHome
