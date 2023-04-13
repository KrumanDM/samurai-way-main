import React from "react";
import s from "./Post.module.css";

type PostPropsType = any

const Post = (props:PostPropsType) => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy81hYTjh2crLdaYkR1irTcMHtqLJ105VvN6pJn9vKW0mXxMCg_VbvXBnqAfrMAQCxDYw&usqp=CAU" />
        {props.message}
      <div>
        <span>{props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
