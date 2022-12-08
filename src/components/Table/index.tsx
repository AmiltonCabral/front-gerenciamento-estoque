import { users } from '../../../mocks'
import styles from './table.module.scss'

interface Props {
  header: string[]
}

function Table() {
  return (
    <div className={styles.fsTable}>
      <table data-fs-table>
        <thead>
          <tr>
            {users.header.map((head, index) => (
              <th key={`${index}-${head}`}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.data.map((user) => (
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
