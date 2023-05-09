import React from "react"
import css from "./NavBar.module.css"
import Button from "../Button/Button"

export default function NavBar(): JSX.Element {
	return (
		<div className={css.container}>
			<Button inName={"Accueil"} inColor={"red"} />
			<Button inName={"Portfolio"} inColor={"green"} />
			<Button inName={"Expérience"} inColor={"red"} />
			<Button inName={"Contact"} inColor={"red"} />
		</div>
	)
}
