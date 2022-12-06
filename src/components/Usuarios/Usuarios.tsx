import styles from './usuarios.module.scss'
import { users } from '../../../mocks'

function Usuarios() {
  return (
    <div className={styles.fsUsuarios}>
      <div data-fs-menu>

        <h2>Usuários</h2>

        <form data-fs-form>
          <label data-fs-form-label>
            Código
            <input type="number" />
          </label>
          <label data-fs-form-label>
            Nome completo
            <input type="text" />
          </label>
          <label data-fs-form-label>
            Login
            <input type="text" />
          </label>
          <label data-fs-form-label>
            Senha
            <input type="password" />
          </label>
        </form>

        <div data-fs-buttons>
          <button>Limpar</button>
          <button>Salvar</button>
          <button>Alterar</button>
          <button>Excluir</button>
        </div>
      </div>

      <div>
        <table data-fs-table>
          <thead>
            <tr>
              <th data-fs-table-id>Código</th>
              <th data-fs-table-name>Nome</th>
              <th data-fs-table-login>Login</th>
            </tr>
          </thead>
          <tbody>
            {users.users.map((user) => (
              <tr key={user.id} data-fs-table-items>
                <td data-fs-table-id>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.login}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Usuarios