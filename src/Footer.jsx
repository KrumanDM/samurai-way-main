import React from "react";

type FooterPropsType = {
  value: number
}

const Footer = (props: FooterPropsType) => {
  return <div>{props.value}</div>;
};

export default Footer;
