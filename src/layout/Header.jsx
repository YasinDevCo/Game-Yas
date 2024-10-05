import React from "react";
import style from "./Header.module.css";
import { IoMoon, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { BiLogInCircle, BiMenu } from "react-icons/bi";
function Header() {
  return (
    <header>
      <div>
        <img className={style.logo} src={logo} alt="" />
        <ul className={style.menu}>
          <Link to="/">
            <li>خانه</li>
          </Link>
          <Link to="/">
            <li>فروشگاه</li>
          </Link>
          <Link to="/">
            <li>درباره من</li>
          </Link>
          <Link to="/">
            <li>تماس با ما</li>
          </Link>
          <Link to="/">
            <li>وبلاگ</li>
          </Link>
        </ul>
      </div>
      <div>
        <IoMoon className={style.none}  size={20} color="var(--text-color)" />
      
        <IoSearch className={style.none} size={20} color="var(--text-color)" />

        <button className={style.btnAuth}>ثبت نام</button>
        <button className={style.btnMenu}><BiMenu color="white" size={60}/></button>
      </div>
    </header>
  );
}

export default Header;
