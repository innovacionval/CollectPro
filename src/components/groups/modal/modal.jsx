import { useForm } from "react-hook-form";
import styles from "./modal.module.scss";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { convertCurrency } from "../../../utils/dataConfig";

import { useState } from "react";

export const ModalGroups = ({ open, setOpen }) => {
  const [adminValueData, setAdminValueData] = useState([]);
  const [honorariumData, setHonorariumData] = useState([]);
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
      name: "identification",
      label: "Identificación",
      type: "number",
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
      name: "discountDays",
      label: "Dias de descuento",
      type: "number",
    },
    {
      name: "taxValue",
      label: "Cálculo intereses",
      type: "radio",
    },
  ];

  const labelHonorarium = [
    {
      label: "Dias de mora",
      name: "daysMin",
      placeholder1: "Valor mínimo",
    },
    {
      label: "invisible",
      name: "daysMax",
      placeholder1: "Valor máximo",
    },
    {
      label: "Honorarios(%)",
      name: "honorarium",
      placeholder1: "%",
    },
    {
      label: "IVA honorarios (%)",
      name: "honorariumIva",
      placeholder1: "%",
      placeholder2: "%",
    },
  ];

  const inputInfoAdministrator = [
    {
      label: "Nombre",
      name: "nameAdmin",
    },
    {
      label: "Teléfono",
      name: "phoneAdmin",
    },
    {
      label: "Correo",
      name: "emailAdmin",
    },
    {
      label: "Nº Contrato",
      name: "contractAdmin",
    },
  ];

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleAdminValue = () => {
    setAdminValueData([
      ...adminValueData,
      {
        administrator: getValues("administration"),
        value: getValues("value"),
      },
    ]);
  };

  const handleHonorarium = () => {
    setHonorariumData([
      ...honorariumData,
      {
        daysMin: getValues("daysMin"),
        daysMax: getValues("daysMax"),
        honorarium: getValues("honorarium"),
        honorariumIva: getValues("honorariumIva"),
      },
    ]);
  };

  return (
    <div className={styles.containerModal}>
      <div className={styles.modal}>
        <div className={styles.containerHeader}>
          <h3>Crear agrupación</h3>
          <div className={styles.close} onClick={() => setOpen(false)}>
            X
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((input, index) => (
            <div
              key={index}
              className={`${
                input.type == "radio" ? styles.containerInputSpan2 : ""
              } ${styles.containerInput}`}
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
              ) : input.type === "radio" ? (
                <div className={styles.containerRadioInput}>
                  <div className={styles.containerRadio}>
                    <div className={styles.inputRadio}>
                      <input
                        {...register(input.name)}
                        type="radio"
                        id="taxValue1"
                        value="Si"
                      />
                      <label htmlFor="taxValue1">Tasa de usura</label>
                    </div>
                    <div className={styles.inputRadio}>
                      <input
                        {...register(input.name)}
                        type="radio"
                        id="taxValue2"
                        value="No"
                      />
                      <label htmlFor="taxValue2">
                        Tasa definida por el conjunto
                      </label>
                    </div>
                  </div>
                  <input
                    {...register("taxValue3")}
                    type="text"
                    id="taxValue3"
                    style={{ borderColor: "#EB625E" }}
                  />
                </div>
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
        <div className={styles.containerAdministrator}>
          <div className={styles.administrator}>
            <div className={styles.containerInput}>
              <label>Concepto de administración</label>
              <select
                {...register("administration", {
                  onChange: (e) => setValue("administration", e.target.value),
                })}
                id="administration"
              >
                <option value="Administración 1">Administración 1</option>
                <option value="Administración 2">Administración 2</option>
                <option value="Administración 3">Administración 3</option>
                <option value="Administración 4">Administración 4</option>
              </select>
            </div>
            <div className={styles.containerInput}>
              <label>Tipo de valor</label>
              <select
                {...register("typeValue", {
                  onChange: (e) => setValue("typeValue", e.target.value),
                })}
                id="typeValue"
              >
                <option value="Fijo">Valor coeficiente</option>
                <option value="Variable">Valor fijo</option>
                <option value="Porcentaje">Valor personalizable</option>
              </select>
            </div>
            <div className={styles.containerInput}>
              <label>Valor</label>
              <div className={styles.containerValue}>
                <input
                  {...register("value", {
                    onChange: (e) => setValue("value", e.target.value),
                  })}
                  type="number"
                  id="value"
                />
                <FaPlus onClick={handleAdminValue} />
              </div>
            </div>
          </div>
          <div className={styles.containerAdminValue}>
            {adminValueData.map((data, index) => (
              <div key={index} className={styles.adminValue}>
                <p>{data.administrator}</p>
                <p>{convertCurrency(data.value)}</p>
                <div className={styles.actions}>
                  <FaRegEdit />
                  <IoMdClose />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.containerInfoAdministrator}>
          <h3>Información del administrador</h3>
          <div className={styles.containerInputs}>
            {inputInfoAdministrator.map((input, index) => (
              <div key={index} className={styles.containerInput}>
                <label htmlFor={input.name}>{input.label}</label>
                <input {...register(input.name)} type="text" id={input.name} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.containerHonorarium}>
          <h3>% Honorarios</h3>
          <div className={styles.containerInputHonorarium}>
            {labelHonorarium.map((label, index) => (
              <div key={index} className={styles.containerInput}>
                <label
                  className={label.label == "invisible" ? styles.invisible : ""}
                  htmlFor={label.name}
                >
                  {label.label}
                </label>
                <input
                  {...register(`${label.name}`)}
                  type="number"
                  id={label.name}
                  placeholder={label.placeholder1}
                />
              </div>
            ))}
            <div className={styles.containerInput}>
              <label className={styles.invisible}>invisible</label>
              <FaPlus onClick={handleHonorarium} />
            </div>
          </div>
        </div>
        <div className={styles.containerHonorariumValue}>
          {honorariumData.map((data, index) => (
            <div key={index} className={styles.adminValue}>
              <p>
                {data.daysMin}
              </p>
              <p>{data.daysMax}</p>
              <p>{data.honorarium}%</p>
              <p>{data.honorariumIva}%</p>
              <div className={styles.actions}>
                  <IoMdClose />
                </div>
            </div>
          ))}
        </div>
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
