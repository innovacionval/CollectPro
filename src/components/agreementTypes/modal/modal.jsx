import styles from "./modal.module.scss";

export const ModalAgreementTypes = ({ setOpen }) => {
  const inputs = [
    {
      name: "title",
      label: "Título",
      type: "text",
    },
    {
      name: "description",
      label: "Descripción",
      type: "text",
    },
    {
      name: "status",
      label: "Estado",
      type: "select",
      options: [
        { label: "Activo", value: "Activo" },
        { label: "Inactivo", value: "Inactivo" },
      ],
    }
  ];

  const inputsBenefits = [
    {
      name: "interestBenefit",
      label: "Beneficio Intereses",
      options: [
        { label: "Max. Valor", value: "max" },
        { label: "Min. Valor", value: "min" },
      ],
    },
    {
      name: "honoraryBenefit",
      label: "Beneficio Honorarios",
      options: [
        { label: "Max. Valor", value: "max" },
        { label: "Min. Valor", value: "min" },
      ],
    },
    {
      name: "capitalBenefit",
      label: "Beneficio Capital",
      options: [
        { label: "Capital sin vencer", value: "0" },
        { label: "Capital vencido", value: "1" },
        { label: "Ambos", value: "2" },
      ],
    }
  ]
  return (
    <div className={styles.containerModal}>
      <div className={styles.modal}>
        <div className={styles.containerHeader}>
          <h3>Crear tipo de recaudo</h3>
          <div className={styles.close} onClick={() => setOpen(false)}>
            X
          </div>
        </div>
        <form>
          <div className={styles.formBody}>
            {inputs.map((input, index) => (
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
            ))}
          </div>
          <div className={styles.containerBenefits}>
            <h4>Beneficios Aplicar</h4>
            {inputsBenefits.map((input, index) => (
              <div key={index} className={styles.containerInputBenefits}>
                <label htmlFor={input.name}>{input.label}</label>
                <select name={input.name}>
                  {input.options.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <input type="text" placeholder="Valor" name={input.name} />
              </div>
            ))}
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
  );
};
