import styles from '@styles/components/QButton.module.scss'

interface IProps {
  href: string
  text: string
}

export const Button: React.FC<IProps> = (props) => {
  const { href, text } = props
  return (
    <button className={styles.QButton}>
      <a href={href} target="_blank" rel="noreferrer">
        {text}
      </a>
    </button>
  )
}
