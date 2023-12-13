import React from "react";

import styles from "./styles.module.scss";

const Selector = () => {
  const [value, setValue] = React.useState("Не выбрано");
  const [showOptions, setShowOptions] = React.useState(false);

  function onClick(option: string) {
    setValue(option);
    setShowOptions(false);
  }

  return (
    <div id="field-sex" className={styles.container}>
      <p className={styles.label}>Пол</p>
      <div className={styles.selector}>
        <p
          onClick={() => setShowOptions((prev) => !prev)}
          className={styles.display}
        >
          {value}
        </p>
        {showOptions && (
          <div className={styles.options}>
            {[
              { option: "мужской", id: "field-sex-option-man" },
              { option: "женский", id: "field-sex-option-woman" },
            ].map((option, index) => (
              <p
                id={option.id}
                key={index}
                onClick={() => onClick(option.option)}
              >
                {option.option}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Selector;
