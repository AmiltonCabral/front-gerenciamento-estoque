import Link from 'next/link'
import styles from './navbar.module.scss'

function Navbar() {
  return (
    <nav className={styles.fsNavbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Usuários</Link>
        </li>
        <li>
          <Link href="/">Produtos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
