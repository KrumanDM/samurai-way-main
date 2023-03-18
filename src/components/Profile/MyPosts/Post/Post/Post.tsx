import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy81hYTjh2crLdaYkR1irTcMHtqLJ105VvN6pJn9vKW0mXxMCg_VbvXBnqAfrMAQCxDYw&usqp=CAU" />
         post 1
      <div>
        <span> like </span>
      </div>
    </div>
  );
};

export default Post;
