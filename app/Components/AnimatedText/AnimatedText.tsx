"use client"
import React, { useEffect, useRef, useState } from "react"

import styles from "./AnimatedText.module.css"

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

	useEffect(() => {
		const timer1 = setTimeout(() => {
			textAnimation()
		}, inStartDelay)
		const timer2 = setTimeout(() => {
			textRef.current?.classList.add("rotate")
		}, (delay * textLetters.length) + inStartDelay)

		return () => {
			clearTimeout(timer1)
			clearTimeout(timer2)
		}
	}, [inStartDelay, textLetters])

	useEffect(() => {
		const timer = setTimeout(() => {
			setText(inTextEnd)
			textRef.current?.classList.add("rotateFR")
			textRef.current?.classList.remove("rotate")
		}, delay * textLetters.length + 500 + inStartDelay)
		return () => { clearTimeout(timer); }
	}, [inStartDelay, inTextEnd, textLetters])

	return (
		<>
			<h2 className={styles["h-40"]} ref={textRef}>{text}</h2>
		</>
	)
}
