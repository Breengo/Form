import { useNavigate } from "react-router-dom";
import BtnPrimary from "../../components/BtnPrimary";
import Header from "./components/Header";
import styles from "./styles.module.scss";
import Input from "./components/Input";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Header />

      <Input label="Номер телефона" />
      <Input label="Email" />
      <BtnPrimary
        className={styles.btn}
        id="button-start"
        text="Начать"
        onClick={() => navigate("/first_step")}
      />
    </div>
  );
};

export default Main;
