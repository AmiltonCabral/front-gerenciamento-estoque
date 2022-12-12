import Head from 'next/head'
import Button from '../components/Button'
import Input from '../components/Input'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.fsEntitiesGallery}>
      <Head>
        <title>Gerenciamento de estoque</title>
        <meta
          name="description"
          content="Gerenciamento de estoque para o projeto real"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div data-fs-menu>
        <h2>Gerenciamento de estoque</h2>

        <form data-fs-form>
          <div>
            <label data-fs-form-label>
              Login
              <Input type="text" />
            </label>
            <label data-fs-form-label>
              Senha
              <Input type="password" />
            </label>
          </div>

          <div data-fs-buttons>
            <Button>Entrar</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
