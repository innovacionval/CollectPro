import { useState } from 'react';
import styles from './billingConcept.module.scss'
import { labelsBillingConcept } from '@/utils/dataConfig';
import { FaSearch } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { Table } from '@/components/table/table';
import { Pagination } from '@/components/pagination/Pagination';
import { ModalGroups } from '@/components/groups/modal/modal';
import { IoMdClose } from 'react-icons/io';
import { ModalBillingConcept } from '@/components/billingConcept/modal/modal';

export const BillingConcept = () => {
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };



  const labels = labelsBillingConcept

  const data = [
    {
      name: "Administración",
      value: 1,
    },
    {
      name: "Bicicletero",
      value: 2,
    },
    {
      name: "Calderas",
      value: 3,
    },
    {
      name: "Cuota citofonía",
      value: 4,
    },
    {
      name: "Cuota extraordinaria administración",
      value: 5,
    },
    {
      name: "Cuota peritaje",
      value: 6,
    },
    {
      name: "Extraordinaria canales",
      value: 7,
    },
    {
      name: "Extraordinaria cancha",
      value: 8,
    },
    {
      name: "Extraordinaria CCTV",
      value: 9,
    },
    {
      name: "extraordinaria parqueadero",
      value: 10,
    },
    {
      name: "Extraordinaria portería",
      value: 11,
    },
    {
      name: "Extraordinaria shut ",
      value: 12,
    },
    {
      name: "Honorarios abogado",
      value: 13,
    },
    {
      name: "Inasistencia asamblea",
      value: 14,
    },
    {
      name: "Interes de administración",
      value: 15,
    },
    {
      name: "Intereses calderas",
      value: 16,
    },
    {
      name: "Intereses parqueadero",
      value: 17,
    },
    {
      name: "Multa convivencia",
      value: 18,
    },
    {
      name: "Parqueadero adicional",
      value: 19,
    },
    {
      name: "Parqueadero carro",
      value: 20,
    },
    {
      name: "Parqueadero moto",
      value: 21,
    },
    {
      name: "Retroactivo administración",
      value: 22,
    },
    {
      name: "Retroactivo Carro",
      value: 23,
    },
    {
      name: "Retroactivo Moto",
      value: 24,
    },
    {
      name: "Tarjetas",
      value: 25,
    },
    {
      name: "Uso zona común moto",
      value: 26,
    },
    {
      name: "Usufructo Local",
      value: 27,
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
      icon: <FiEdit />      ,
      action: (id) => console.log("Editar", id),
    },
    {
      name: "delete",
      icon: <IoMdClose />      ,
      action: (id) => console.log("Eliminar", id),
    }
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
        <h2>Conceptos de cobro</h2>
        <Table labels={labels} data={data} actions={actions} />
        <div className={styles.pagination}>
          <Pagination total={pagination?.count} page={page} setPage={setPage} />
        </div>
      </div>
      {openModal && <ModalBillingConcept open={openModal} setOpen={setOpenModal} />}
    </>
  );
}
