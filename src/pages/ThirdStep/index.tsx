import styles from "./styles.module.scss";

import ProgressLine from "../../components/ProgressLine";
import BtnSecondary from "../../components/BtnSecondary";
import BtnPrimary from "../../components/BtnPrimary";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useAppDispatch, useAppSelector } from "../../store";
import { setThird } from "../../slice";
import axios from "axios";
import ErrorModal from "./components/ErrorModal";
import SuccesModal from "./components/SuccesModal";

interface Data {
  about: string | undefined;
}

const ThirdStep = () => {
  const [length, setLength] = React.useState(0);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data);
  const [showModal, setShowModal] = React.useState("");

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { about: data.about },
  });

  function onSubmit(data: Data) {
    dispatch(setThird(data));
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random > 0.6) reject("");
        else resolve("");
      }, 1000);
    })
      .then(() => setShowModal("Success"))
      .catch(() => setShowModal("Error"));
    axios.post("url", { data });

    navigate("/third_step");
  }

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setLength(e.target.value.replace(/ /g, "").length);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      {showModal === "Error" && <ErrorModal setShowModal={setShowModal} />}
      {showModal === "Success" && <SuccesModal />}
      <ProgressLine className={styles.progress_line} step={3} />

      <p className={styles.label}>О себе</p>
      <div className={styles.textarea_container}>
        <textarea
          {...register("about")}
          onChange={onChange}
          className={styles.textarea}
          id="field-about"
          placeholder="Placeholder"
        ></textarea>
        <p>{length}</p>
      </div>
      <p className={styles.tip}>{errors.about?.message}</p>

      <div className={styles.buttons}>
        <BtnSecondary
          id="button-back"
          text="Назад"
          onClick={() => navigate("/second_step")}
        />
        <BtnPrimary id="button-send" text="Отправить" />
      </div>
    </form>
  );
};

export default ThirdStep;
