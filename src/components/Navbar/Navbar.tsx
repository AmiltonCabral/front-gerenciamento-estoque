import Link from 'next/link'
import styles from './navbar.module.scss'

function Navbar() {
  return (
    <nav className={styles.fsNavbar}>
      <ul data-fs-navbar-list>
        <li data-fs-navbar-item>
          <Link href="/">Home</Link>
        </li>
        <li data-fs-navbar-item>
          <Link href="/users">Usuários</Link>
        </li>
        <li data-fs-navbar-item>
          <Link href="/products">Produtos</Link>
        </li>
        <li data-fs-navbar-item>
          <Link href="/stock">Estoque</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
