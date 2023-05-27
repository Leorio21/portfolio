import React from "react";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import style from "./ContactForm.module.css";

export default function ContactForm(): JSX.Element {
	return (
		<form className={style.FormContainer}>
			<Input id="lname" type="text" label={"Nom"} gridPosition={"lastName"}	/>
			<Input id="fname" type="text" label={"Prénom"} gridPosition={"firstName"}	/>
			<Input id="email" type="email" label={"Em@il"} gridPosition={"email"}	/>
			<Input id="sujet" type="text" label={"Sujet"} gridPosition={"subject"}	/>
			<TextArea id="message" label={"Message"} gridPosition={"message"} />
		</form>
	)
}
