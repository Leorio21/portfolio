import React from "react"
// import Image from 'next/image'
import styles from "./page.module.css"
import AnimatedText from "./Components/AnimatedText/AnimatedText"

export default function Home(): JSX.Element {

	return (
		<div className={styles.container}>
			<AnimatedText inTextStart={"$" + "{name}"} inTextEnd="Jérôme LEFEUVRE" />
			<AnimatedText inTextStart={"$" + "{profession}"} inTextEnd="Développeur Web" inStartDelay={500} />
		</div>
	)
}
