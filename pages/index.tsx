import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { VContainer, VMenu } from '../layouts'
import { IAbout, IExperience, IHome, IContact, IEmail, ISocial } from '../widgets'

import styles from '../styles/views/Home.module.scss'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const Home: NextPage = (_props) => {
  const t = useTranslations('Index')
  const { locale, locales, route } = useRouter()

  const otherLocale = locales?.find((cur) => cur !== locale)

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
          <p>
            {otherLocale && (
              <Link href={route} locale={otherLocale}>
                <a>{t('switchLocale', { locale: otherLocale })}</a>
              </Link>
            )}
          </p>
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
