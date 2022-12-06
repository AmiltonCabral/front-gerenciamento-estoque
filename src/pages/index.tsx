import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Usuarios from '../components/Usuarios/Usuarios'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gerenciamento de estoque</title>
        <meta name="description" content="Gerenciamento de estoque para o projeto real" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Usuarios />
      </main>
    </div>
  )
}
