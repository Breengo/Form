import styles from "./styles.module.scss";
import successIcon from "../../../../assets/icons/success.svg";

import BtnPrimary from "../../../../components/BtnPrimary";

const SuccesModal = () => {
  return (
    <div className={styles.dark}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Форма успешно отправлена</h2>
        </div>
        <div className={styles.img_container}>
          <img src={successIcon} alt="error" />
        </div>
        <div className={styles.btn_container}>
          <BtnPrimary
            id="button-to-main"
            text="На главную"
            onClick={() => ""}
          />
        </div>
      </div>
    </div>
  );
};

export default SuccesModal;
