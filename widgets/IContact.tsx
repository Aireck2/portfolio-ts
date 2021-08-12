import styles from '../styles/widgets/IContact.module.scss'
import Star from '../public/icons/star.svg'
import Fork from '../public/icons/fork.svg'
import React from 'react'
import Link from 'next/link'

const IContact = () => {
  const info = {
    name: 'Erick Escriba',
    company: 'EquipIndustry',
    companyWeb: 'http://equipindustry.com',
    githubRepo: 'https://github.com/Aireck2/portfolio-next',
    jobPosition: 'Front-end Developer',
    email: 'erickescribaa@gmail.com',
  }
  return (
    <div className={styles.IContact__container}>
      <div className={styles.IContact__container_contact}>
        <p className={styles.IContact__subheading_highlight}>What's next?</p>
        <h2 className={styles.IContact__heading}>Get In Touch</h2>
        <p className={styles.IContact__subheading}>
          Although I'm not currently looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <button className={styles.IContact__button}>
          <a href={`mailto:${info.email}`} target="_blank">
            Say Hello
          </a>
        </button>
      </div>
      <Link href={info.githubRepo}>
        <a target="_blank" className={styles.IContact__link}>
          <p className={styles.IContact__body}>Designed & Built by Erick Escriba</p>
          <div className={styles.IContact__github_stats}>
            <span className={styles.IContact__github_stats__container}>
              <Star />
              <span>3</span>
            </span>

            <span className={styles.IContact__github_stats__container}>
              <Fork />
              <span>10</span>
            </span>
          </div>
        </a>
      </Link>
    </div>
  )
}
export default IContact
