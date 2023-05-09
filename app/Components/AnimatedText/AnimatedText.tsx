"use client"
import { useEffect, useRef, useState } from 'react'

import styles from "./AnimatedText.module.css"

interface AnimatedTextProps {
  in_textStart: string,
  in_textEnd: string,
  in_startDelay?: number
}

export default function AnimatedText({in_textStart, in_textEnd, in_startDelay = 0}: AnimatedTextProps) {

  const textRef = useRef<HTMLHeadingElement>(null);

  const [text, setText] = useState("");
  const delay = 150;

  const textLetters = in_textStart;

  const textAnimation = () => {
    textLetters.split("").forEach((letter, idx) => {
      setTimeout(() => {
        setText((prev) => prev + letter)
      }, delay * idx)
    })
  }

  useEffect(() => {
    const timer_1 = setTimeout(() => {
      textAnimation()
    }, in_startDelay)
    const timer_2 = setTimeout(() => {
      textRef.current!.classList.add("rotate")
    }, (delay * textLetters.length) + in_startDelay)

    return () => {
      clearTimeout(timer_1)
      clearTimeout(timer_2)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [in_startDelay, textLetters])

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(in_textEnd)
      textRef.current!.classList.add("rotateFR")
      textRef.current!.classList.remove("rotate")
    }, delay * textLetters.length + 500 + in_startDelay)
    return () => clearTimeout(timer)
  }, [in_startDelay, in_textEnd, textLetters])

  return (
    <>
      <h2 className={styles["h-40"]} ref={textRef}>{text}</h2>
    </>
  )
}
