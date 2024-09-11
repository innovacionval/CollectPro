import { FaArrowLeft } from 'react-icons/fa'
import styles from './sidebar.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
export const Sidebar = ({sections, setSections}) => {
  const {id} = useParams()
  const navigate = useNavigate()
  return (
    <div  className={styles.basicInfo}>
      <div className={styles.containerBack} onClick={() => navigate(`/units/${id}`)}>
          <FaArrowLeft />
        </div>
        <div className={styles.firstCard}>
          <h4>CONJUNTO RESIDENCIAL IRIS PH</h4>
          <p>Torre 3 - Apto 101</p>
          <span className={styles.status}>
            Estado: Pagado
          </span>
        </div>
        <div className={styles.secondCard}>
          <h4>ANYUL SANDOBAL AGUDELO</h4>
          <div className={styles.identification}>
            <h4>Identificación</h4>
            <span>123456789</span>
            <h4>Celular</h4>
            <span>3004878504</span>
          </div>
          <div className={styles.email}>
            <h4>Correo</h4>
            <span>
              admin@admin.com
            </span>
          </div>
        </div>
        <div className={styles.thirdCard}>
          <h4 className={styles.title}>Valor total deuda (Descuento Aplicado)</h4>
          <div className={styles.totalDebt}>
            <h3>$ 203.690</h3>
          </div>
          <div className={styles.defaultDays}>
            <span>Días mora (máximo): <strong>272</strong></span>
          </div>
          <div className={styles.rowOne}>
            <div className={styles.value}>
              <strong>$ 0</strong>
              <span>Capital (Din Dcto)</span>
            </div>
            <div className={styles.value}>
              <strong>$ 0</strong>
              <span>Intereses Mora</span>
            </div>
          </div>
          <div className={styles.rowTwo}>
            <strong>$ 0</strong>
            <span> DTO hasta 31/12/2021</span>
          </div>
          <div className={styles.rowThree}>
            <strong>$ 0</strong>
            <span> Honorarios</span>
          </div>
        </div>
        <div className={styles.containerBtns}>
          <button onClick={() => setSections({
            detail: true,
            binnacle: false,
            simulator: false,
            collection: false
          })} className={`${styles.btn} ${sections.detail ? styles.active : ''}`}>
            Ver detalle
          </button>
          <button onClick={() => {
            setSections({
              detail: false,
              binnacle: true,
              simulator: false,
              collection: false
            })
          }} className={`${styles.btn} ${sections.binnacle ? styles.active : ''}`}>
            Bitácora
          </button>
          <button onClick={() => {
            setSections({
              detail: false,
              binnacle: false,
              simulator: true,
              collection: false
            })
          }} className={`${styles.btn} ${sections.simulator ? styles.active : ''}`}>
            Simulador
          </button>
          <button onClick={() => {
            setSections({
              detail: false,
              binnacle: false,
              simulator: false,
              collection: true
            })
          }} className={`${styles.btn} ${sections.collection ? styles.active : ''}`}>
            Recaudo
          </button>
        </div>
      </div>
  )
}
