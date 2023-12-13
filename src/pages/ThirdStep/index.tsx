import styles from "./styles.module.scss";

import ProgressLine from "../../components/ProgressLine";
import BtnSecondary from "../../components/BtnSecondary";
import BtnPrimary from "../../components/BtnPrimary";
import { useNavigate } from "react-router-dom";

const ThirdStep = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <ProgressLine className={styles.progress_line} step={3} />
      <p className={styles.label}>О себе</p>
      <textarea
        className={styles.textarea}
        id="field-about"
        placeholder="Placeholder"
      ></textarea>
      <p className={styles.tip}>Tip</p>

      <div className={styles.buttons}>
        <BtnSecondary
          id="button-back"
          text="Назад"
          onClick={() => navigate("/second_step")}
        />
        <BtnPrimary id="button-send" text="Отправить" onClick={() => ""} />
      </div>
    </div>
  );
};

export default ThirdStep;
