import React, { useState } from "react";
import Form from "../../../components/Form/Form";
import { useNavigate } from "react-router-dom";
import app from "@/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const navigate = useNavigate();
    const [firebaseError, setFirebaseError] = useState("");

    const auth = getAuth(app);
    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                // redux store에 저장
                navigate("/");
            })
            .catch((error) => {
                return error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.");
            });
    };

    return <Form title={"로그인"} getDataForm={handleLogin} firebaseError={firebaseError} />;
};

export default SignIn;
