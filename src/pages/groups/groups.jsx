import { useState } from "react";
import { Table } from "../../components/table/table";
import styles from "./groups.module.scss";
import { FaRegEye, FaSearch } from "react-icons/fa";
import { Pagination } from "../../components/pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { ModalGroups } from "../../components/groups/modal/modal";
import { FiEdit } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { labelsGroup } from "@/utils/dataConfig";
import { ButtonPages } from "@/components/shared/buttonPages";

export const Groups = () => {
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };



  const labels = labelsGroup

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
  const actions = [
    {
      name: "watch",
      icon: <FaRegEye />      ,
      action: (id) => console.log("Ver", id),
    },
    {
      name: "edit",
      icon: <FiEdit />      ,
      action: (id) => console.log("Editar", id),
    },
    {
      name: "units",
      icon: <HiOutlineBuildingOffice2 />
      ,
      action: (id) => navigate(`/units/${id}`),
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
          <ButtonPages styles={styles} setOpenModal={setOpenModal} openModal={openModal} />
        </div>
        <h2>Agrupaciones</h2>
        <Table labels={labels} data={data} actions={actions} />
        <div className={styles.pagination}>
          <Pagination total={pagination?.count} page={page} setPage={setPage} />
        </div>
      </div>
      {openModal && <ModalGroups open={openModal} setOpen={setOpenModal} />}
    </>
  );
};
