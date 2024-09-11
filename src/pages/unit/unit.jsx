import styles from './unit.module.scss'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaRegEye, FaSearch } from 'react-icons/fa';
import { Table } from '../../components/table/table';
import { Pagination } from '../../components/pagination/Pagination';
import { useState } from 'react';

export const Unit = () => {
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
      name: "identification",
      label: "Identificación",
    },
    {
      name: "name",
      label: "Nombres y apellidos",
    },
    {
      name: "group",
      label: "Agrupación",
    },
    {
      name: "unit",
      label: "Unidad",
    },
    {
      name: "actions",
      label: "Acciones",
    },
  ];

  const data = [
    {
      identification: "123456789",
      name: "Juan",
      group: "Grupo 1",
      unit: "Unidad 1",
    },
    {
      identification: "123456789",
      name: "Pedro",
      group: "Grupo 2",
      unit: "Unidad 2",
    },
  ];
  const actions = [
    {
      name: "watch",
      icon: <FaRegEye /> ,
      action: (id) => navigate(`/detail/${id}`),
    },
  ];
  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };
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
        <h2>Unidades</h2>
        <Table labels={labels} data={data} actions={actions} />
        <div className={styles.pagination}>
          <Pagination total={pagination?.count} page={page} setPage={setPage} />
        </div>
      </div>
    </>
  );
}
