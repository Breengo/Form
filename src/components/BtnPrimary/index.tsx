import styles from "./styles.module.scss";

interface Props {
  text: string;
  id: string;
  className?: string;
  onClick?: () => void;
}

const BtnPrimary = ({ text, id, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      id={id}
      className={`${styles.btn} ${className}`}
    >
      {text}
    </button>
  );
};

export default BtnPrimary;
