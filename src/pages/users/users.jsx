import React, { useState } from 'react'
import styles from './users.module.scss'
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { Table } from '../../components/table/table';
import { Pagination } from '../../components/pagination/Pagination';

export const Users = () => {
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
      name: "identification",
      label: "Identificación",
    },
    {
      name: "email",
      label: "Correo",
    },
    {
      name: "rol",
      label: "Rol",
    },
    {
      name: "status",
      label: "Estado",
    },
    {
      name: "actions",
      label: "Acciones",
    },
  ];

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
      icon: "Editar",
      action: (id) => console.log("Editar", id),
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
        <h2>Usuarios / Perfiles</h2>
        <Table labels={labels} data={data} actions={actions} />
        <div className={styles.pagination}>
          <Pagination total={pagination?.count} page={page} setPage={setPage} />
        </div>
      </div>
    </>
  );
}
