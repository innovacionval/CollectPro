import { useForm, useFieldArray } from "react-hook-form";
import styles from "./modal.module.scss";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export const ModalCollection = ({ setOpen }) => {
  const [openForm, setOpenForm] = useState(false);
  const { handleSubmit, register, setValue, control } = useForm();

  const inputs = [
    {
      name: "reason",
      label: "Motivo",
      type: "text",
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

  

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "inputOutput",
  });

  const handleInputOutput = () => {
    setOpenForm(true);
    append({ value: "", form: "", concept: "" });
  };

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
        <div className={styles.containerButton}>
          <button type="button" onClick={() => setOpen(false)}>
            Cancelar
          </button>
          <button onClick={handleInputOutput} type="submit">
            Agregar Entrada/Salida Dinero
          </button>
        </div>
        {openForm &&
          fields.map((field, index) => (
            <form key={index} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.containerInputOutput}>
                <div className={styles.containerInput}>
                  <label htmlFor="value">Valor</label>
                  <input
                    {...register(`inputOutput[${index}].value`)}
                    type="number"
                    id="value"
                  />
                </div>
                <div className={styles.containerInput}>
                  <label htmlFor="form">Forma</label>
                  <select {...register(`inputOutput[${index}].form`)} id="form">
                    <option value="Efectivo">Efectivo</option>
                    <option value="Cheque">Cheque</option>
                    <option value="Transferencia">Transferencia</option>
                  </select>
                </div>
                <div className={styles.containerInput}>
                  <label htmlFor="concept">Concepto</label>
                  <input
                    {...register(`inputOutput[${index}].concept`)}
                    type="text"
                    id="concept"
                  />
                </div>
                <div className={styles.containerButton}>
                  <button type="button" onClick={() => remove(index)}>
                    <IoMdClose />
                  </button>
                </div>
              </div>
            </form>
          ))}
          <div className={styles.containerButtonSave}>
            <button type="submit">Realizar</button>
          </div>
      </div>
    </div>
  );
};
