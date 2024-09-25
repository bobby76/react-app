import React, { useContext, useState } from "react";
import PostFilter from "../../PostFilter";
import { Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";
import MyImage from "../../img/logo.svg";

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
                    <a href="https://bobby76.github.io/react-app/">
                        <img src={MyImage} alt="" />
                    </a>
                </div>
                <div class="navbar_nav">
                    <div class="navbarblock_search">
                        <PostFilter filter={filter} setFilter={setFilter}/>
                    </div>
                    <div className="navbar__links">
                        <Link to="./about">О сайте</Link>
                        <Link to="./posts">Моя лента</Link>
                    </div>
                </div>
                <div class="navbar_login">
                    <MyButton onClick={logout} className="logout">
                        Выйти
                    </MyButton>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Navbar;
