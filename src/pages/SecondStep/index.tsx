import React from "react";

import { useNavigate } from "react-router-dom";
import BtnPrimary from "../../components/BtnPrimary";
import BtnSecondary from "../../components/BtnSecondary";
import ProgressLine from "../../components/ProgressLine";
import Input from "./components/Input";
import styles from "./styles.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import schema from "./schema";
import { useAppDispatch, useAppSelector } from "../../store";
import { setSecond } from "../../slice";

interface Data {
  advantages: (undefined | string)[];
  radio: number | undefined;
  checboxes?: (number | undefined)[];
}

const SecondStep = () => {
  const navigate = useNavigate();

  const curId = React.useRef(0);

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data);

  const { handleSubmit, control, register } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      checkboxes: data.checkboxes,
      radio: 2,
      advantages: data.advantages,
    },
  });

  const advantages = useFieldArray({
    name: "advantages" as never,
    control,
  });

  const checkboxes = useFieldArray({ control, name: "checkboxes" as never });

  function onSubmit(data: Data) {
    dispatch(setSecond(data));
    navigate("/third_step");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <ProgressLine step={2} className={styles.progress_line} />
      <p>Преимущества</p>
      {advantages.fields.map((_, index) => {
        curId.current++;
        return (
          <Input
            {...register(`advantages.${index}`)}
            remove={advantages.remove}
            index={index}
            key={curId.current}
          />
        );
      })}

      <button
        onClick={() => advantages.append("")}
        className={styles.add_advantage}
      >
        +
      </button>

      <div className={styles.checkbox_group}>
        <p>Checkbox группа</p>
        {[1, 2, 3].map((number) => (
          <div key={number} className={styles.choice_list}>
            <input
              {...register("checkboxes")}
              value={number}
              key={number}
              className={styles.checkbox}
              type="checkbox"
              {...checkboxes.fields.find(
                (field) => field.id === number.toString()
              )}
              id={`checkboxes.${number}`}
            />
            <label htmlFor="">{number}</label>
          </div>
        ))}
      </div>

      <div className={styles.radio_group}>
        <p>Radio группа</p>
        {[1, 2, 3].map((number) => (
          <div key={number} className={styles.choice_list}>
            <input
              {...register("radio")}
              name="radio"
              value={number}
              key={number}
              className={styles.radio}
              type="radio"
            />
            <label>{number}</label>
          </div>
        ))}
      </div>

      <div className={styles.buttons}>
        <BtnSecondary
          id="button-back"
          text="Назад"
          onClick={() => navigate("/first_step")}
        />
        <BtnPrimary id="button-next" text="Далее" />
      </div>
    </form>
  );
};

export default SecondStep;
