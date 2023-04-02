import React from "react";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={navData=>navData.isActive? s.activeLink: s.item}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" className={navData=>navData.isActive? s.activeLink: s.item}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a>Settinghs</a>
      </div>
    </nav>
  );
};

export default Navbar;
