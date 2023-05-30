import React from "react";
import style from "./ButtonForm.module.css";

interface ButtonProps {
  inType: "button" | "submit" | "reset",
  inValue: string,
  inColor?: "green" | "red",
  inClick?: () => void,
}

export default function ButtonForm({inType, inValue, inColor = "green", inClick = () => {}}: ButtonProps): JSX.Element {

	return (
		<button type={inType} className={`${style.button} ${style[inColor]}`} onClick={inClick}>{inValue}</button>
	)
}
