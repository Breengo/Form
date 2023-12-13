import { useNavigate } from "react-router-dom";
import BtnPrimary from "../../components/BtnPrimary";
import BtnSecondary from "../../components/BtnSecondary";
import ProgressLine from "../../components/ProgressLine";
import Input from "./components/Input";
import Selector from "./components/Selector";
import styles from "./styles.module.scss";

const FirstStep = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <ProgressLine className={styles.progress_line} step={1} />
      <Input
        label="Никнейм"
        placeholder="Placeholder"
        id="field-nickname"
        tip="Tip"
      />
      <Input label="Имя" placeholder="Placeholder" id="field-name" tip="Tip" />
      <Input
        label="Фамилия"
        placeholder="Placeholder"
        id="field-sername"
        tip="Tip"
      />
      <Selector />
      <div className={styles.buttons}>
        <BtnSecondary
          text="Назад"
          id="button-back"
          onClick={() => navigate("/")}
        />
        <BtnPrimary
          text="Далее"
          id="button-next"
          onClick={() => navigate("/second_step")}
        />
      </div>
    </div>
  );
};

export default FirstStep;
