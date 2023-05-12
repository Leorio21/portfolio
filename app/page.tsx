import React from "react"
import AnimatedText from "./Components/AnimatedText/AnimatedText"

export default function Home(): JSX.Element {

	return (
		<>
			<AnimatedText inTextStart={"$" + "{name}"} inTextEnd="Jérôme Lefeuvre" />
			<AnimatedText inTextStart={"$" + "{profession}"} inTextEnd="Développeur Web" inStartDelay={500} />
		</>
	)
}
