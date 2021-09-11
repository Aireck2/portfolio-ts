import Image from 'next/image'

import styles from '../styles/widgets/IAbout.module.scss'

const IAbout = () => {
  const info = {
    description: [
      ` Hi there! My name is Erick and I enjoy creating things on the Internet.
      My interest in web development started in 2018, after the first conversation I had when I fortunately got a scholarship to take a course of socio-emotional skills and  web development by Foundation Forge (NGO) and Via Codigo, who taught me the basics: HTML5, CSS3 and the foundations of JS.`,
      ' Nowadays, I have the privilege of working on a startup that has taught me a lot in a short period of time. My main focus these days is to implementing the most beneficial solutions in internal projects that suits to the Equip Industry business model',
      'Here are some technologies with which I have been working recently:',
    ],
    skills: [
      'Typescript',
      'React',
      'NextJS',
      'JavaScript (ES6+)',
      'GraphQL',
      'Node.js',
      'Git',
      'CSS3',
      'SCSS',
      'LESS',
    ],
  }
  return (
    <div className={styles.IAbout__container}>
      <h2 className={styles.IAbout__subheading}>About Me</h2>
      <div className={styles.IAbout__grid_container}>
        <div>
          {info.description.map((description, index) => (
            <p key={index} className={styles.IAbout__body}>
              {description}
            </p>
          ))}
          <ul className={styles.IAbout__skill_list}>
            {info.skills.map((skill, index) => (
              <li key={index} className={styles.IAbout__skill_item}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.IAbout__photo_container}>
          <div className={styles.IAbout__photo__wrapper}>
            <Image src="/images/photo.png" alt="Erick Logo" width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default IAbout
