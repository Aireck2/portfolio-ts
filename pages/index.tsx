import { NextPage } from 'next'
import Head from 'next/head'

import { VContainer, VMenu } from '@layouts/index'
import {
  IAbout,
  IExperience,
  IHome,
  IContact,
  IEmail,
  ISocial,
  IProjects,
  IOtherProjects,
} from '@widgets/index'

import styles from '@styles/views/Home.module.scss'

const Home: NextPage = (_props) => {
  return (
    <>
      <Head>
        <title>Erick Escriba Arango</title>
        <meta property="og:type" content="website" />
        <meta name="description" content={'Erick Escriba Arango Portfolio Website'} />
        <meta property="og:title" content={'Erick Escriba Arango Portfolio'} />
        <meta name="keywords" content={'Erick EA'} />
        <link rel="icon" href="/logos/logo.svg" />
      </Head>
      <VMenu />
      <IEmail />
      <ISocial />
      <div className={styles.Home__banner}>
        <VContainer>
          <IHome />
        </VContainer>
      </div>

      <div className={styles.Home__about} id="about">
        <VContainer>
          <IAbout />
        </VContainer>
      </div>
      <div className={styles.Home__experience} id="experience">
        <VContainer>
          <IExperience />
        </VContainer>
      </div>
      <div className={styles.Home__experience} id="projects">
        <VContainer>
          <IProjects />
          <IOtherProjects />
        </VContainer>
      </div>

      <div className={styles.Home__contact} id="contact">
        <VContainer>
          <IContact />
        </VContainer>
      </div>
    </>
  )
}
export default Home

export function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: {
        ...require(`../locales/${locale}/translation.json`),
      },
      now: new Date().getTime(),
    },
  }
}
