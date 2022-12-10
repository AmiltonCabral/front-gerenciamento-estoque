import Head from 'next/head'
import Login from '../components/Login'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gerenciamento de estoque</title>
        <meta
          name="description"
          content="Gerenciamento de estoque para o projeto real"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Login />
      </main>
    </div>
  )
}
