import { FiPrinter } from "react-icons/fi";
import styles from "./detailContent.module.scss";
import { FaCheck, FaEdit } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
export const DetailContent = () => {
  const [generateCosts, setGenerateCosts] = useState([]);
  const [visibleInputs, setVisibleInputs] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const labelTable = [
    "Días Mora",
    "Concepto",
    "Total",
    "Dtos Aplicables",
    "Total (Con Descuento)",
    "Capital",
    "Interés Mora",
    "Honorarios",
  ];
  const dataTable = [
    "0",
    "Cuota administración",
    "$ 0",
    "$ 0",
    "$ 0",
    "$ 0",
    "$ 0",
    "$ 0",
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleGenerateCosts = () => {
    setVisibleInputs(true);
  };

    const handleSubmitCosts = (data) => {
    setVisibleInputs(false);
    setGenerateCosts([...generateCosts, data]);
    setValue("name", "");
    setValue("value", "");
    setValue("recurrence", "");
    setValue("typeRecurrence", "");
  }
  return (
    <div className={styles.mainInfo}>
      <div className={styles.containerBar}>
        <button onClick={handlePrint} className={styles.barBtn}>
          Imprimir
          <FiPrinter />
        </button>
      </div>
      <div className={styles.containerSettings}>
        <div className={styles.containerTable}>
          <div className={styles.title}>
            <h3>Costos</h3>
            <div className={styles.btns}>
              <button className={styles.barBtn} onClick={handleGenerateCosts}>
                Generar costos
              </button>
{/*               <button className={styles.barBtn}>
                <FaEdit /> Editar costos
              </button> */}
            </div>
          </div>
          <div className={styles.setting}>
            <div className={styles.settingBar}>
              <p>Concepto</p>
              <p>Valor</p>
              <p>Recurrencia</p>
              <p>Tipo Recurrencia</p>
            </div>
            <div className={styles.settingContent}>
              <p></p>
              <p>8.000</p>
              <p>Si</p>
              <p>Cuota</p>
              <FaEdit />
            </div>
            {generateCosts.map((cost, index) => (
              <div className={styles.settingContent} key={index}>
                <p>{cost.name}</p>
                <p>{cost.value}</p>
                <p>{cost.recurrence}</p>
                <p>{cost.typeRecurrence}</p>
                <FaEdit />
              </div>
            ))}
            {visibleInputs && (
              <form
                onSubmit={handleSubmit(handleSubmitCosts)}
                className={styles.formCosts}
              >
                <input
                  type="text"
                  placeholder="Concepto"
                  {...register("name")}
                />
                <input
                  type="number"
                  placeholder="Valor"
                  {...register("value")}
                />
                <input
                  type="text"
                  placeholder="Recurrencia"
                  {...register("recurrence")}
                />
                <input
                  type="text"
                  placeholder="Tipo Recurrencia"
                  {...register("typeRecurrence")}
                />
                <div className={styles.actions}>
                  <button className={styles.btnCheck}>
                    <IoMdCheckmark />
                  </button>
                  <button onClick={() => setVisibleInputs(false)} type="click" className={styles.btnCheck}>
                  <IoMdClose  />
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className={styles.containerBtnHistory}>
            <button className={styles.barBtn}>Ver antiguos</button>
          </div>
        </div>
      </div>
      <div className={styles.containerTable}>
        <div className={styles.titleTable}>
          <p>2024 - $ 0</p>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              {labelTable.map((label, index) => (
                <th key={index}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {dataTable.map((data, index) => (
                <td key={index}>{data}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
