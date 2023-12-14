import styles from "./styles.module.scss";
import successIcon from "../../../../assets/icons/success.svg";

import BtnPrimary from "../../../../components/BtnPrimary";
import { useNavigate } from "react-router-dom";

const SuccesModal = () => {
  const navigate = useNavigate();

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
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default SuccesModal;
