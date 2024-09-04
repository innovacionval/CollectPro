import { useForm } from "react-hook-form";
import styles from "./modal.module.scss";

export const ModalGroups = ({ open, setOpen }) => {
  const inputs = [
    {
      name: "name",
      label: "Nombre",
      type: "text",
    },
    {
      name: "address",
      label: "Dirección",
      type: "text",
    },
    {
      name: "country",
      label: "País",
      type: "select",
      options: [
        {
          value: "Colombia",
          label: "Colombia",
        },
        {
          value: "Venezuela",
          label: "Venezuela",
        },
        {
          value: "Perú",
          label: "Perú",
        },
        {
          value: "Ecuador",
          label: "Ecuador",
        },
      ],
    },
    {
      name: "city",
      label: "Ciudad",
      type: "select",
      options: [
        {
          value: "Bogotá",
          label: "Bogotá",
        },
        {
          value: "Medellín",
          label: "Medellín",
        },
        {
          value: "Cali",
          label: "Cali",
        },
        {
          value: "Barranquilla",
          label: "Barranquilla",
        },
      ],
    },
    {
      name: "location",
      label: "Localidad",
      type: "select",
      options: [
        {
          value: "Localidad 1",
          label: "Localidad 1",
        },
        {
          value: "Localidad 2",
          label: "Localidad 2",
        },
        {
          value: "Localidad 3",
          label: "Localidad 3",
        },
        {
          value: "Localidad 4",
          label: "Localidad 4",
        },
      ],
    },
    {
      name: "neighborhood",
      label: "Barrio",
      type: "select",
      options: [
        {
          value: "Barrio 1",
          label: "Barrio 1",
        },
        {
          value: "Barrio 2",
          label: "Barrio 2",
        },
        {
          value: "Barrio 3",
          label: "Barrio 3",
        },
        {
          value: "Barrio 4",
          label: "Barrio 4",
        },
      ],
    },
    {
      name: "administrator",
      label: "Conceptos de administración",
      type: "select",
      options: [
        {
          value: "Concepto 1",
          label: "Concepto 1",
        },
        {
          value: "Concepto 2",
          label: "Concepto 2",
        },
        {
          value: "Concepto 3",
          label: "Concepto 3",
        },
        {
          value: "Concepto 4",
          label: "Concepto 4",
        },
      ],
    },
    {
      name: "discountDays",
      label: "Dias de descuento",
      type: "number",
    },
    {
      name: "discountType",
      label: "Tipo de descuento",
      type: "select",
      options: [
        {
          value: "Porcentaje",
          label: "Porcentaje",
        },
        {
          value: "Valor",
          label: "Valor",
        },
      ],
    },
    {
      name: "discountValue",
      label: "Valor de descuento",
      type: "number",
    },
    {
      name: "taxValue",
      label: "Cálculo intereses",
      type: "number",
    },
    {
      name: "honorarium",
      label: "% Honorarios",
      type: "number",
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
          <h3>Crear agrupación</h3>
          <div
            className={styles.close}
            onClick={() => setOpen(false)}
          >
            X
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((input, index) => (
            <div key={index} className={styles.containerInput}>
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
          <div className={styles.containerButton}>
            <button type="button" onClick={() => setOpen(false)}>
              Cancelar
            </button>
            <button type="submit">Crear</button>
          </div>
      </div>
    </div>
  );
};
