import styles from './switch.module.scss';

export const Switch = ({ isOn, handleToggle, id }) => {
  console.log(isOn)
  return (
    <div className={styles.switchContainer}>
      <input
        checked={isOn || isOn == "Activo"}
        onChange={handleToggle}
        className={styles.switchCheckbox}
        id={`react-switch-new${id}`}
        type="checkbox"
      />
      <label
        style={{ background: isOn == "Inactivo" || isOn && '#4CAF50' }}
        className={styles.switchLabel}
        htmlFor={`react-switch-new${id}`}
      >
        <span className={styles.switchButton} />
      </label>
    </div>
  );
};
