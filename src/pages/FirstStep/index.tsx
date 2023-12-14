import { useNavigate } from "react-router-dom";
import BtnPrimary from "../../components/BtnPrimary";
import BtnSecondary from "../../components/BtnSecondary";
import ProgressLine from "../../components/ProgressLine";
import Input from "./components/Input";
import Selector from "./components/Selector";
import styles from "./styles.module.scss";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schems";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFirst } from "../../slice";

interface Data {
  name: string | undefined;
  sername: string | undefined;
  nickname: string | undefined;
  sex: string;
}

const FirstStep = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: data.name,
      sername: data.name,
      nickname: data.name,
      sex: data.sex,
    },
  });

  function onSubmit(data: Data) {
    dispatch(setFirst(data));
    navigate("/second_step");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <ProgressLine className={styles.progress_line} step={1} />
      <Input
        {...register("nickname")}
        label="Никнейм"
        placeholder="Placeholder"
        id="field-nickname"
        error={errors.nickname}
      />
      <Input
        {...register("name")}
        label="Имя"
        placeholder="Placeholder"
        id="field-name"
        error={errors.name}
      />
      <Input
        {...register("sername")}
        label="Фамилия"
        placeholder="Placeholder"
        id="field-sername"
        error={errors.sername}
      />
      <Controller
        name="sex"
        control={control}
        render={({ field: { onChange } }) => (
          <Selector defaultVal={data.sex} onChange={onChange} />
        )}
      />
      <div className={styles.buttons}>
        <BtnSecondary
          text="Назад"
          id="button-back"
          onClick={() => navigate("/")}
        />
        <BtnPrimary text="Далее" id="button-next" />
      </div>
    </form>
  );
};

export default FirstStep;
