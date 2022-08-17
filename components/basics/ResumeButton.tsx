import { useRouter } from 'next/router'

import { useTranslations } from 'next-intl'
import { Link } from '@nextui-org/react'

export const ResumeButton: React.FC<{ fontSize?: string }> = ({ fontSize = '16px' }) => {
  const { locale } = useRouter()
  const t = useTranslations('Index')

  return (
    <Link
      color="secondary"
      href={`/resume_${locale?.toUpperCase()}.pdf`}
      target="_blank"
      css={{ alignItems: 'center', fontSize }}
    >
      <>{t('resume')}</>
    </Link>
  )
}
