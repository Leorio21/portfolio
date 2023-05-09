import React from "react"
import css from "./Button.module.css"

interface ButtonProps {
  inName: string;
  inColor: string;
}

export default function Button({inName, inColor}: ButtonProps): JSX.Element {
	return (
	// <Link href="./...../..../....">
		  <div className={`${css.button} ${css[inColor]}`}>{inName}</div>
	// </Link>
	)
}
