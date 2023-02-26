import React from "react";

type HeaderPropsType = {
  title: string
}

const Header = (props: HeaderPropsType) => {
  return (
    <div>
      <a>{props.title}</a>
    </div>
  );
};

export default Header;
