import Button from '../components/Button'
import Input from '../components/Input'
import Table from '../components/Table'
import styles from '../styles/entities-gallery.module.scss'

function Produtos() {
  return (
    <div className={styles.fsEntitiesGallery}>
      <div data-fs-menu>
        <h2>Produtos</h2>

        <form data-fs-form>
          <div>
            <label data-fs-form-label>
              Código
              <Input type="number" />
            </label>
            <label data-fs-form-label>
              Descrição do produto
              <Input type="text" />
            </label>
            <label data-fs-form-label>
              Valor
              <Input type="text" />
            </label>
          </div>

          <div data-fs-buttons>
            <Button>Limpar</Button>
            <Button type="submit">Salvar</Button>
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

export default Produtos
