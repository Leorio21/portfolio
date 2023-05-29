"use client"
import React, { useState } from "react";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import style from "./ContactForm.module.css";
import { useNotify } from "@/app/Hooks/Notify/useNotify";
import ButtonForm from "../ButtonForm/ButtonForm";

export default function ContactForm(): JSX.Element {
	const { setNotify, NotifyContainer } = useNotify();
	const [color, setColor] = useState<"success" | "error" | "warning">("success");

	const click = (): void => {
		setColor("error");
		setNotify("Test ok !")
	}

	return (
		<>
			<form className={style.FormContainer}>
				<Input inId="lname" inType="text" inLabel={"Nom"} inGridPosition={"lastName"}	/>
				<Input inId="fname" inType="text" inLabel={"Prénom"} inGridPosition={"firstName"}	/>
				<Input inId="email" inType="email" inLabel={"Em@il"} inGridPosition={"email"}	/>
				<Input inId="tel" inType="tel" inLabel={"Téléphone"} inGridPosition={"tel"}	/>
				<Input inId="sujet" inType="text" inLabel={"Objet"} inGridPosition={"subject"}	/>
				<TextArea inId="message" inLabel={"Message"} inGridPosition={"message"} />
				<div className={style.buttons}>
					<ButtonForm inType="reset" inValue="Réinitialiser" inColor="red" inClick={click} />
					<ButtonForm inType="button" inValue="Envoyer" inColor="green" inClick={click} />
				</div>
			</form>
			<NotifyContainer color={color}></NotifyContainer>
		</>
	)
}
