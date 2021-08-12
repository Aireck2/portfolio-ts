import { NextPage } from 'next'
import Head from 'next/head'

import { VContainer, VMenu } from '../layouts'
import { IAbout, IExperience, IHome } from '../widgets'

import styles from '../styles/views/Home.module.scss'

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Erick Escriba Arango</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logos/logo.svg" />
      </Head>
      <VMenu />
      <div className={styles.Home__banner}>
        <VContainer>
          <IHome />
        </VContainer>
      </div>

      <div className={styles.Home__about}>
        <VContainer>
          <IAbout />
        </VContainer>
      </div>
      <div className={styles.Home__experience}>
        <VContainer>
          <IExperience />
        </VContainer>
      </div>
    </>
  )
}
export default Home
