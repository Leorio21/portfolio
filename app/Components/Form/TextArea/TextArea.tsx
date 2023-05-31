import React, { useEffect, useRef, useState } from "react"
import style from "./TextArea.module.css"
import { IFormValues } from "@/app/Interfaces/Interfaces";
import { FieldError, FieldErrorsImpl, Merge, Path, UseFormRegister, UseFormWatch } from "react-hook-form";

interface TextAreaProps {
  inId: Path<IFormValues>,
	inLabel: string,
	inGridPosition: string,
	inError?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
	inRegister: UseFormRegister<IFormValues>,
  inRequired: boolean,
	inWatch: UseFormWatch<IFormValues>,
}

export default function TextArea({inId, inLabel, inGridPosition, inError, inRegister, inRequired, inWatch}: TextAreaProps): JSX.Element {

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
		<label htmlFor={inId} className={style.textAreaContainer} style={{gridArea: `${inGridPosition}`}}>
			<p className={`${style.label} ${style.labelMove}`} ref={LabelRef}>{inLabel}</p>
			<textarea
				className={style.area}
				id={inId}
				onFocus={inputActive}
				onClick={inputActive}
				{...inRegister(inId, {onBlur: () => {onBlurHandler()}})}
			>
			</textarea>
			<span className={style.error}>{inError?.toString()}</span>
		</label>
	)
}
