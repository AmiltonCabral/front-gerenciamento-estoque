import { users } from '../../../mocks'
import styles from './table.module.scss'

function Table() {
  return (
    <div className={styles.fsTable}>
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
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.login}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table