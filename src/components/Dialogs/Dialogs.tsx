import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom"


type MessageType = any;

type DialogItemType = {
  name: string
  id: string
}
type MessageTypeProps = {
  message:string
}

const DialogItem = (props:DialogItemType) =>{
  let path = "/dialogs/1" + props.id

  return <div className={s.dialog + " " + s.active}>
  <NavLink to={path}>{props.name}</NavLink> 
</div>
}

const Message = (props:MessageTypeProps) => {
  return <div className={s.dialog}>{props.message}</div>
}

const Dialogs: React.FC<MessageType> = (props) => {

  let dialogsData = [
    {id:"1",name:"Dima"},
    {id:"2",name:"Artem"},
    {id:"3",name:"Zhenya"},
    {id:"4",name:"Valera"},
    {id:"5",name:"Denis"},
    {id:"6",name:"Kate"}
  ]

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
        <Message message="hello fuckers"/>
        <Message message="Thats good"/>
        <Message message="Realy well"/>
        
      </div>
    </div>
  );
};

export default Dialogs;
