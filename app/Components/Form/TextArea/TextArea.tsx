import React, { useRef } from "react"
import style from "./TextArea.module.css"
import { IFormValues } from "@/app/Intefaces/Interfaces";
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from "react-hook-form";

interface TextAreaProps {
  inId: string,
	inLabel: string,
	inGridPosition: string,
	inError?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
	inRegister: UseFormRegister<IFormValues>,
  inRequired: boolean,
}

export default function TextArea({inId, inLabel, inGridPosition}: TextAreaProps): JSX.Element {

	const inputRef = useRef<HTMLParagraphElement>(null);
	const testText1 = useRef<HTMLTextAreaElement>(null)

	const inputActive = (): void => {
		inputRef.current?.classList.remove(style.labelMove)
	}

	const inputInactive = (): void => {
		if (testText1.current?.value === "") {
			inputRef.current?.classList.add(style.labelMove)
		}
	}
	
	return (
		<label htmlFor={inId} className={style.textAreaContainer} style={{gridArea: `${inGridPosition}`}}>
			<p className={`${style.label} ${style.labelMove}`} ref={inputRef}>{inLabel}</p>
			<textarea
				className={style.area}
				id={inId}
				onFocus={inputActive}
				onClick={inputActive}
				onBlur={inputInactive}
				ref={testText1}
			>
			</textarea>
		</label>
	)
}
