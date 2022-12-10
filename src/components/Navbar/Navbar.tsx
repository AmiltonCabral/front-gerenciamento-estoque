import Link from 'next/link'
import styles from './navbar.module.scss'

function Navbar() {
  return (
    <nav className={styles.fsNavbar}>
      <ul data-fs-navbar-list>
        <li data-fs-nabbar-item>
          <Link href="/">Home</Link>
        </li>
        <li data-fs-nabbar-item>
          <Link href="/users">Usuários</Link>
        </li>
        <li data-fs-nabbar-item>
          <Link href="/">Produtos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
