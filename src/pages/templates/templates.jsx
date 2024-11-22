import { labelsTemplates } from "@/utils/dataConfig";
import { useState } from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa"
import { FiEdit } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styles from "./templates.module.scss";
import { Table } from "@/components/table/table";
import { Pagination } from "@/components/pagination/Pagination";

export const Template = () => {

  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOpenModal = () => {
    navigate("/template/create");
  };

  const labels = labelsTemplates;

  const data = [
    {
      register: "2023/01/22",
      lastUpdate: "2023/01/22",
      name: "Plantilla 1",
      type: "SMS"
    },
    {
      register: "2023/01/22",
      lastUpdate: "2023/01/22",
      name: "Plantilla 2",
      type: "Correo electrónico"
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
          <button>
            <FaSearch />
          </button>
        </form>
        <div className={styles.containerButton}>
          <button onClick={handleOpenModal} className={styles.button}>
            Nuevo
          </button>
        </div>
      </div>
      <div className={styles.containerTitle}>
        <h2>Tipos de gestión</h2>
      </div>
      <Table labels={labels} data={data} actions={actions} />
      <div className={styles.pagination}>
        <Pagination total={pagination?.count} page={page} setPage={setPage} />
      </div>
    </div>
  </>
  )
}
