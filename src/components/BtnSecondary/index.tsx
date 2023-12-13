import styles from "./styles.module.scss";

interface Props {
  text: string;
  onClick: () => void;
  id: string;
  className?: string;
}

const BtnSecondary = ({ text, onClick, id, className }: Props) => {
  return (
    <button id={id} className={`${styles.btn} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default BtnSecondary;
