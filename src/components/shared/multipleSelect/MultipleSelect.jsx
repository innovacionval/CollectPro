import { useEffect, useRef, useState } from "react"
import styles from "./MultipleSelect.module.scss"

export const MultipleSelect = ({clients, setClients, data}) => {
  const [isOpen, setIsOpen] = useState(false)
  const optionsRef = useRef(null)
  const buttonRef = useRef(null)
  const openSelect = () => {
    setIsOpen(!isOpen)
  }
  const handleClient = (client) => {
    if(clients.includes(client)){
      setClients(clients.filter((item) => item !== client))
    }else{
      setClients([...clients, client])
    }
  }
  const closeSelect = (e) => {
    if ((optionsRef.current && !optionsRef.current.contains(e.target)) && (buttonRef.current && !buttonRef.current.contains(e.target))) {
      setIsOpen(false);
    }
  };

  // Añadimos un event listener global
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", closeSelect);
    } else {
      document.removeEventListener("mousedown", closeSelect);
    }

    // Limpiar el event listener al desmontar el componente o cuando se cierra el select
    return () => {
      document.removeEventListener("mousedown", closeSelect);
    };
  }, [isOpen]);
  return (
    <div onClick={closeSelect} className={styles.container}>
      <button ref={buttonRef} className={styles.customClientSelect} type="button" onClick={openSelect}>Seleccionar opciones</button>
      {
        isOpen && (
          <div ref={optionsRef} className={styles.containerOptions}>
            {
              data.map((item, index) => (
                <button onClick={() => handleClient(item.value)} type="button" className={styles.options} id={clients.includes(item.value) ? styles.active : null } key={index}>
                  <label htmlFor={item}>{item.label}</label>
                </button>
              ))
            }
          </div>
        )
      }
    </div>
  )
}
