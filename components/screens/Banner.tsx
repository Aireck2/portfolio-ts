import { useTranslations } from 'next-intl'

import { Button } from '@components'

import { styled } from '@nextui-org/react'

const StyledContainer = styled('div', {
  maxWidth: '932px',
  margin: 'auto',
  padding: '75px 0',
  '& p': {
    maxWidth: '45ch',
    fontFamily: '$mono',
    fontSize: 'clamp(15px, 0.6403rem + 1.2702vw, 20px)',
    letterSpacing: '$normal',
    '&.body': {
      color: '$accents7',
    },
    '&.subtitle': {
      margin: 0,
    },
  },
  h2: {
    margin: 0,
    maxWidth: '45ch',
    fontFamily: '$sans',
    fontWeight: '$black',
    fontSize: 'clamp(1.875rem, 0.8678rem + 4.2975vw, 3.5rem)',
  },
})

const Banner = () => {
  const t = useTranslations('Index')

  const homeInfo = {
    greetings: t('greet'),
    name: 'Erick Escriba',
    phrase: t('phrase'),
    description: t('description'),
    email: 'erickescribaa@gmail.com',
  }

  return (
    <StyledContainer>
      <p className="subtitle">{homeInfo.greetings}</p>
      <h2>{homeInfo.name}</h2>
      <h2>{homeInfo.phrase}</h2>
      <p className="body">{homeInfo.description}</p>
      <Button href={`mailto:${homeInfo.email}`} text={t('getInTouch')} />
    </StyledContainer>
  )
}
export default Banner
