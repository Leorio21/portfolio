import React from "react"
// import Image from 'next/image'
import css from "./page.module.css"
import AnimatedText from "./Components/AnimatedText/AnimatedText"
import NavBar from "./Components/NavBar/NavBar"

export default function Home(): JSX.Element {

	return (
		<>
			<div className={css.container}>
				<div className={css.presentation}>
					<p>----- Site en construction -----</p>
					<AnimatedText inTextStart={"$" + "{name}"} inTextEnd="Jérôme Lefeuvre" />
					<AnimatedText inTextStart={"$" + "{profession}"} inTextEnd="Développeur Web" inStartDelay={500} />
				</div>
				<NavBar />
			</div>
		</>
	)
}
