import { useState } from "react";
import styles from "./users.module.scss";
import { FaSearch } from "react-icons/fa";
import { Table } from "../../components/table/table";
import { Pagination } from "../../components/pagination/Pagination";
import { FiEdit } from "react-icons/fi";
import { labelsUser } from "@/utils/dataConfig";
import { ModalUser } from "@/components/user/modal/modal";

export const Users = () => {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);

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
      status: "Activo",
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
