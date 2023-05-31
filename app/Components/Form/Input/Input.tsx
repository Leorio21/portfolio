import React, { useEffect, useRef, useState } from "react"
import style from "./Input.module.css"
import { IFormValues } from "@/app/Interfaces/Interfaces";
import { FieldError, FieldErrorsImpl, Merge, Path, UseFormRegister, UseFormWatch } from "react-hook-form";

interface InputProps {
	inId: Path<IFormValues>,
	inType: string,
	inLabel: string,
	inGridPosition: string,
	inError?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined,
	inRegister: UseFormRegister<IFormValues>,
  inRequired: boolean,
	inWatch: UseFormWatch<IFormValues>,
}

export default function Input({inId, inType, inLabel, inGridPosition, inError, inRegister, inWatch}: InputProps): JSX.Element {

	const LabelRef = useRef<HTMLParagraphElement>(null);
	const inputData = inWatch(inId);

	const [isFocused, setIsFocused] = useState(false);

	const inputActive = (): void => {
		setIsFocused(true);
		LabelRef.current?.classList.remove(style.labelMove)
	}

	const onBlurHandler = (): void => {
		setIsFocused(false)
		inputInactive();
	}

	const inputInactive = (): void => {
		if (inputData === "" || inputData === undefined) {
			LabelRef.current?.classList.add(style.labelMove)
		} else {
			LabelRef.current?.classList.remove(style.labelMove)
		}
	}

	useEffect(()=>{
		if (!isFocused) {
			inputInactive();
		}
	}, [inputData])
	
	return (
		<label htmlFor={inId} className={style.inputContainer} style={{gridArea: `${inGridPosition}`}}>
			<p className={`${style.label} ${style.labelMove}`} ref={LabelRef}>{inLabel}</p>
			<input
				id={inId}
				className={style.input}
				type={inType}
				onFocus={inputActive}
				onClick={inputActive}
				{...inRegister(inId, {onBlur: () => {onBlurHandler()}})}
			/>
			<span className={style.error}>{inError?.toString()}</span>
		</label>
	)
}
