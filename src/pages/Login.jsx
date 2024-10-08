import React from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";
import { useContext } from "react";
import MyLogo from "../components/img/mylogo.svg";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')

    }
  return (
    <div className="login_form">
        <div className="my-logo">
            <img src={MyLogo} alt="" />
        </div>
      <h1>Вход ВРеакте</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
};

export default Login;
