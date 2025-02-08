import { useState } from "react";
import styles from "./users.module.scss";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { Table } from "../../components/table/table";
import { Pagination } from "../../components/pagination/Pagination";
import { FiEdit } from "react-icons/fi";
import { labelsUser } from "@/utils/dataConfig";
import { ModalUser } from "@/components/user/modal/modal";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const labels = labelsUser;

  const data = [
    {
      name: "Juan",
      identification: "123456789",
      email: "asd",
      rol: "Admin",
      status: "Activo",
    },
    {
      name: "Pedro",
      identification: "123456789",
      email: "asd",
      rol: "Admin",
      status: "Activo",
    },
    {
      name: "Carlos",
      identification: "123456789",
      email: "asd",
      rol: "Admin",
      status: "Inactivo",
    },
  ];
  const actions = [
    {
      name: "switch",
      icon: "desactivar",
      action: (id) => console.log("desactivar", id),
    },
    {
      name: "edit",
      icon: <FiEdit />,
      action: (id) => console.log("Editar", id),
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
            <button onClick={() => setOpenModal(!openModal)} className={styles.button}>
              Nuevo
            </button>
          </div>
        </div>
        <h2>Usuarios / Perfiles</h2>
        <Table labels={labels} data={data} actions={actions} />
        <div className={styles.pagination}>
          <Pagination total={pagination?.count} page={page} setPage={setPage} />
        </div>
      </div>
      {openModal && <ModalUser setOpen={setOpenModal} />}
    </>
  );
};
