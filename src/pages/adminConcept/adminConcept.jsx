import { useState } from 'react'
import styles from './adminConcept.module.scss'
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { Table } from '../../components/table/table';
import { Pagination } from '../../components/pagination/Pagination';
import { FiEdit } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

export const AdminConcept = () => {
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const labels = [
    {
      name: "name",
      label: "Nombre",
    },
    {
      name: "actions",
      label: "Acciones",
    },
  ];

  const data = [
    {
      name: "Administración",
    },
    {
      name: "Administración"
    }
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
  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };
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
            <button onClick={handleOpen} className={styles.btnConfig}>
              Configuración
              <div
                className={`${styles.containerMenu} ${
                  openMenu ? styles.active : ""
                }`}
              >
                <button onClick={() => navigate("/users")}>
                  Usuarios / Perfiles
                </button>
                <button onClick={() => navigate("/adminConcept")}>
                  Conceptos de Administración
                </button>
                <button onClick={() => navigate("/")}>Agrupaciones</button>
                <button onClick={() => navigate("/import")}>
                  Importadores
                </button>
                <button onClick={() => navigate("/management")}>
                  Tipos de gestión
                </button>
              </div>
            </button>
            <button onClick={() => {}} className={styles.button}>
              Informes
            </button>
            <button onClick={handleOpenModal} className={styles.button}>
              Crear
            </button>
          </div>
        </div>
        <div className={styles.containerTitle}>
          <h2>Conceptos de Administración</h2>
          <button onClick={handleOpenModal} className={styles.button}>
            {"Nuevo +"}
          </button>
        </div>
        <Table labels={labels} data={data} actions={actions} />
        <div className={styles.pagination}>
          <Pagination total={pagination?.count} page={page} setPage={setPage} />
        </div>
      </div>
    </>
  );
}
