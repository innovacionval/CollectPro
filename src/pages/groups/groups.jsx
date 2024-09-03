import { useState } from "react";
import { Table } from "../../components/table/table";
import styles from "./groups.module.scss";
import { FaSearch } from "react-icons/fa";
import { Pagination } from "../../components/pagination/Pagination";

export const Groups = () => {
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const labels = [
    {
      name: "id",
      label: "Identificación",
    },
    {
      name: "group",
      label: "Agrupación",
    },
    {
      name: "city",
      label: "Ciudad",
    },
    {
      name: "location",
      label: "Localidad",
    },
    {
      name: "actions",
      label: "Acciones",
    },
  ];

  const data = [
    {
      id: 1,
      group: "Grupo 1",
      city: "Bogotá",
      location: "Localidad 1",
    },
    {
      id: 2,
      group: "Grupo 2",
      city: "Bogotá",
      location: "Localidad 2",
    },
    {
      id: 3,
      group: "Grupo 3",
      city: "Bogotá",
      location: "Localidad 3",
    },
    {
      id: 4,
      group: "Grupo 4",
      city: "Bogotá",
      location: "Localidad 4",
    },
    {
      id: 5,
      group: "Grupo 5",
      city: "Bogotá",
      location: "Localidad 5",
    },
    {
      id: 6,
      group: "Grupo 6",
      city: "Bogotá",
      location: "Localidad 6",
    },
    {
      id: 7,
      group: "Grupo 7",
      city: "Bogotá",
      location: "Localidad 7",
    },
    {
      id: 8,
      group: "Grupo 8",
      city: "Bogotá",
      location: "Localidad 8",
    },
    {
      id: 9,
      group: "Grupo 9",
      city: "Bogotá",
      location: "Localidad 9",
    },
    {
      id: 10,
      group: "Grupo 10",
      city: "Bogotá",
      location: "Localidad 10",
    },
  ];
  const actions = [];
  const handleOpen = () => {};

  return (
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
          <button onClick={handleOpen} className={styles.button}>
            Configuración
          </button>
          <button onClick={handleOpen} className={styles.button}>
            Informes
          </button>
          <button onClick={handleOpen} className={styles.button}>
            Crear
          </button>
        </div>
      </div>
      <h2>Agrupaciones</h2>
      <Table labels={labels} data={data} actions={actions} />
      <div className={styles.pagination}>
        <Pagination total={pagination?.count} page={page} setPage={setPage} />
      </div>
    </div>
  );
};
