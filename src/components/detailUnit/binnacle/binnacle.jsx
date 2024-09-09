import styles from "./binnacle.module.scss";

export const Binnacle = () => {
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
        <div/>
      </form>
    </div>
  );
};
