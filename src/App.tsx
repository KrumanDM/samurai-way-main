
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="content">
        <div>
        <img src="https://sun2.cosmostv-by-minsk.userapi.com/impg/O_Sfh3gmJlbUBh-2hgwvkh-bXeRGMyV0QHLJ_Q/DJAb9B1CIGA.jpg?size=604x364&quality=96&sign=0c3e2a12e7302055b558287a7f111fe8&type=album"></img>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div> 
    </div>);
}


export default App;
