import { ReactNode } from 'react'
import Navbar from '../Navbar'
import styles from './container.module.scss'

interface Props {
  children: ReactNode
}

function MainContainer({ children }: Props) {
  return (
    <div className={styles.fsContainer}>
      <Navbar />
      <main data-fs-main>{children}</main>
    </div>
  )
}

export default MainContainer
