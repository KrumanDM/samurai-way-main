import React from "react";

import s from"./ProfileInfo.module.css"

type MessageType = (any)

const ProfileInfo: React.FC<MessageType> = (props) => {
  return (
    <div >
      <div>
        <img src="https://sun2.cosmostv-by-minsk.userapi.com/impg/O_Sfh3gmJlbUBh-2hgwvkh-bXeRGMyV0QHLJ_Q/DJAb9B1CIGA.jpg?size=604x364&quality=96&sign=0c3e2a12e7302055b558287a7f111fe8&type=album"></img>
      </div>
      <div className={s.descriptionBlock}>ava + description </div>
      {/* <MyPosts /> */}
    </div>
  );
};

export default ProfileInfo;
