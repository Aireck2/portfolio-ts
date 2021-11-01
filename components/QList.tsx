import styles from '@styles/components/QList.module.scss'

interface IProps {
  arr: string[]
  column?: 1 | 2
}

const QList: React.FC<IProps> = (props) => {
  const { arr, column = 1, ...others } = props

  return (
    <ul className={`${column === 1 ? styles.QList__list : styles.QList__list__2}`}>
      {arr?.map((item, index) => (
        <li key={index} className={styles.QList__item}>
          {item}
        </li>
      ))}
    </ul>
  )
}
export default QList
