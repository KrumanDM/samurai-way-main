import React from "react";
import s from "./Dialogs.module.css";

type MessageType = any;

const Dialogs: React.FC<MessageType> = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>Dima</div>
        <div className={s.dialog}>Dimas</div>
        <div className={s.dialog}>Zhenya</div>
        <div className={s.dialog}>Valera</div>
        <div className={s.dialog}>Denis</div>
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
