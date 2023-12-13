import styles from "./styles.module.scss";

interface Props {
  label: string;
  mask?: (str: string) => string;
}

const Input = ({ label, mask }: Props) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input className={styles.data_field} />
    </div>
  );
};

export default Input;
