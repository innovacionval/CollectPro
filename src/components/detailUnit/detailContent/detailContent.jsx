import { FiPrinter } from 'react-icons/fi'
import styles from './detailContent.module.scss'
export const DetailContent = () => {
  const labelTable = ['Días Mora', 'Concepto', 'Total', 'Dtos Aplicables', 'Total (Con Descuento)', 'Capital', 'Interés Mora', 'Honorarios']
  const dataTable = ['0', 'Cuota administración', '$ 0', '$ 0', '$ 0', '$ 0', '$ 0', '$ 0']
  return (
    <div className={styles.mainInfo}>
        <div className={styles.containerBar}>
          <h3>Ajustes</h3>
          <button className={styles.barBtn}>
            Imprimir
            <FiPrinter/>
          </button>
        </div>
        <div className={styles.containerSettings}>
          <div className={styles.setting}>
            <div className={styles.settingBar}>
              <p>Fecha</p>
              <p>Estado</p>
              <p>Tipo</p>
              <p>Concepto</p>
              <p>Detalle</p>
            </div>
            <div className={styles.settingContent}>
              <p>01/01/2021</p>
              <p>Pagado</p>
              <p>Abono</p>
              <p>Abono</p>
              <p>Abono</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className={styles.containerTable}>
          <div className={styles.titleTable}>
            <p>2024 - $ 0</p>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                {labelTable.map((label, index) => (
                  <th key={index}>{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {dataTable.map((data, index) => (
                  <td key={index}>{data}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )
}
