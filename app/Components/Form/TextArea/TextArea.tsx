import React, { useRef } from "react"
import style from "./TextArea.module.css"

interface TextAreaProps {
  id: string,
	label: string,
	gridPosition: string,
}

export default function TextArea({id, label, gridPosition}: TextAreaProps): JSX.Element {

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
		<label htmlFor={id} className={style.textAreaContainer} style={{gridArea: `${gridPosition}`}}>
			<p className={`${style.label} ${style.labelMove}`} ref={inputRef}>{label}</p>
			<textarea
				className={style.area}
				id={id}
				onFocus={inputActive}
				onClick={inputActive}
				onBlur={inputInactive}
				ref={testText1}
			>
			</textarea>
		</label>
	)
}
