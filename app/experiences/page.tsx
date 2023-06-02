"use CLient"
import React from "react"
import style from "./page.module.css"
import Button from "../Components/Button/Button"

export default function Experiences(): JSX.Element {
	return (
		<div className={style.container}>
			<Button inColor="red" inName="Téléch. CV" inLinkRef="./jerome_lefeuvre_developpeur_web.pdf" />
		</div>
	)
}
