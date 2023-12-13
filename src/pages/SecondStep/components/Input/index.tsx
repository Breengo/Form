import styles from "./styles.module.scss";
import deleteIcon from "../../../../assets/icons/delete.svg";

const Input = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Placeholder" />
      <img className={styles.img} src={deleteIcon} alt="error" />
    </div>
  );
};

export default Input;
