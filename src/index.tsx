import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

type IndexPropsType = any

let posts = [
  {id:"1",message:"Hello fuckers",likesCount:12},
  {id:"2",message:"Thats good",likesCount:13},
  {id:"3",message:"Really well",likesCount:14}
  
]

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

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);
