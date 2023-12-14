import styles from "./styles.module.scss";
import errorIcon from "../../../../assets/icons/error.svg";

import BtnPrimary from "../../../../components/BtnPrimary";

interface Props {
  setShowModal: (str: string) => void;
}

const ErrorModal = ({ setShowModal }: Props) => {
  return (
    <div className={styles.dark}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Ошибка</h2>
          <button
            onClick={() => setShowModal("")}
            className={styles.close_btn}
          ></button>
        </div>
        <div className={styles.img_container}>
          <img src={errorIcon} alt="error" />
        </div>
        <div className={styles.btn_container}>
          <BtnPrimary
            onClick={() => setShowModal("")}
            id="button-close"
            text="Закрыть"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
