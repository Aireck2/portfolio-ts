import { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/layouts/VMenu.module.scss'

const VMenu: NextPage = () => (
  <div className={styles.VMenu__background}>
    <div className={styles.VMenu__container}>
      <h1>
        <Image src="/logos/logo.svg" alt="Erick Logo" width={34} height={34} />
      </h1>
      <ul className={styles.VMenu__navbar}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button className={styles.VMenu__button}>
            <a href="/resume">Resume</a>
          </button>
        </li>
      </ul>
    </div>
  </div>
)
export default VMenu
