import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom"

type MessageType = any;

type DialogItemType = {
  name: string
  id: string
}

const DialogItem = (props:DialogItemType) =>{
  let path = "/dialogs/1" + props.id

  return <div className={s.dialog + " " + s.active}>
  <NavLink to={path}>{props.name}</NavLink> 
</div>
}

const Dialogs: React.FC<MessageType> = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        
        <DialogItem name="Dima" id="1"/>
        <DialogItem name="Artem" id="2"/>
        <DialogItem name="Zhenya" id="3"/>
        <DialogItem name="Valera" id="4"/>
        <DialogItem name="Denis" id="5"/>
        <DialogItem name="Kate" id="6"/>
        
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
