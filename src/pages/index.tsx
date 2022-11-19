import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from '../components/Login/Login'
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
        <h1 className={styles.title}>
          Sistema para gerenciamento de estoque
        </h1>
        <Usuarios />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
