import React from "react"
import css from "./NavBar.module.css"
import Button from "../Button/Button"

export default function NavBar(): JSX.Element {
	return (
		<div className={css.container}>
			<Button inName={"Accueil"} inColor={"blue"} inLinkRef="/"/>
			<Button inName={"Projets"} inColor={"yellow"} inLinkRef="/projets"/>
			<Button inName={"Expériences"} inColor={"purple"} inLinkRef="/experiences"/>
			<Button inName={"Contact"} inColor={"green"} inLinkRef="/contact"/>
		</div>
	)
}
