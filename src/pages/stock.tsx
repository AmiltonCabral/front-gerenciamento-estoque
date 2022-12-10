import Button from '../components/Button'
import Input from '../components/Input'
import Table from '../components/Table'
import styles from '../styles/entities-gallery.module.scss'

function Stock() {
  return (
    <div className={styles.fsEntitiesGallery}>
      <div data-fs-menu>
        <h2>Estoque</h2>

        <form data-fs-form>
          <div>
            <label data-fs-form-label>
              Tipo Movimentação
              <select>
                <option value="entrada">Entrada</option>
              </select>
            </label>
            <label data-fs-form-label>
              Quantidade
              <Input type="number" />
            </label>
            <label data-fs-form-label>
              Valor
              <Input type="text" />
            </label>
            <label data-fs-form-label>
              Descrição do produto
              <select>
                <option value="0">Alguma entrada</option>
              </select>
            </label>
            <label data-fs-form-label>
              Filtro
              <select>
                <option value="0">Alguma entrada</option>
              </select>
            </label>
            <label data-fs-form-label>
              Pesquisar
              <Input type="text" />
            </label>
          </div>

          <div data-fs-buttons>
            <Button>Buscar</Button>
            <Button type="submit">Salvar</Button>
            <Button>Gerar Relatório</Button>
          </div>
        </form>
      </div>

      <div data-fs-table>
        <Table />
      </div>
    </div>
  )
}

export default Stock
