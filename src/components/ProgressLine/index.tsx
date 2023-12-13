import styles from "./styles.module.scss";

interface Props {
  step: 1 | 2 | 3;
  className?: string;
}

const ProgressLine = ({ step, className }: Props) => {
  let progressWidth = 0;

  if (step === 2) progressWidth = 50;
  else if (step === 3) progressWidth = 100;

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.line}>
        {[1, 2, 3].map((number) => {
          let className = `${styles.inactive_point}`;
          if (step == number) className = styles.active_point;
          if (step > number) className = styles.done_point;
          return (
            <div key={number} className={`${className} ${styles.point}`}>
              <span></span>
            </div>
          );
        })}
        <div
          style={{ width: `${progressWidth}%` }}
          className={styles.progress_bar}
        ></div>
      </div>
      <div className={styles.numbers}>
        {[1, 2, 3].map((number) => {
          let className = "";
          if (step === number) className = styles.active_number;
          else if (step > number) className = styles.done_number;
          return (
            <p key={number} className={className}>
              {number}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressLine;
