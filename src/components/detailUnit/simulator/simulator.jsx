import styles from "./simulator.module.scss";

export const Simulator = () => {
  return (
    <div className={styles.containerSimulator}>
      <div className={styles.containerRow1}>
        <form className={styles.containerForm}>
          <div className={styles.containerInput}>
            <label>Ingresa fecha</label>
            <input type="date" />
          </div>
          <div className={styles.containerInput}>
            <label>Ingresa valor</label>
            <input type="number" />
          </div>
          <div className={styles.containerInput}>
            <button>Calcular</button>
            <button>Guardar</button>
          </div>
        </form>
        <div className={styles.tablePayment}>
          <h3 className={styles.title}>Proyección Pagos</h3>
          <h4>Abono a Honorarios</h4>
          <h4>$ 0</h4>
          <h4>Nuevo saldo Honorarios</h4>
          <h4>$ 0</h4>
          <h4>Abono a Capital</h4>
          <h4>$ 0</h4>
          <h4>Nuevo saldo Capital</h4>
          <h4>$ 0</h4>
          <h4>Total Abono</h4>
          <h4>$ 0</h4>
          <h4>Nuevo saldo total</h4>
          <h4>$ 0</h4>
        </div>
      </div>
      <div className={styles.containerRow2}>
        <h3 className={styles.title}>SIMULADOR RESUMEN DEUDA TOTAL</h3>
        <div className={styles.void}></div>
        <div className={styles.void}></div>
        <h3>TIPO DE PAGO</h3>
        <h3>FECHA DE COMPROMISO</h3>
        <h3>HONORARIOS</h3>
        <h3>ADMINISTRACIÓN</h3>
        <h3>INTERESES</h3>
        <h3>PARK. CARRO</h3>
        <h3>PARK. MOTO</h3>
        <h3>CTA EXTRAOR</h3>
        <h3>SAN. INS. ASAMB</h3>
        <h3>OTROS COBROS</h3>
        <h3>ACUERDO DE PAGO</h3>
        <h3>$ 0</h3>
        <div className={styles.date}>
          <p>Total</p>
          <p>10/10/2024</p>
        </div>
        <h3>$ 0</h3>
        <h3>$ 0</h3>
        <h3>$ 0</h3>
        <h3>$ 0</h3>
        <h3>$ 0</h3>
        <h3>$ 0</h3>
        <h3>$ 0</h3>
        <h3>$ 0</h3>
        <h3 className={styles.total}>SALDO TOTAL DESPUÉS DE ACUERDO</h3>
        <h3>$ 0</h3>
        <h3>$ 0</h3>
        <h3>$ 0</h3>
        <h3>$ 0</h3>
        <h3>$ 0</h3>
        <h3>$ 0</h3>
        <h3>$ 0</h3>
        <h3>$ 0</h3>
      </div>
      <div className={styles.containerRow3}>
        <h3>Compromisos y Acuerdos</h3>
        <table>
          <thead>
            <tr>
              <th>Fecha de Resgistro</th>
              <th>Fecha acuerdo</th>
              <th>Valor</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10/10/2024</td>
              <td>10/10/2024</td>
              <td>$ 0</td>
              <td>Activo</td>
              <td className={styles.actions}>
                <p>Eliminar</p>
                <p>Editar</p>
              </td>
            </tr>
            <tr>
              <td>10/10/2024</td>
              <td>10/10/2024</td>
              <td>$ 0</td>
              <td>Activo</td>
              <td className={styles.actions}>
                <p>Eliminar</p>
                <p>Editar</p>
                <p>Imprimir</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
