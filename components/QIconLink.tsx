import AppStore from '@public/icons/appstore.svg'
import Bookmark from '@public/icons/bookmark.svg'
import CodePen from '@public/icons/codepen.svg'
import ExternalLink from '@public/icons/external.svg'
import Folder from '@public/icons/folder.svg'
import Fork from '@public/icons/fork.svg'
import Github from '@public/icons/github.svg'
import Instagram from '@public/icons/instagram.svg'
import LinkedIn from '@public/icons/linkedin.svg'
import Loader from '@public/icons/loader.svg'
import PlayStore from '@public/icons/playstore.svg'
import Star from '@public/icons/star.svg'
import Twitter from '@public/icons/twitter.svg'

import styles from '@styles/components/QIconLink.module.scss'

interface IProps {
  type:
    | 'github'
    | 'linkedIn'
    | 'instagram'
    | 'codePen'
    | 'star'
    | 'fork'
    | 'externalLink'
    | 'folder'
    | 'appStore'
    | 'bookmark'
    | 'loader'
  url: string
  text?: string
  size?: 'small' | 'default'
}

const QIconLink: React.FC<IProps> = (props) => {
  const { url, type, text, size = 'default', ...others } = props

  const ICONS = {
    github: <Github {...others} />,
    linkedIn: <LinkedIn {...others} />,
    instagram: <Instagram {...others} />,
    codePen: <CodePen {...others} />,
    star: <Star {...others} />,
    fork: <Fork {...others} />,
    externalLink: <ExternalLink {...others} />,
    folder: <Folder {...others} />,
    appStore: <AppStore {...others} />,
    bookmark: <Bookmark {...others} />,
    loader: <Loader {...others} />,
    playStore: <PlayStore {...others} />,
    twitter: <Twitter {...others} />,
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`${styles.QIconLink} ${
        size === 'small' ? styles.QIconLink__small : styles.QIconLink__default
      } `}
    >
      {ICONS[type]}
      {text && <span className={styles.QIconLink__text}>{text}</span>}
    </a>
  )
}
export default QIconLink
