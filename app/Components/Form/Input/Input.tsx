import React, { useRef } from "react"
import style from "./Input.module.css"

interface InputProps {
	id: string,
	type: string,
	label: string,
}

export default function Input({id, type, label}: InputProps): JSX.Element {

	const inputRef = useRef<HTMLParagraphElement>(null);
	const testText1 = useRef<HTMLInputElement>(null)

	const inputActive = (): void => {
		inputRef.current?.classList.remove(style.labelMove)
	}

	const inputInactive = (): void => {
		if (testText1.current?.value === "") {
			inputRef.current?.classList.add(style.labelMove)
		}
	}


	return (
		<label htmlFor={id} className={style.inputContainer}>
			<p className={`${style.label} ${style.labelMove}`} ref={inputRef}>{label}</p>
			<input
				id={id}
				className={style.input}
				type={type}
				onFocus={inputActive}
				onClick={inputActive}
				onBlur={inputInactive}
				ref={testText1}
			/>
		</label>
	)
}
