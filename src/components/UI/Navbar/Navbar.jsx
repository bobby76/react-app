import React, { useContext, useState } from "react";
import PostFilter from "../components/PostFilter";
import { Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";

const Navbar = (props) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    const [filter, setFilter]= useState({sort: '', query: ''})
  return (
    <div className="navbar">
        <div class="container">
            <div class="navbarblock">
                <div class="navbarblock_logo">
                    <img src="./react-app/src/components/img/logo.svg" alt="" />
                </div>
                <div class="navbarblock_search">
                    <PostFilter filter={filter} setFilter={setFilter}/>
                </div>
                    <div className="navbar__links">
                        <Link to="./about">О сайте</Link>
                        <Link to="./posts">Посты</Link>
                    </div>
                </div>
                <MyButton onClick={logout}>
                    Выйти
                </MyButton>
            </div>
        </div>
  )
};

export default Navbar;
