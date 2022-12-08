import { ReactNode } from 'react'
import Navbar from '../Navbar'
import styles from './container.module.scss'

interface Props {
  children: ReactNode
}

function MainContainer({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className={styles.fsContainer}>{children}</main>
    </>
  )
}

export default MainContainer
