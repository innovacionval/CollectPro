import { FaArrowLeft } from "react-icons/fa";
import styles from "./configuration.module.scss";
import { useNavigate } from "react-router-dom";

export const Configuration = () => {
  const navigate = useNavigate();
  const cards = [
    {
      title: "GENERAL",
      item1: {
        name: "Agrupaciones",
        url: "/",
      },
      item2: {
        name: "Importadores",
        url: "/import",
      },
      item3: {
        name: "Conceptos de administración",
        url: "/adminConcept",
      }
    },
    {
      title: "RECAUDO",
      item1: {
        name: "Tipos de gestión",
        url: "/management",
      },
      item2: {
        name: "Ubicación de dinero",
        url: "/moneyLocation",
      },
      item3:{}
    },
    {
      title: "SEGURIDAD",
      item1: {
        name: "Usuarios/Perfiles",
        url: "/users",
      },
      item2:{},
      item3:{}
    },
    {
      title: "CARTERA",
      item1: {
        name: "Acciones de cartera",
        url: "/briefcase",
      },
      item2: {
        name: "Tipos de acuerdo",
        url: "/agreementTypes",
      },
      item3: {
        name: "Tasa de usura",
        url: "/usuryRate",
      }
    },
    {
      title: "NOTIFICACIONES",
      item1: {
        name: "Plantillas",
        url: "/template",
      },
      item2:{},
      item3:{}
    }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.containerBack} onClick={() => navigate("/")}>
        <FaArrowLeft />
      </div>
      <div className={styles.containerHeader}>
        <h2>Configuración</h2>
      </div>
      <div className={styles.containerBody}>
        {
          cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <h3>{card.title}</h3>
                {card.item1.name && (
                  <button onClick={() => navigate(card.item1.url)}>{card.item1.name}</button>
                )}
                {card.item2.name && (
                  <button onClick={() => navigate(card.item2.url)}>{card.item2.name}</button>
                )}
                {card.item3.name && (
                  <button onClick={() => navigate(card.item3.url)}>{card.item3.name}</button>
                )}
            </div>
          ))
        }
      </div>
    </div>
  );
};
