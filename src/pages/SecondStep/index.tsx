import { useNavigate } from "react-router-dom";
import BtnPrimary from "../../components/BtnPrimary";
import BtnSecondary from "../../components/BtnSecondary";
import ProgressLine from "../../components/ProgressLine";
import Input from "./components/Input";
import styles from "./styles.module.scss";

const SecondStep = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <ProgressLine step={2} className={styles.progress_line} />
      <p>Преимущества</p>
      <Input />
      <Input />
      <Input />
      <button className={styles.add_advantage}>+</button>

      <div className={styles.checkbox_group}>
        <p>Checkbox группа</p>
        {[1, 2, 3].map((number) => (
          <div key={number} className={styles.choice_list}>
            <input key={number} className={styles.checkbox} type="checkbox" />
            <label htmlFor="">{number}</label>
          </div>
        ))}
      </div>

      <div className={styles.radio_group}>
        <p>Radio группа</p>
        {[1, 2, 3].map((number) => (
          <div key={number} className={styles.choice_list}>
            <input key={number} className={styles.radio} type="radio" />
            <label htmlFor="">{number}</label>
          </div>
        ))}
      </div>

      <div className={styles.buttons}>
        <BtnSecondary
          id="button-back"
          text="Назад"
          onClick={() => navigate("/first_step")}
        />
        <BtnPrimary
          id="button-next"
          text="Далее"
          onClick={() => navigate("/third_step")}
        />
      </div>
    </div>
  );
};

export default SecondStep;
