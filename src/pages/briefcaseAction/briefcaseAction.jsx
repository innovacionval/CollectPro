import { FaArrowLeft, FaFileDownload, FaFileExcel } from "react-icons/fa";
import styles from "./briefcaseAction.module.scss";
import { MultipleSelect } from "@/components/shared/multipleSelect/MultipleSelect";
import { useState } from "react";

export const BriefcaseAction = () => {
  const [groups, setGroups] = useState([]);
  const [statusPaymentAgreement, setStatusPaymentAgreement] = useState([]);

  const optionsStatusPaymentAgreement = [
    {
      label: "Administración",
      value: 1,
    },
    {
      label: "Bicicletero",
      value: 2,
    },
    {
      label: "Calderas",
      value: 3,
    },
    {
      label: "Cuota citofonía",
      value: 4,
    },
    {
      label: "Cuota extraordinaria administración",
      value: 5,
    },
    {
      label: "Cuota peritaje",
      value: 6,
    },
    {
      label: "Extraordinaria canales",
      value: 7,
    },
    {
      label: "Extraordinaria cancha",
      value: 8,
    },
    {
      label: "Extraordinaria CCTV",
      value: 9,
    },
    {
      label: "extraordinaria parqueadero",
      value: 10,
    },
    {
      label: "Extraordinaria portería",
      value: 11,
    },
    {
      label: "Extraordinaria shut ",
      value: 12,
    },
    {
      label: "Honorarios abogado",
      value: 13,
    },
    {
      label: "Inasistencia asamblea",
      value: 14,
    },
    {
      label: "Interes de administración",
      value: 15,
    },
    {
      label: "Intereses calderas",
      value: 16,
    },
    {
      label: "Intereses parqueadero",
      value: 17,
    },
    {
      label: "Multa convivencia",
      value: 18,
    },
    {
      label: "Parqueadero adicional",
      value: 19,
    },
    {
      label: "Parqueadero carro",
      value: 20,
    },
    {
      label: "Parqueadero moto",
      value: 21,
    },
    {
      label: "Retroactivo administración",
      value: 22,
    },
    {
      label: "Retroactivo Carro",
      value: 23,
    },
    {
      label: "Retroactivo Moto",
      value: 24,
    },
    {
      label: "Tarjetas",
      value: 25,
    },
    {
      label: "Uso zona común moto",
      value: 26,
    },
    {
      label: "Usufructo Local",
      value: 27,
    },
  ];
  const inputs = [
    {
      label: "Agrupación",
      type: "select",
      name: "group",
      options: [],
    },
    {
      label: "Mora mayor a",
      type: "number",
      name: "moraUp",
    },
    {
      label: "Mora menor a",
      type: "number",
      name: "moraDown",
    },
    {
      label: "Estado acuerdo de pago",
      type: "select",
      name: "statusPaymentAgreement",
      options: [],
    },
    {
      label: "Saldo mayor a",
      type: "number",
      name: "balanceUp",
    },
    {
      label: "Saldo menor a",
      type: "number",
      name: "balanceDown",
    },
  ];

  const inputsResult = [
    {
      label: "Valor resultados",
      type: "text",
      name: "valueResult",
      disabled: true,
    },
    {
      label: "Registros encontrados",
      type: "number",
      name: "recordsFound",
      disabled: true,
    },
    {
      label: "Nombre",
      type: "text",
      name: "name",
      disabled: false,
    },
    {
      label: "Acción a realizar",
      type: "select",
      name: "action",
      disabled: false,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <FaArrowLeft />
      </div>
      <div className={styles.containerSearch}>
        <form>
          {inputs.map((input, index) => (
            <div key={index} className={styles.containerInput}>
              <label htmlFor={input.name}>{input.label}</label>
              {input.type === "select" ? (
                <MultipleSelect
                  data={
                    input.name == "group" ? [] : optionsStatusPaymentAgreement
                  }
                  setClients={
                    input.name == "group"
                      ? setGroups
                      : setStatusPaymentAgreement
                  }
                  clients={
                    input.name == "group" ? groups : statusPaymentAgreement
                  }
                />
              ) : (
                <input type={input.type} name={input.name} id={input.name} />
              )}
            </div>
          ))}
          <div className={styles.containerButton}>
            <button type="submit">Buscar</button>
          </div>
        </form>
      </div>
      <div className={styles.containerResult}>
        <form className={styles.rowNum1}>
          {inputsResult.map((input, index) => (
            <div key={index} className={styles.containerInput}>
              <label htmlFor={input.name}>{input.label}</label>
              {input.type === "select" ? (
                <select name={input.name} id={input.name}>
                  <option value="1">Enviar email</option>
                  <option value="2">Enviar SMS</option>
                </select>
              ) : (
                <input
                  type={input.type}
                  name={input.name}
                  id={input.name}
                  disabled={input.disabled}
                />
              )}
            </div>
          ))}
          <div className={styles.containerButton}>
            <button type="submit"><FaFileDownload />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
