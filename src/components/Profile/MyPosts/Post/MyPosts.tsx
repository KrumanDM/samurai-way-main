import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type MyPostsPropsType = any

const MyPosts = (props:MyPostsPropsType) => {

  let posts = [
    {id:"1",message:"Hello fuckers",likesCount:12},
    {id:"2",message:"Thats good",likesCount:13},
    {id:"3",message:"Really well",likesCount:14}
    
  ]
  let postsElements = 
  posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

  return (
    <div className={s.postsBlock}>
           <h3>My posts</h3>
      <div>
        <div>
        <textarea></textarea>
        </div>
        <div>
        <button>  Add post </button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;
