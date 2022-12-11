import Button from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'
import Table from '../components/Table'
import styles from '../styles/entities-gallery.module.scss'

function Stock() {
  return (
    <div className={styles.fsEntitiesGallery}>
      <div data-fs-menu>
        <h2>Estoque</h2>

        <form data-fs-form>
          <div data-fs-form-inputs>
            <label data-fs-form-label>
              Tipo Movimentação
              <Select>
                <option value="entrada">Entrada</option>
              </Select>
            </label>
            <label data-fs-form-label="small">
              Quantidade
              <Input type="number" />
            </label>
            <label data-fs-form-label="small">
              Valor
              <Input type="text" />
            </label>
            <label data-fs-form-label>
              Descrição do produto
              <Select>
                <option value="0">Primeira entrada</option>
                <option value="1">Segunda entrada</option>
                <option value="2">Terceira entrada</option>
              </Select>
            </label>
            <label data-fs-form-label>
              Filtro
              <Select>
                <option value="0">Primeira entrada</option>
                <option value="1">Segunda entrada</option>
                <option value="2">Terceira entrada</option>
              </Select>
            </label>
            <label data-fs-form-label>
              Pesquisar
              <Input type="text" />
            </label>
          </div>

          <div data-fs-buttons>
            <Button>Buscar</Button>
            <Button type="submit">Salvar</Button>
            <Button data-fs-button-big>Gerar Relatório</Button>
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
