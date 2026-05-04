import React, { useState } from "react";
import Form from "../../../components/Form/Form";
import { useNavigate } from "react-router-dom";
import app from "@/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const SignUp = () => {
    const navigate = useNavigate();
    const [firebaseError, setFirebaseError] = useState("");

    const auth = getAuth(app);
    const handleSignUpAndLogin = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                // redux store에 저장
                navigate("/login");
            })
            .catch((error) => {
                console.log("Error Code : " + error.code);
                console.log("Error Message : " + error.message);

                if (error.code == "auth/email-already-in-use")
                    return error && setFirebaseError("이미 존재하는 이메일입니다.");
                return error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.");
            });
    };

    return <Form title={"가입하기"} getDataForm={handleSignUpAndLogin} firebaseError={firebaseError} />;
};

export default SignUp;
