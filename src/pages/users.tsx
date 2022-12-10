import Button from '../components/Button'
import Input from '../components/Input'
import Table from '../components/Table'
import styles from '../styles/users.module.scss'

function Users() {
  return (
    <div className={styles.fsUsers}>
      <div data-fs-menu>
        <h2>Usuários</h2>

        <form data-fs-form>
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
        </form>

        <div data-fs-buttons>
          <Button>Limpar</Button>
          <Button>Salvar</Button>
          <Button>Alterar</Button>
          <Button>Excluir</Button>
        </div>
      </div>

      <Table />
    </div>
  )
}

export default Users
