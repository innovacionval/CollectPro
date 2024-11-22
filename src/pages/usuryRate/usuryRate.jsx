import { Table } from "@/components/table/table"
import styles from "./usuryRate.module.scss"
import { FaArrowLeft, FaSearch } from "react-icons/fa"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { labelsUsuryRate } from "@/utils/dataConfig";
import { FiEdit } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { ModalUsuryRate } from "@/components/usuryRate/Modal";
export const UsuryRate = () => {
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const labels = labelsUsuryRate;
  const [openModal, setOpenModal] = useState(false);


  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const data = [
    {
      register: "2023/01/22",
      percentage: "10%",
      applyDate: "Plantilla 1",
    },
    {
      register: "2023/01/22",
      percentage: "15%",
      applyDate: "Plantilla 2",
    },
    
  ];
  const actions = [
    {
      name: "edit",
      icon: <FiEdit />,
      action: (id) => console.log("Editar", id),
    },
    {
      name: "delete",
      icon: <IoMdClose />,
      action: (id) => console.log("Eliminar", id),
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerBack} onClick={() => navigate("/")}>
          <FaArrowLeft />
        </div>
        <div className={styles.containerHeader}>
          <form className={styles.containerInput}>
            <input
              type="text"
              placeholder="Buscar"
              name="search"
              value={search}
              onChange={handleChange}
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
          <div className={styles.containerButton}>
            <button onClick={handleOpenModal} className={styles.button}>
              Crear
            </button>
          </div>
        </div>
        <div className={styles.containerTable}>
          <Table
            labels={labels}
            data={data}
            actions={actions}
            pagination={pagination}
            page={page}
            setPage={setPage}
          />
        </div>
        {openModal && (
          <ModalUsuryRate setOpen={setOpenModal} />
        )
        }
      </div>
    </>
  )
}
