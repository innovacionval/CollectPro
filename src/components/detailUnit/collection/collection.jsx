import { useState } from "react";
import styles from "./collection.module.scss";
import { ModalCollection } from "./modal/modal";
import { FaEye } from "react-icons/fa";
export const Collection = () => {
  const [openModal, setOpenModal] = useState(false);

  const labels = [
    "Pago",
    "Fecha de registro",
    "Valor",
    "Usuario",
    "Aplicación",
    "Capital Vencido",
    "Intereses de Mora",
    "Honorarios",
    "Acciones"
  ];
  const data = [
    {
      payment: "RECIBO CAJA: 000000",
      date: "10/10/2024",
      value: "$ 0",
      user:"",
      application:"",
      capital:"",
      interests:"",
      fees:"",
      options: <FaEye />
    },
  ]
  return (
    <div className={styles.containerCollection}>
      <div className={styles.containerBtns}>
        <button onClick={() => setOpenModal(true)}>Nuevo</button>
      </div>
      <div className={styles.containerTable}>
        <h3>Pagos Recibidos</h3>
        <table className={styles.tableCollection}>
          <thead>
            <tr>
              {labels.map((label, index) => (
                <th key={index}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.payment}</td>
                <td>{item.date}</td>
                <td>{item.value}</td>
                <td>{item.user}</td>
                <td>{item.application}</td>
                <td>{item.capital}</td>
                <td>{item.interests}</td>
                <td>{item.fees}</td>
                <td>{item.options}</td>
                {/* <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.containerTotal}>
          <p>$ 0</p>
        </div>
      </div>
      {openModal && <ModalCollection setOpen={setOpenModal}/>}
    </div>
  );
};
