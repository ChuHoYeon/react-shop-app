import type { FC } from "react";
import styles from "./Form.module.scss";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

type FormProps = {
  title: string;
  getDataForm: (email: string, password: string) => void;
  firebaseError: string;
};

type Inputs = {
  email: string;
  password: string;
};

const Form: FC<FormProps> = ({ title, getDataForm, firebaseError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FieldValues> = ({ email, password }) => {
    getDataForm(email, password);
    reset();
  };

  const userEmail = {
    required: "필수 필드입니다.",
    pattern: {
      value:
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      message: "올바른 이메일 형식이 아닙니다.",
    },
  };
  const userPassword = {
    required: "필수 필드입니다.",
    minLength: { value: 6, message: "6자리 이상 입력해주세요." },
    maxLength: { value: 13, message: "13자리 이하 입력해주세요." },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,13}$/gm,
      message: "영문+숫자 6~13자리까지 입력해주세요.",
    },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          {...register("email", userEmail)}
        />
        {errors?.email && (
          <div>
            <span className={styles.form_error}>{errors.email.message}</span>
          </div>
        )}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", userPassword)}
        />
        {errors?.password && (
          <div>
            <span className={styles.form_error}>{errors.password.message}</span>
          </div>
        )}
      </div>
      <button type="submit">{title}</button>
      {firebaseError && (
        <span className={styles.form_error}>{firebaseError}</span>
      )}
    </form>
  );
};

export default Form;
