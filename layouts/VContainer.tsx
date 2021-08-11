import { NextPage } from 'next'
import styles from '../styles/layouts/VContainer.module.scss'

const VContainer: NextPage = (props) => {
  return <div className={styles.VContainer}>{props.children}</div>
}
export default VContainer
