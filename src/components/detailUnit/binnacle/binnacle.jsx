import styles from "./binnacle.module.scss";

export const Binnacle = () => {
  //map para todo lo que es containerInfo y containerDate
  return (
    <div className={styles.containerBinnacle}>
      <form className={styles.containerBar}>
        <div className={styles.containerGestion}>
          <div className={styles.gestion}>
            <div className={styles.inputGestion}>
              <label>Tipo de Gestión</label>
              <select>
                <option value="1">Cobro</option>
                <option value="2">Recaudo</option>
                <option value="3">Legal</option>
              </select>
            </div>
            <button>Guardar</button>
          </div>
          <div className={styles.note}>
            <label>Agregar Nota</label>
            <textarea></textarea>
          </div>
        </div>
        <div />
      </form>
      <div className={styles.containerInfo}>
        <div className={styles.line}>
          <p>Julio</p>
        </div>
        <div className={styles.containerDate}>
          <div className={styles.containerCircle}>
            <div className={styles.circle}></div>
            <p className={styles.date}>22/Jul/2024</p>
          </div>
          <div className={styles.containerDetails}>
            <p>Novedad:</p>
            <p>Gestión</p>
            <p>Luis Perez</p>
            <p>Hora:</p>
          </div>
        </div>
        <div className={styles.containerDate}>
          <div className={styles.containerCircle}>
            <div className={styles.circle}></div>
            <p className={styles.date}>22/Jul/2024</p>
          </div>
          <div className={styles.containerDetails}>
            <p>Novedad:</p>
            <p>Gestión</p>
            <p>Luis Perez</p>
            <p>Hora:</p>
          </div>
        </div>
      </div>
    </div>
  );
};
