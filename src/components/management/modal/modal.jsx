import styles from "./modal.module.scss";


export const ModalManagement = ({setOpen}) => {
  return (
    <div className={styles.containerModal}>
      <div className={styles.modal}>
        <div className={styles.containerHeader}>
          <h3>Crear tipo de gestión</h3>
          <div className={styles.close} onClick={() => setOpen(false)}>
            X
          </div>
        </div>
      <form>
        <div className={styles.containerInput}>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" />
        </div>
        <div className={styles.containerButton}>
          <button type="button" onClick={() => setOpen(false)}>
            Cancelar
          </button>
          <button type="submit">Crear</button>
        </div>
      </form>
      </div>
    </div>
  )
}
