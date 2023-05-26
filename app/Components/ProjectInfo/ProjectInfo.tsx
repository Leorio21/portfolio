import React from "react"
import style from "./ProjectInfo.module.css"
import Image from "next/image";
import { type IntProjectData } from "@/app/Intefaces/Interface"

interface ProjectInfoProps {
  inPproject: IntProjectData,
}

export default function ProjectInfo({inPproject}: ProjectInfoProps): JSX.Element {
	return (
		<article className={style.container} id={inPproject.title}>
			<figure className={style.miniature}>
				<Image 
					src = {`/carousel/${inPproject.miniature}`}
					blurDataURL = {`/carousel/${inPproject.miniature}`}
					alt = "Capture d'ecran du projet"
					priority = {true}
					style={{objectFit: "cover"}}
					sizes="25vw"
					fill
				/>
			</figure>
			<h2 className={style.title}>
				{inPproject.title}
			</h2>
			<p className={style.description}>
				{inPproject.description}
			</p>
			{inPproject.code !== "" && <p className={`${style.code} ${style.lien}`}><a href={inPproject.code} target="_blank" rel="noreferrer">Voir le code</a></p>}
			{inPproject.site !== "" && <p className={`${style.site} ${style.lien}`}><a href={inPproject.site} target="_blank" rel="noreferrer">Voir le site</a></p>}
		</article>
	)
}
