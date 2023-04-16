import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type MessageType = any;

const Dialogs: React.FC<MessageType> = (props) => {

  let dialogs = [
    {id:"1",name:"Dima"},
    {id:"2",name:"Artem"},
    {id:"3",name:"Zhenya"},
    {id:"4",name:"Valera"},
    {id:"5",name:"Denis"},
    {id:"6",name:"Kate"}
  ]
  let messages = [
    {id:"1",message:"Hello fuckers"},
    {id:"2",message:"Thats good"},
    {id:"3",message:"Really well"},
  ]

  let dialogsElement = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
  let messagesElement = messages.map( m => <Message message={m.message}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElement}
        </div>
      <div className={s.messages}>
        {messagesElement}
        </div>
    </div>
  );
};

export default Dialogs;
