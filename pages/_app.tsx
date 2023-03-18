import { NextPage } from 'next'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'

import { NextIntlProvider } from 'next-intl'
import { NextUIProvider, useTheme } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { darkTheme, lightTheme } from 'themes'

import gtag from '@helpers/ga.helper'
import config from '@helpers/config.helper'

import globalStyles from '@styles/globalStyles'

const Application: NextPage<AppProps<{ messages: any; now: any }>> = ({ Component, pageProps }) => {
  const router = useRouter()
  const theme = useTheme()

  // TODO: refactor ga config
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageView(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  globalStyles()
  return (
    <NextIntlProvider
      formats={{
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          },
        },
      }}
      messages={pageProps.messages}
      now={new Date(pageProps.now)}
      timeZone="Central Daylight Time"
    >
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${config.marketing.ga.trackingId}`}
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           
           gtag('config', '${config.marketing.ga.trackingId}',{
             page_path: window.location.pathname,
           });
          `,
        }}
      />
      <NextThemesProvider
        defaultTheme="dark"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </NextIntlProvider>
  )
}
export default Application
