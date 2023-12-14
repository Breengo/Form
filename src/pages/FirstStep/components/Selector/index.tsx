import React, { forwardRef, useImperativeHandle } from "react";

import styles from "./styles.module.scss";

const OPTIONS = [
  { option: "мужской", value: "man", id: "field-sex-option-man" },
  { option: "женский", value: "woman", id: "field-sex-option-woman" },
];

type Ref = HTMLSelectElement;

interface SelectorProps {
  onChange: (value: string) => void;
  defaultVal: string;
}

const Selector = forwardRef<Ref, SelectorProps>(
  ({ onChange, defaultVal }, ref) => {
    React.useEffect(() => {
      OPTIONS.forEach((option) => {
        if (option.value === defaultVal) setChoiced(option.option);
      });
    }, []);

    const innerRef = React.useRef<Ref>(null);
    const [choiced, setChoiced] = React.useState("Не выбрано");
    const [showOptions, setShowOptions] = React.useState(false);

    useImperativeHandle(ref, () => innerRef.current!);

    function onClick(option: string, value: string) {
      onChange(value);
      setChoiced(option);
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
            {choiced}
          </p>

          {showOptions && (
            <div className={styles.options}>
              {OPTIONS.map((option, index) => (
                <p
                  id={option.id}
                  key={index}
                  onClick={() => onClick(option.option, option.value)}
                >
                  {option.option}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Selector;
