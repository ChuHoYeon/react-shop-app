import React from "react";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";

const Form = ({ title }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = ({ email, password }) => {
        console.log(email, password);
    };

    const userEmail = {
        required: "필수 필드입니다.",
        pattern: {
            value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
            message: "올바른 이메일 형식이 아닙니다.",
        },
    };
    const userPassword = {
        required: "필수 필드입니다.",
        minLength: { value: 4, message: "4자리 이상 입력해주세요." },
        maxLength: { value: 13, message: "13자리 이하 입력해주세요." },
        pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm, message: "영문+숫자 8자리 이상 입력해주세요." },
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div>
                <input type="email" placeholder="E-mail" {...register("email", userEmail)} />
                {errors?.email && (
                    <div>
                        <span className={styles.form_error}>{errors.email.message}</span>
                    </div>
                )}
            </div>
            <div>
                <input type="password" placeholder="Password" {...register("password", userPassword)} />
                {errors?.password && (
                    <div>
                        <span className={styles.form_error}>{errors.password.message}</span>
                    </div>
                )}
            </div>
            <button type="submit">{title}</button>
            <span className={styles.form_error}></span>
        </form>
    );
};

export default Form;
