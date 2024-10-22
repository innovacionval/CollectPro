import { FaArrowLeft, FaFileDownload, FaFileExcel } from "react-icons/fa";
import styles from "./briefcaseAction.module.scss";
import { MultipleSelect } from "@/components/shared/multipleSelect/MultipleSelect";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const BriefcaseAction = () => {
  const [groups, setGroups] = useState([]);
  const [statusPaymentAgreement, setStatusPaymentAgreement] = useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

 
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
      <div onClick={handleBack} className={styles.containerHeader}>
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
                    input.name == "group" ? [] : []
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
