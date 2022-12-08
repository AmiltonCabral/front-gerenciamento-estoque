import Button from '../Button/Button'
import Input from '../Input/Input'
import Table from '../Table/Table'
import styles from './usuarios.module.scss'

function Usuarios() {
  return (
    <div className={styles.fsUsuarios}>
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

export default Usuarios
