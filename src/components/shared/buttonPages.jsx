import { btnsConfig } from '@/utils/dataConfig';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const ButtonPages = ({styles, setOpenModal, openModal}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleConfig = () => {
    navigate("/configuration")
  };

  return (
    <div className={styles.containerButton}>
            <button onClick={handleConfig} className={styles.btnConfig}>
              Configuración
              <div
                className={`${styles.containerMenu} ${
                  openMenu ? styles.active : ""
                }`}
              >
                {
                  btnsConfig(navigate).map((btn, index) => (
                    <button key={index} onClick={btn.action}>
                      {btn.name}
                    </button>
                  ))
                }
              </div>
            </button>
            <button onClick={() => {navigate("/information")}} className={styles.button}>
              Informes
            </button>
            <button onClick={handleOpenModal} className={styles.button}>
              Crear
            </button>
          </div>
  )
}
