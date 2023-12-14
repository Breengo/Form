import styles from "./styles.module.scss";
import deleteIcon from "../../../../assets/icons/delete.svg";
import { forwardRef } from "react";

interface Props {
  index: number;
  remove: (index: number) => void;
}

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>(({ index, remove, ...rest }, ref) => {
  return (
    <div className={styles.container}>
      <input
        {...rest}
        onChange={() => ""}
        ref={ref}
        className={styles.input}
        type="text"
        placeholder="Placeholder"
      />
      <img
        onClick={() => remove(index)}
        className={styles.img}
        src={deleteIcon}
        alt="error"
      />
    </div>
  );
});

export default Input;
