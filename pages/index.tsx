import { NextPage } from 'next'
import Head from 'next/head'

import Particles from 'react-tsparticles'

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
      <header>
        <VMenu />
      </header>
      <main>
        <IEmail />
        <ISocial />

        <section className={styles.Home__banner}>
          <VContainer>
            <IHome />
          </VContainer>
        </section>

        <section className={styles.Home__about} id="about">
          <VContainer>
            <IAbout />
          </VContainer>
        </section>
        <div className={styles.Home__experience} id="experience">
          <VContainer>
            <IExperience />
          </VContainer>
        </div>
        <section className={styles.Home__experience} id="projects">
          <VContainer>
            <IProjects />
            <IOtherProjects />
          </VContainer>
        </section>

        <section className={styles.Home__contact} id="contact">
          <VContainer>
            <IContact />
          </VContainer>
        </section>
      </main>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 100,
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 0,
            },
            color: {
              value: '#ff0000',
              animation: {
                enable: true,
                speed: 180,
                sync: true,
              },
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 1,
            },
            size: {
              value: { min: 1, max: 5 },
              animation: {
                enable: true,
                speed: 5,
                minimumValue: 1,
                sync: true,
                startValue: 'min',
                count: 1,
              },
            },
            move: {
              enable: true,
              speed: { min: 10, max: 20 },
              direction: 'top',
              random: false,
              straight: false,
              outMode: 'bounce-horizontal',
              gravity: {
                enable: true,
              },
            },
          },
          interactivity: {
            detectsOn: 'window',
            events: {
              onclick: {
                enable: true,
                mode: 'trail',
              },
              resize: true,
            },
            modes: {
              trail: {
                delay: 0.1,
                quantity: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
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
