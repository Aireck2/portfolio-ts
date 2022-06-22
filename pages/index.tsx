import { NextPage } from 'next'
import Head from 'next/head'

import { Layout, Navbar } from '@layout'
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
        <link rel="icon" href="/logos/logo-white.svg" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <IEmail />
        <ISocial />

        <section className={styles.Home__banner}>
          <Layout>
            <IHome />
          </Layout>
        </section>

        <section className={styles.Home__about} id="about">
          <Layout>
            <IAbout />
          </Layout>
        </section>
        <div className={styles.Home__experience} id="experience">
          <Layout>
            <IExperience />
          </Layout>
        </div>
        <section className={styles.Home__experience} id="projects">
          <Layout>
            <IProjects />
            <IOtherProjects />
          </Layout>
        </section>

        <section className={styles.Home__contact} id="contact">
          <Layout>
            <IContact />
          </Layout>
        </section>
      </main>
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
