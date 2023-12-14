import { forwardRef } from "react";
import styles from "./styles.module.scss";
import { FieldError } from "react-hook-form";

interface Props {
  label: string;
  error: FieldError | undefined;
}

export type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>(
  ({ label, error, ...rest }: Props, ref) => {
    return (
      <div className={styles.container}>
        <label className={styles.label}>{label}</label>
        <input ref={ref} {...rest} className={styles.data_field} />
        <p className={styles.tip}>{error?.message}</p>
      </div>
    );
  }
);

export default Input;
