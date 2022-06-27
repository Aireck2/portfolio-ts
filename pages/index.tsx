import { NextPage } from 'next'
import Head from 'next/head'

import { Layout, Navbar } from '@layout'
import {
  About,
  Experience,
  Banner,
  Contact,
  Email,
  Social,
  Projects,
  OtherProjects,
} from '@screens'

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
        <section className={styles.Home__banner}>
          <Layout>
            <Banner />
          </Layout>
        </section>

        <section className={styles.Home__about} id="about">
          <Layout>
            <About />
          </Layout>
        </section>
        <div className={styles.Home__experience} id="experience">
          <Layout>
            <Experience />
          </Layout>
        </div>
        <section className={styles.Home__experience} id="projects">
          <Layout>
            <Projects />
            <OtherProjects />
          </Layout>
        </section>

        <section className={styles.Home__contact} id="contact">
          <Layout>
            <Contact />
          </Layout>
        </section>
      </main>
      <Email />
      <Social />
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
