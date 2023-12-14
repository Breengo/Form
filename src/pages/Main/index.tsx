import { useNavigate } from "react-router-dom";
import BtnPrimary from "../../components/BtnPrimary";
import Header from "./components/Header";
import styles from "./styles.module.scss";
import Input from "./components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useAppDispatch, useAppSelector } from "../../store";
import { setMain } from "../../slice";

interface Data {
  email: string | undefined;
  phone: string | undefined;
}

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const storeData = useAppSelector((state) => state.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: storeData.email,
      phone: storeData.phone,
    },
  });

  function onSubmit(data: Data) {
    dispatch(setMain(data));
    navigate("/first_step");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Header />
      <Input
        error={errors.phone}
        {...register("phone")}
        label="Номер телефона"
      />
      <Input error={errors.email} {...register("email")} label="Email" />
      <BtnPrimary className={styles.btn} id="button-start" text="Начать" />
    </form>
  );
};

export default Main;
