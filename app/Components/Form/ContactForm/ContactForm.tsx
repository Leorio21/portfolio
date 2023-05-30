"use client"
import React, { useState } from "react";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import style from "./ContactForm.module.css";
import { useNotify } from "@/app/Hooks/Notify/useNotify";
import ButtonForm from "../ButtonForm/ButtonForm";
import { IFormValues } from "@/app/Intefaces/Interfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schemaValidation = yup.object().shape({
	firstName: yup.string()
		.required("Veuillez saisir votre prénom")	
		.matches( /^[a-zÀ-ÖØ-öø-ÿ -]+$/i, "Présence de caractères non authorisés"),
	lastName: yup.string()
		.required("Veuillez saisir votre nom")	
		.matches( /^[a-z -]+$/i, "Présence de caractères non authorisés")
});

export default function ContactForm(): JSX.Element {
	
	const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<IFormValues>({resolver: yupResolver(schemaValidation)});

	const { setNotify, NotifyContainer } = useNotify();
	const [color, setColor] = useState<"success" | "error" | "warning">("success");

	const onFormSubmit = (data: IFormValues): boolean => {
		console.log(data);
		setColor("success");
		setNotify(data.lastName);

		return false;
	}

	return (
		<>
			<form className={style.FormContainer}>
				<Input
					inId="lastName"
					inType="text"
					inLabel="Nom"
					inGridPosition="lastName"
					inError={errors.lastName?.message}
					inRequired={true}
					inRegister={register}
					inWatch={watch}
				/>
				<Input
					inId="firstName"
					inType="text"
					inLabel={"Prénom"}
					inGridPosition={"firstName"}
					inError={errors.firstName?.message}
					inRequired={true}
					inRegister={register}
					inWatch={watch}
				/>
				<Input
					inId="email"
					inType="email"
					inLabel={"Em@il"}
					inGridPosition={"email"}
					inError={errors.email?.message}
					inRequired={true}
					inRegister={register}
					inWatch={watch}
				/>
				<Input
					inId="phone"
					inType="tel"
					inLabel={"Téléphone"}
					inGridPosition={"tel"}
					inError={errors.phone?.message}
					inRequired={true}
					inRegister={register}
					inWatch={watch}
				/>
				<Input
					inId="subject"
					inType="text"
					inLabel={"Objet"}
					inGridPosition={"subject"}
					inError={errors.subject?.message}
					inRequired={true}
					inRegister={register}
					inWatch={watch}
				/>
				<TextArea
					inId="message"
					inLabel={"Message"}
					inGridPosition={"message"}
					inError={errors.message?.message}
					inRequired={true}
					inRegister={register}
				/>
				<div className={style.buttons}>
					<ButtonForm
						inType="button"
						inValue="Réinitialiser"
						inColor="red"
						inClick={()=>{reset()}}
					/>
					<ButtonForm
						inType="button"
						inValue="Envoyer"
						inColor="green"
						inClick={handleSubmit(onFormSubmit)}
					/>
				</div>
			</form>
			<NotifyContainer color={color}></NotifyContainer>
		</>
	)
}
