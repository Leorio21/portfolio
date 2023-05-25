"use client"
import React from "react"
import style from "./page.module.css"
import Carousel from "../Components/Carousel/Carousel"
import { useFetch } from "../Hooks/Fetch/useFetch";
import { type IntProjectData } from "../Intefaces/Interface";
import ProjectInfo from "../Components/ProjectInfo/ProjectInfo";

export default function Portfolio(): JSX.Element {

	const { response, error } = useFetch<IntProjectData[]>("./projets.json");
	
	if (error !== undefined) {
		return (
			<div className={style.container}>
				Une erreur est survenue : {error}
			</div>
		)
	}

	if (response !== undefined) {

		const listing = response.map((project) => {
			return <ProjectInfo inPproject={project} key={project.id} />
		})

		return (
			<div className={style.container}>
				Cliquez sur l&apos;image pour plus de détails
				<Carousel inData={response} inTitle={true} inDotScroll={true} inButtons={true} inAutoPlay={true} inAutoPlayDelay={2000} />
				<div className={style.listing}>
					{listing}
				</div>
			</div>
		)
	}

	return (
		<div className={style.container}>
			Loading...
		</div>
	)
}