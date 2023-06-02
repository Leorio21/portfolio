import React from "react"
import AnimatedText from "./Components/AnimatedText/AnimatedText"
import style from "./page.module.css"

export default function Home(): JSX.Element {
	return (
		<div className={style.container}>
			<AnimatedText inTextStart={"$" + "{name}"} inTextEnd="Jérôme Lefeuvre" />
			<AnimatedText inTextStart={"$" + "{profession}"} inTextEnd="Développeur Web" inStartDelay={500} />
		</div>
	)
}
