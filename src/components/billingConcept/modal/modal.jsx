import { useForm } from "react-hook-form";
import styles from "./modal.module.scss";

export const ModalBillingConcept = ({ setOpen }) => {
  const form = useForm();

  const inputs = [
    {
      label: "Nombre",
      type: "text",
      name: "name",
    },
  ];
  return (
    <div className={styles.containerModal}>
      <div className={styles.modal}>
        <div className={styles.containerHeader}>
          <h3>Crear concepto de cobro</h3>
          <div className={styles.close} onClick={() => setOpen(false)}>
            X
          </div>
        </div>
        <form>
          {inputs.map((input, index) => (
            <div className={styles.containerInput} key={index}>
              <label htmlFor={input.name}>{input.label}</label>
              <input
                type={input.type}
                id={input.name}
                {...form.register(input.name)}
              />
            </div>
          ))}
          <div className={styles.containerButton}>
            <button type="button" onClick={() => setOpen(false)}>
              Cancelar
            </button>
            <button type="submit">Crear</button>
          </div>
        </form>
      </div>
    </div>
  );
};
