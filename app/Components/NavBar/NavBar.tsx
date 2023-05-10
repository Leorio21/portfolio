import React from "react"
import css from "./NavBar.module.css"
import Button from "../Button/Button"

export default function NavBar(): JSX.Element {
	return (
		<div className={css.container}>
			<Button inName={"Accueil"} inColor={"blue"} />
			<Button inName={"Portfolio"} inColor={"yellow"} />
			<Button inName={"Expérience"} inColor={"purple"} />
			<Button inName={"Contact"} inColor={"green"} />
		</div>
	)
}
