import React from "react";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import style from "./ContactForm.module.css";

export default function ContactForm(): JSX.Element {
	return (
		<form className={style.FormContainer}>
			<Input inId="lname" inType="text" inLabel={"Nom"} inGridPosition={"lastName"}	/>
			<Input inId="fname" inType="text" inLabel={"Prénom"} inGridPosition={"firstName"}	/>
			<Input inId="email" inType="email" inLabel={"Em@il"} inGridPosition={"email"}	/>
			<Input inId="sujet" inType="text" inLabel={"Sujet"} inGridPosition={"subject"}	/>
			<TextArea inId="message" inLabel={"Message"} inGridPosition={"message"} />
		</form>
	)
}
