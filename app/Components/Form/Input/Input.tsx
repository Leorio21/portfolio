import React, { useRef } from "react"
import style from "./Input.module.css"

interface InputProps {
	inId: string,
	inType: string,
	inLabel: string,
	inGridPosition: string,
}

export default function Input({inId, inType, inLabel, inGridPosition}: InputProps): JSX.Element {

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
		<label htmlFor={inId} className={style.inputContainer} style={{gridArea: `${inGridPosition}`}}>
			<p className={`${style.label} ${style.labelMove}`} ref={inputRef}>{inLabel}</p>
			<input
				id={inId}
				className={style.input}
				type={inType}
				onFocus={inputActive}
				onClick={inputActive}
				onBlur={inputInactive}
				ref={testText1}
			/>
		</label>
	)
}
