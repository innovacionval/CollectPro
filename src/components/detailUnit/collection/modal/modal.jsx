import { useForm } from "react-hook-form";
import styles from "./modal.module.scss";

export const ModalCollection = ({ setOpen }) => {
  const inputs = [
    {
      name: "reason",
      label: "Motivo",
      type: "text",
    },
    {
      name: "currency",
      label: "Moneda",
      type: "select",
      options: [
        {
          value: "COP",
          label: "COP",
        },
        {
          value: "USD",
          label: "USD",
        },
        {
          value: "EUR",
          label: "EUR",
        },
        {
          value: "GBP",
          label: "GBP",
        },
      ],
    },
    {
      name: "employee",
      label: "Empleado",
      type: "select",
      options: [
        {
          value: "Empleado 1",
          label: "Empleado 1",
        },
        {
          value: "Empleado 2",
          label: "Empleado 2",
        },
        {
          value: "Empleado 3",
          label: "Empleado 3",
        },
        {
          value: "Empleado 4",
          label: "Empleado 4",
        },
      ],
    },
    {
      name: "date",
      label: "Fecha de recaudo",
      type: "date",
    },
    {
      name: "observation",
      label: "Observación",
      type: "text",
    },
  ];

  const { handleSubmit, register, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.containerModal}>
      <div className={styles.modal}>
        <div className={styles.containerHeader}>
          <div></div>
          <div className={styles.close} onClick={() => setOpen(false)}>
            X
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((input, index) => (
            <div
              key={index}
              className={`${styles.containerInput} ${
                input.name == "observation" ? styles.observation : ""
              }`}
            >
              <label htmlFor={input.name}>{input.label}</label>
              {input.type === "select" ? (
                <select {...register(input.name)} id={input.name}>
                  {input.options.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  {...register(input.name)}
                  type={input.type}
                  id={input.name}
                />
              )}
            </div>
          ))}
        </form>
        <div className={styles.containerButtonForm}>
          <button>Agregar Gasto/Ingreso +</button>
          <button>Agregar Cuenta Cobrar/Pagar +</button>
        </div>
        <div className={styles.containerButton}>
          <button type="button" onClick={() => setOpen(false)}>
            Cancelar
          </button>
          <button type="submit">Guardar</button>
        </div>
      </div>
    </div>
  );
};
