import styles from "./login.module.scss";
import imageLogin from "@/assets/images/Imagen_1.png";
import logo from "@/assets/images/Logo_1_CollectPro.png";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
export const Login = () => {

  const { register, handleSubmit } = useForm();
  const {handleLogin} = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    handleLogin(data.user, data.password);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <img className={styles.imgBackground} src={imageLogin} alt="BackgroundImg" />
      <div className={styles.containerForm}>
        <img src={logo} alt="LogoCollect" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Iniciar Sesión</h2>
          <input
            type="text"
            placeholder="Usuario"
            {...register("user", { required: true })}
          />
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          <button type="submit">Iniciar</button>
        </form>
      </div>
    </div>
  );
};
