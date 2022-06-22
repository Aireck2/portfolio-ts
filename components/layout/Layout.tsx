import styles from '@styles/layouts/VContainer.module.scss'

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className={styles.VContainer}>{props.children}</div>
}
export default Layout
