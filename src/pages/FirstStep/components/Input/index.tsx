import { forwardRef } from "react";
import styles from "./styles.module.scss";
import { FieldError } from "react-hook-form";

interface Props {
  label: string;
  placeholder: string;

  id: string;
  error: FieldError | undefined;
}

export type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>(
  ({ label, placeholder, id, error, ...rest }, ref) => {
    return (
      <div className={styles.container}>
        <label className={styles.label}>{label}</label>
        <input
          {...rest}
          ref={ref}
          className={styles.input}
          type="text"
          placeholder={placeholder}
          id={id}
        />
        <p className={styles.tip}>{error?.message}</p>
      </div>
    );
  }
);

export default Input;
