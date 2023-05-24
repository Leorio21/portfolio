import React from "react"
import css from "./page.module.css"
import Carousel from "../Components/Carousel/Carousel"

export default function Portfolio(): JSX.Element {
	return (
		<div className={css.container}>
			<Carousel inTitle={true} inDotScroll={true} inButtons={true} inAutoPlay={true} inAutoPlayDelay={2000} />
		</div>
	)
}