import styles from '../styles/widgets/IExperience.module.scss'

const IExperience = () => {
  const info = {
    name: 'Erick Escriba',
    company: 'EquipIndustry',
    companyWeb: 'http://equipindustry.com',
    jobPosition: 'Front-end Developer',
    email: 'erickescribaa@gmail.com',
    jobDescription: [
      'Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
      'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
      'Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript',
    ],
  }
  return (
    <div className={styles.IExperience__container}>
      <h2 className={styles.IExperience__heading}>Where I've worked</h2>
      <p className={styles.IExperience__subheading}>
        {`${info.jobPosition} `}
        <span className={styles.IExperience__highlight}>
          @{' '}
          <a href={info.companyWeb} target="_blank">
            {info.company}
          </a>
        </span>
      </p>
      <span className={styles.IExperience__body}>
        Dec 2019 - Present 
      </span>
      <ul className={styles.IExperience__skill_list}>
        {info.jobDescription.map((job, index) => (
          <li key={index} className={styles.IExperience__skill_item}>
            {job}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default IExperience
