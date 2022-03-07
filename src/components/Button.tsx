import React from "react";

interface ButtonPropsType {
  handleClick: () => void;
  children: any;
}

const Button: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
  console.log("Rendering button - ", props.children);
  return <button onClick={props.handleClick}>{props.children}</button>;
};

export default React.memo(Button);
