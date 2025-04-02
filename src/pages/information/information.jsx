import { FaArrowLeft, FaDownload, FaEye } from "react-icons/fa";
import styles from "./information.module.scss";
import { useNavigate } from "react-router-dom";

export const Information = () => {
  const navigate = useNavigate();
  const data = [
    {
      title: "Informe 1",
    },
    {
      title: "Informe 2",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.containerBack} onClick={() => navigate("/")}>
        <FaArrowLeft />
      </div>
      <div className={styles.containerHeader}>
        <h2>Informes</h2>
      </div>
      <div className={styles.containerBody}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3>{item.title}</h3>
            <div className={styles.options}>
              <FaEye
                className={styles.icon}
                onClick={() => console.log("Ver informe", item.title)}
              />
              <FaDownload
                className={styles.icon}
                onClick={() => console.log("Descargar informe", item.title)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
