import { FC, Fragment } from 'react'
import Image from 'next/image'

import useIsMounted from '@hooks/useIsMounted'

import { techStackList } from './data'

import { StyledTechStack } from './styles'

interface TechStackProps {
  showCaption?: boolean
}

const TechStack: FC<TechStackProps> = ({ showCaption = false }) => {
  const isMount = useIsMounted()

  if (!isMount) {
    return null
  }

  return (
    <>
      <StyledTechStack className="dock">
        <div className="background" />
        {techStackList.map((ts) => (
          <Fragment key={ts.src}>
            <figure className="tool" key={ts.src}>
              <Image className="image" src={ts.src} alt={ts.alt} width={30} height={30} />
            </figure>
            {showCaption && <span className="caption">{ts.name}</span>}
          </Fragment>
        ))}
      </StyledTechStack>
    </>
  )
}

export default TechStack
