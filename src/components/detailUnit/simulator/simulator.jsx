import { useForm } from "react-hook-form";
import styles from "./simulator.module.scss";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuPrinter } from "react-icons/lu";

export const Simulator = () => {
  const total = 203690;
  const totalHonorarios = 120000;
  const form = useForm();
  const [capital, setCapital] = useState({
    abono: 0,
    nuevoSaldo: 0,
  });
  const [honorarios, setHonorarios] = useState({
    abono: 0,
    nuevoSaldo: 0,
  });
  const [valor, setValor] = useState(0);
  const [date, setDate] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    setValor(data.value);
    data.value = data.value.replace(/\D/g, "");
    setDate(data.date);
    setCapital({
      abono: new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
      }).format(data.value * 0.7),
      nuevoSaldo: new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
      }).format(total - data.value * 0.7),
    });
    setHonorarios({
      abono: new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
      }).format(data.value * 0.3),
      nuevoSaldo: new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
      }).format(totalHonorarios - data.value * 0.3),
    });
  };

  const parsedCop = (value, number = false) => {
    if (value.some((element) => typeof element !== "string")) return 0;
    const newValue = value.map((element) =>
      parseInt(element.replace(/\D/g, ""))
    );
    const total = newValue.reduce((acc, curr) => acc + curr);
    if (number) return total;
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(total);
  };

  console.log(parsedCop([valor]));
  return (
    <div className={styles.containerSimulator}>
      <div className={styles.containerRow1}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={styles.containerForm}
        >
          <div className={styles.containerInput}>
            <label>Ingresa fecha</label>
            <input
              {...form.register("date", {
                required: true,
              })}
              type="date"
            />
          </div>
          <div className={styles.containerInput}>
            <label>Ingresa valor</label>
            <input
              {...form.register("value", {
                required: true,
                onChange: (e) => {
                  const rawValue = e.target.value.replace(/\D/g, ""); // Elimina caracteres no numéricos
                  const formattedValue = new Intl.NumberFormat("es-CO", {
                    style: "currency",
                    currency: "COP",
                    maximumFractionDigits: 0, // Para COP no usamos decimales
                  }).format(rawValue);

                  // Actualiza el valor del input con el formato
                  e.target.value = formattedValue;
                },
              })}
            />
          </div>
          <div className={styles.containerInput}>
            <label>Descuento</label>
            <select
              {...form.register("discountName", {
                required: true,
              })}
            >
              <option value="0">Costos de cobranza</option>
              <option value="1">Sobre capital</option>
              <option value="2">Interés de mora</option>
            </select>
            <input
              {...form.register("discountValue", {
                required: true,
                /* maxLength: 3, */
              })}
              type="number"
              placeholder="Valor descuento"
            />
            %
          </div>
          {/* {
            form.formState.errors.discountValue && (
              <p className={styles.error}>Campo requerido</p>
            )
          } */}
          <div className={styles.containerInput}>
            <button>Calcular</button>
            <button type="button">Guardar</button>
          </div>
        </form>
        <div className={styles.tablePayment}>
          <h4 className={styles.title}>Proyección Pagos</h4>
          <p>Abono a Honorarios</p>
          <p>{honorarios.abono}</p>
          <p>Nuevo saldo Honorarios</p>
          <p>{honorarios.nuevoSaldo} </p>
          <p>Abono a Capital</p>
          <p>{capital.abono}</p>
          <p>Nuevo saldo Capital</p>
          <p>{capital.nuevoSaldo}</p>
          <p>Total Abono</p>
          <p>{parsedCop([honorarios.abono, capital.abono])}</p>
          <p>Nuevo saldo total</p>
          <p>{parsedCop([honorarios.nuevoSaldo, capital.nuevoSaldo])}</p>
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
        <h3>{valor}</h3>
        <div className={styles.date}>
          <p>Total</p>
          <p>{date || "DD/MM/AAAA"}</p>
        </div>
        <h3>
          {new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
          }).format(totalHonorarios)}
        </h3>
        <h3>$ 53.690</h3>
        <h3>$ 50.000</h3>
        <h3>$ 20.000</h3>
        <h3>$ 30.000</h3>
        <h3>$ 10.000</h3>
        <h3>$ 20.000</h3>
        <h3>$ 20.000</h3>
        <h3 className={styles.total}>SALDO TOTAL DESPUÉS DE ACUERDO</h3>
        <h3>{honorarios.nuevoSaldo == 0 ? "$ 0" : honorarios.nuevoSaldo}</h3>
        <h3>
          {new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
          }).format(parsedCop([valor], true) * (53690 / total))}{" "}
        </h3>
        <h3>
          {new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
          }).format(parsedCop([valor], true) * (50000 / total))}
        </h3>
        <h3>
          {new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
          }).format(parsedCop([valor], true) * (20000 / total))}
        </h3>
        <h3>
          {new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
          }).format(parsedCop([valor], true) * (30000 / total))}
        </h3>
        <h3>
          {new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
          }).format(parsedCop([valor], true) * (10000 / total))}
        </h3>
        <h3>
          {new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
          }).format(parsedCop([valor], true) * (20000 / total))}
        </h3>
        <h3>
          {new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
          }).format(parsedCop([valor], true) * (20000 / total))}
        </h3>
      </div>
      <div className={styles.containerRow3}>
        <h3>Compromisos y Acuerdos</h3>
        <table>
          <thead>
            <tr>
              <th>Fecha de Resgistro</th>
              <th>Fecha acuerdo</th>
              <th>Valor</th>
              <th>Acuerdo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10/10/2024</td>
              <td>10/10/2024</td>
              <td>$ 0</td>
              <td></td>
              <td>Activo</td>
              <td className={styles.actions}>
                <FaRegTrashAlt />
                <LuPrinter />
              </td>
            </tr>
            <tr>
              <td>10/10/2024</td>
              <td>10/10/2024</td>
              <td>$ 0</td>
              <td></td>
              <td>Activo</td>
              <td className={styles.actions}>
                <FaRegTrashAlt />
                <LuPrinter />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
