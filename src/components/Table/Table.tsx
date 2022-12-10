import { users } from '../../../mocks'
import styles from './table.module.scss'

interface Props {
  header: string[]
}

function Table() {
  return (
    <table className={styles.fsTable}>
      <thead>
        <tr>
          {users.header.map((head, index) => (
            <th key={`${index}-${head}`}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.login}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
