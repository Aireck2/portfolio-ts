import styles from '../styles/widgets/ISocial.module.scss'

const IEmail = () => {
  const info = {
    email: 'erickescribaa@gmail.com',
  }
  return (
    <div className={styles.IEmail__container}>
      <div className={styles.IEmail__container__email}>
        <a href={`mailto:${info.email}`} target="_blank">
          {info.email}
        </a>
      </div>
    </div>
  )
}
export default IEmail
