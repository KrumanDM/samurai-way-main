import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

type AppPropsType = any

const App = (props:AppPropsType) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className={"app-wrapper-content"}>
          <Routes>
          <Route path="/dialogs/*" element= {<Dialogs dialogs = {props.dialogs} messagesData = {props.messages} />}/>
          <Route path="/profile" element= {<Profile posts = {props.posts} />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
