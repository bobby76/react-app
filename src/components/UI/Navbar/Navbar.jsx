import React, { useContext, useState } from "react";
import PostFilter from "../../PostFilter";
import { Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";
import MyImage from "../../img/logo.svg";
import MyProfile from "../../img/profile.svg";
import { usePosts } from "../../../hooks/usePosts";

const Navbar = (props) => {
    const {isAuth, setIsAuth} = useContext(AuthContext); 
    const [isActive, setIsActive] = useState(false);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        setIsActive((s) => !s);
    };
    const [filter, setFilter]= useState({sort: '', query: ''});
    
    const [show, setShow] = useState(true);
    const handleClick = event => {
        
        /*setIsActive(current => !current);*/
        let element = document.getElementById("nav");
        element.classList.toggle('open');
        setIsActive((s) => !s);
      };
     
  return isAuth ? (
    <div className="navbar">
        <div className="container">
            <div className="navbarblock">
                <div className="navbarblock_logo">
                    <a href="https://bobby76.github.io/react-app/">
                        <img src={MyImage} alt="" />
                    </a>
                </div>
                <div className="navbar_nav">
                    <div className="navbarblock_search">
                        <PostFilter filter={filter} setFilter={setFilter}/>
                    </div>
                    <div className="navbar__links">
                        <Link to="./about">О сайте</Link>
                        <Link to="./posts">Моя лента</Link>
                    </div>
                </div>
                <div className="navbar_login">
                    <MyButton onClick={logout} className="logout">
                        Выйти
                    </MyButton>
                </div>
                <div className="navbar_mob" id="nav">
                    <img src={MyProfile} className={isActive ? 'open' : ''} alt="" onClick={handleClick} />
                    {console.log('isactive' + isActive)}
                    <div className="popup_menu" style={{ display: isActive ? "block" : "none" }}>
                        <Link to="./about" onClick={handleClick}>О сайте</Link>
                        <Link to="./posts"onClick={handleClick}>Моя лента</Link>
                        <MyButton onClick={logout} className="logout">
                            Выйти
                        </MyButton>
                        <div className="nav-btn close">
                            <MyButton onClick={handleClick}>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_4_77)">
                                        <path d="M5.83174 5.00008L9.82751 1.00432C10.0575 0.774327 10.0575 0.40258 9.82751 0.172586C9.59751 -0.0574068 9.22576 -0.0574068 8.99577 0.172586L5.00001 4.16835L1.00423 0.172586C0.774235 -0.0574068 0.402488 -0.0574068 0.172495 0.172586C-0.0574983 0.40258 -0.0574983 0.774327 0.172495 1.00432L4.16826 5.00008L0.172495 8.99584C-0.0574983 9.22584 -0.0574983 9.59758 0.172495 9.82758C0.22705 9.88227 0.291872 9.92565 0.363238 9.95523C0.434605 9.9848 0.51111 9.99999 0.588362 9.99991C0.738943 9.99991 0.889525 9.94226 1.00423 9.82758L4.99999 5.83181L8.99575 9.82758C9.05031 9.88227 9.11513 9.92565 9.1865 9.95523C9.25786 9.9848 9.33437 9.99999 9.41162 9.99991C9.5622 9.99991 9.71278 9.94226 9.82749 9.82758C10.0575 9.59758 10.0575 9.22584 9.82749 8.99584L5.83174 5.00008Z" fill="#6F7985" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4_77">
                                        <rect width="10" height="10" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </MyButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  ) : (
    <div className="navbar notlogin">
        <div className="container">
            <div className="navbarblock">
                <div className="navbarblock_logo">
                    <a href="https://bobby76.github.io/react-app/">
                        <img src={MyImage} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Navbar;
