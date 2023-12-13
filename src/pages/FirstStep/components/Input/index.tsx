import styles from "./styles.module.scss";

interface Props {
  label: string;
  placeholder: string;
  tip: string;
  id: string;
}

const Input = ({ label, placeholder, tip, id }: Props) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        id={id}
      />
      <p className={styles.tip}>{tip}</p>
    </div>
  );
};

export default Input;
