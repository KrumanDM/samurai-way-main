import React from "react";
import MyPosts from "./MyPosts/Post/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type MessageType = any;

const Profile: React.FC<MessageType> = (props) => {
  return (
    <div>
      <ProfileInfo />

      <MyPosts />
    </div>
  );
};

export default Profile;
