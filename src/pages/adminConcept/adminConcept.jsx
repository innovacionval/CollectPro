import { useState } from "react";
import styles from "./adminConcept.module.scss";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { Table } from "../../components/table/table";
import { Pagination } from "../../components/pagination/Pagination";
import { FiEdit } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { labelsAdmin } from "@/utils/dataConfig";
import { ButtonPages } from "@/components/shared/buttonPages";
import { ModalAdminConcept } from "@/components/adminConcept/modal/modal";
import { useNavigate } from "react-router-dom";

export const AdminConcept = () => {
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const labels = labelsAdmin;

  const data = [
    {
      name: "Administración",
      status: "Activo",
    },
    {
      name: "Administración",
      status: "Activo",
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
          <h2>Conceptos de Administración</h2>
        </div>
        <Table labels={labels} data={data} actions={actions} />
        <div className={styles.pagination}>
          <Pagination total={pagination?.count} page={page} setPage={setPage} />
        </div>
        {openModal && (
          <ModalAdminConcept open={openModal} setOpen={setOpenModal} />
        )}
      </div>
    </>
  );
};
