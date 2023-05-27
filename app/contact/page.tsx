"use client"
import React from "react"
import Input from "../Components/Form/Input/Input"
import TextArea from "../Components/Form/TextArea/TextArea"

export default function Contact(): JSX.Element {
	
	

	return (
		<>
			<h1>----- Contactez moi -----</h1><span>Ptitlue@gmail.com</span>
			Formulaire non fonctionnel pour le moment
			<Input id="lname" type="text" label={"Nom"}	/>
			<Input id="fname" type="text" label={"Prénom"}	/>
			<Input id="email" type="email" label={"Em@il"}	/>
			<Input id="sujet" type="text" label={"Sujet"}	/>
			<TextArea id="message" label={"Message"}	/>
		</>
	)
}
