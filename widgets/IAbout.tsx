import styles from '../styles/widgets/IAbout.module.scss'

const IAbout = () => {
  const homeInfo = {
    greetings: 'Hi, my name is',
    name: 'Erick Escriba',
    phrase: 'I build things for the web',
    description: `I'm a front-end developer based in Lima, Peru . I'm currently into Web Development and
              I'm passionate in building exceptional websites`,
    email: 'erickescribaa@gmail.com',
    skills: [
      'JavaScript (ES6+)',
      'React',
      'Typescript',
      'GraphQL',
      'Node.js',
      'CSS',
      'SCSS',
      'LESS',
    ],
  }
  return (
    <div className={styles.IAbout__container}>
      <div className={styles.IAbout__grid_container}>
        <div>
          <h2 className={styles.IAbout__subheading}>About Me</h2>
          <p className={styles.IAbout__body}>{homeInfo.description}</p>
          <ul className={styles.IAbout__skill_list}>
            {homeInfo.skills.map((skill, index) => (
              <li key={index} className={styles.IAbout__skill_item}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.IAbout__photo_contaier}>
          <div className={styles.IAbout__photo}></div>
        </div>
      </div>
    </div>
  )
}
export default IAbout
