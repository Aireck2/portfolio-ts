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
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'bubble',
              },
              onHover: {
                enable: true,
                mode: 'grab',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 20,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#1d1e1f',
            },
            links: {
              color: '#bfbfc0',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 30,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: 'round',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
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
