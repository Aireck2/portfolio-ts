import styles from '../styles/widgets/IExperience.module.scss'

const IExperience = () => {
  const info = {
    name: 'Erick Escriba',
    company: 'EquipIndustry',
    companyWeb: 'http://equipindustry.com',
    jobPosition: 'Front-end Developer',
    email: 'erickescribaa@gmail.com',
    jobDescription: [
      'I wrote modern, efficient and robust code for a wide range of internal projects',
      'I worked with a variety of languages and frameworks like JavaScript, TypeScript, React, Nextjs, Graphql, etc.',
      'I worked closely with the designers and the commercial team to develop, document and manage the website using Nextjs, css and typescript.',
      'Use APIʼs to connect the web application with various services and systems.',
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
