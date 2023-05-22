import React from "react"
import css from "./Button.module.css"
import Link from "next/link";

interface ButtonProps {
  inName: string;
  inColor: string;
	inLinkRef?: string;
}

export default function Button({inName, inColor, inLinkRef = "/"}: ButtonProps): JSX.Element {
	return (
		<Link href={inLinkRef}>
			<div className={`${css.button} ${css[inColor]}`}>{inName}</div>
		</Link>
	)
}
