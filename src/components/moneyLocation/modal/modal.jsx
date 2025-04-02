import styles from "./modal.module.scss";

export const ModalMoneyLocation = ({setOpen}) => {

  const inputs = [
    {
      name: "name",
      label: "Nombre",
      type: "text",
    },
    {
      name: "type",
      label: "Tipo",
      type: "select",
      options: [
        { label: "Banco", value: "Banco" },
        { label: "Caja", value: "Caja" },
        { label: "Otros", value: "Otros" },
      ],
    },
  ]
  return (
      <div className={styles.containerModal}>
        <div className={styles.modal}>
          <div className={styles.containerHeader}>
            <h3>Crear ubicación de dinero</h3>
            <div className={styles.close} onClick={() => setOpen(false)}>
              X
            </div>
          </div>
        <form>
          {
            inputs.map((input, index) => (
              <div key={index} className={styles.containerInput}>
                <label htmlFor={input.name}>{input.label}</label>
                {input.type === "text" ? (
                  <input type="text" name={input.name} />
                ) : input.type === "select" ? (
                  <select name={input.name}>
                    {input.options.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : null}
              </div>
            ))
          }
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
