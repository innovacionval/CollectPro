import { useForm, useFieldArray } from "react-hook-form";
import styles from "./modal.module.scss";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaUpload } from "react-icons/fa";

export const ModalCollection = ({ setOpen }) => {
  const [openForm, setOpenForm] = useState(false);
  const { handleSubmit, register, setValue, control } = useForm();

  const inputs = [
    {
      name: "datePayment",
      label: "Fecha de Pago",
      type: "date",
    },
    {
      name: "observation",
      label: "Observación",
      type: "textarea",
    },
    {
      name: "moneyLocation",
      label: "Ubicación de dinero",
      type: "select",
      options: [
        { label: "Banco", value: "Banco" },
        { label: "Caja", value: "Caja" },
        { label: "Otros", value: "Otros" },
      ],
    },
    {
      name: "paymentMethod",
      label: "Forma de pago",
      type: "select",
      options: [
        { label: "Consignación", value: "Efectivo" },
        { label: "Transferencia", value: "Transferencia" },
        { label: "Efectivo", value: "Efectivo" },
        { label: "Plataforma", value: "Plataforma" },
      ],
    },
    {
      name: "concept",
      label: "Concepto",
      type: "text",
    },
    {
      name: "value",
      label: "Valor",
      type: "number",
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
              ) : input.type == "textarea" ? (
                <textarea
                  {...register(input.name)}
                  id={input.name}
                  rows="4"
                ></textarea>
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
          <label className={styles.button}>
            <FaUpload size={16} />
            <span>Adjuntar comprobante de pago</span>
            <input type="file" className={styles.hiddenInput} />
          </label>
        </div>
        {/* {openForm &&
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
          ))} */}
        <div className={styles.containerButtonSave}>
          <button type="submit">Realizar</button>
        </div>
      </div>
    </div>
  );
};
