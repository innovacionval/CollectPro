import { useState } from "react";
import styles from "./collection.module.scss";
import { ModalCollection } from "./modal/modal";
export const Collection = () => {
  const [openModal, setOpenModal] = useState(false);

  const labels = [
    "Pago",
    "Fecha",
    "Valor",
    "Moneda",
    "Empleado",
    "Aplicación",
    "Capital",
    "Vencido",
    "Intereses",
    "Mora",
    "Honorarios",
    "Otros",
    "Favor",
  ];
  const data = [
    {
      payment: "RECIBO CAJA: 000000",
      date: "10/10/2024",
      value: "$ 0",
      currency: "COP",
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
                <td>{item.currency}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
