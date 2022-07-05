import { useRouter } from 'next/router'

import { useTranslations } from 'next-intl'
import { Button, Link } from '@nextui-org/react'

export const ResumeButton = () => {
  const { locale } = useRouter()
  const t = useTranslations('Index')

  return (
    <Link
      color="secondary"
      href={`/resume_${locale?.toUpperCase()}.pdf`}
      target="_blank"
      css={{ alignItems: 'center' }}
    >
      <>{t('resume')}</>
    </Link>
  )
}
