import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom"

type MessageType = any;

const Dialogs: React.FC<MessageType> = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1">Dima</NavLink> 
        </div>
          
        <div className={s.dialog}>
           <NavLink to="/dialogs/2">Artem</NavLink>
        </div>
        <div className={s.dialog}>
            <NavLink to="/dialogs/3">Zhenya</NavLink>
        </div>
        <div className={s.dialog}>
            <NavLink to="/dialogs/4">Valera</NavLink>
        </div>
        <div className={s.dialog}>
            <NavLink to="/dialogs/5">Denis</NavLink>
        </div>
        <div className={s.dialog}>
            <NavLink to="/dialogs/6">Kate</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.dialog}>Hi</div>
        <div className={s.dialog}>Thats good</div>
        <div className={s.dialog}>Realy well</div>
      </div>
    </div>
  );
};

export default Dialogs;
