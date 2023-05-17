"use client"
import React, { useEffect, useRef, useState } from "react"

import css from "./AnimatedText.module.css"

interface AnimatedTextProps {
  inTextStart: string,
  inTextEnd: string,
  inStartDelay?: number
}

export default function AnimatedText({inTextStart, inTextEnd, inStartDelay = 0}: AnimatedTextProps): JSX.Element {

	const textRef = useRef<HTMLHeadingElement>(null);

	const [text, setText] = useState("");
	const delay = 150;

	const textLetters = inTextStart;

	const textAnimation = (): void => {
		textLetters.split("").forEach((letter, idx) => {
			setTimeout(() => {
				setText((prev) => prev + letter)
			}, delay * idx)
		})
	}

	useEffect((): () => void => {
		const timer1 = setTimeout(() => {
			textAnimation()
		}, inStartDelay)
		const timer2 = setTimeout(() => {
			textRef.current?.classList.add(css.rotate)
		}, (delay * textLetters.length) + inStartDelay)

		return () => {
			clearTimeout(timer1)
			clearTimeout(timer2)
		}
	}, [inStartDelay, textLetters])

	useEffect((): () => void => {
		const timer = setTimeout(() => {
			setText(inTextEnd)
			textRef.current?.classList.remove(css.rotate)
			textRef.current?.classList.add(css.rotateFR)
		}, delay * textLetters.length + 500 + inStartDelay)
		return () => { clearTimeout(timer); }
	}, [inStartDelay, inTextEnd, textLetters])

	return (
		<>
			<h2 className={css["h-60"]} ref={textRef}>{text}</h2>
		</>
	)
}
