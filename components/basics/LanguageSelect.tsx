import { useRouter } from 'next/router'
import Link from 'next/link'

import { Dropdown } from '@nextui-org/react'
import useIsMounted from '@hooks/useIsMounted'

import constants, { Languages } from '@helpers/constants'

export const LanguageSelect = () => {
  const { locale, locales, route } = useRouter()

  const otherLocale = locales?.filter((cur) => cur !== locale)
  const isMounted = useIsMounted()
  if (!isMounted) {
    return null
  }

  return (
    <Dropdown>
      <Dropdown.Button
        flat
        color="secondary"
        // icon={constants.languages[locale as Languages].icon}
      >
        {constants.languages[locale as Languages].text}
      </Dropdown.Button>

      <Dropdown.Menu aria-label="Static Actions" disabledKeys={['de']}>
        {otherLocale?.map((locale) => (
          <Dropdown.Item
            key={locale}
            css={{ a: { display: 'block' } }}
            // icon={constants.languages[locale as Languages].icon}
            textValue={locale}
          >
            {locale !== 'de' ? (
              <Link href={route} locale={locale}>
                {constants.languages[locale as Languages].text}
              </Link>
            ) : (
              constants.languages[locale as Languages].text
            )}
          </Dropdown.Item>
        )) ?? (
          <Dropdown.Item key={'es'} textValue={'ES'}>
            ES
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}
