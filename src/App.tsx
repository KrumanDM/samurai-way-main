import { OmitProps } from "antd/lib/transfer/ListBody";
import { type } from "os";
import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Technologies from "./Technologies";

function App() {
  return (
    <div>
      <Header title={"Programers"} />
      <Technologies title={"cssssss"}/>
      <Footer value={1999}/>
      <Jankins value={2007}/>
    </div>
  );
}


type JankinsPropsType = {
  value: number
}

const Jankins = (props: JankinsPropsType) => {
  return (
    <div>
      <a>{props.value}</a>
    </div>
  )
}

export default App;
