import Button from '../components/Button'
import Input from '../components/Input'
import Table from '../components/Table'
import styles from '../styles/entities-gallery.module.scss'

function Users() {
  return (
    <div className={styles.fsEntitiesGallery}>
      <div data-fs-menu>
        <h2>Usuários</h2>

        <form data-fs-form>
          <div>
            <label data-fs-form-label>
              Código
              <Input type="number" />
            </label>
            <label data-fs-form-label>
              Nome completo
              <Input type="text" />
            </label>
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
            <Button>Limpar</Button>
            <Button>Salvar</Button>
            <Button>Alterar</Button>
            <Button>Excluir</Button>
          </div>
        </form>
      </div>

      <div data-fs-table>
        <Table />
      </div>
    </div>
  )
}

export default Users
