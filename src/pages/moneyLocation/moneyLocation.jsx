import { FaArrowLeft } from "react-icons/fa";
import styles from "./moneyLocation.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Table } from "@/components/table/table";
import { Pagination } from "@/components/pagination/Pagination";
import { ModalMoneyLocation } from "@/components/moneyLocation/modal/modal";
import { labelsMoneyLocation } from "@/utils/dataConfig";
import { FiEdit } from "react-icons/fi";
export const MoneyLocation = () => {
  const [openModal, setOpenModal] = useState(false);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const labels = labelsMoneyLocation;

  const actions = [
      {
        name: "edit",
        icon: <FiEdit />,
        action: (id) => console.log("Editar", id),
      },
    ];

  const data = [
    {
      name: "BBVA",
      type: "Cuenta banco",
      status: "Activo",
    }
  ];
  return (
    <div className={styles.container}>
      <div className={styles.containerBack} onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </div>
      <div className={styles.containerHeader}>
        {/* <form className={styles.containerInput}>
                <input
                  type="text"
                  placeholder="Buscar"
                  name="search"
                  value={search}
                  onChange={handleChange}
                />
                <button>
                  <FaSearch />
                </button>
              </form> */}
        <div className={styles.containerButton}>
          <button onClick={handleOpenModal} className={styles.button}>
            Nuevo
          </button>
        </div>
      </div>
      <div className={styles.containerTitle}>
        <h2>Ubicaciones de dinero</h2>
      </div>
      <Table labels={labels} data={data} actions={actions} />
      <div className={styles.pagination}>
        <Pagination total={pagination?.count} page={page} setPage={setPage} />
      </div>
      {openModal && (
        <ModalMoneyLocation open={openModal} setOpen={setOpenModal} />
      )}
    </div>
  );
};
