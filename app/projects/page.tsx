"use client"
import React from "react"
import style from "./page.module.css"
import Carousel from "../Components/Carousel/Carousel"
import { PlayIcon } from "@heroicons/react/20/solid"
import { useFetch } from "../Hooks/Fetch/useFetch";
import { IntProjectData } from "../Interfaces/Interfaces";
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

		const listing = response.map((project, idx) => {
			return <ProjectInfo inProject={project} key={`project${idx}`} />
		})

		return (
			<div className={style.container}>
				Cliquez sur l&apos;image pour plus de détails
				<Carousel
					inData={response}
				/>
				<div className={style.listing}>
					{listing}
				</div>
				<div className={style.backToUp}>
					<a href="#">
						<PlayIcon className={style.backToUpIcon} />
					</a>
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