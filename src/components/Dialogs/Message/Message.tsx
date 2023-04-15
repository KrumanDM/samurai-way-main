import React from "react";
import s from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";

type MessageTypeProps = any

const Message = (props:MessageTypeProps) => {
    return <div className={s.dialog}>{props.message}</div>
  }

export default Message