import styles from './usuarios.module.scss'

function Usuarios() {
  return (
    <div className={styles.fsUsuarios}>
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
        <button>Salvar</button>
        <button>Alterar</button>
        <button>Limpar</button>
        <button>Excluir</button>
      </div>
    </div>
  )
}

export default Usuarios