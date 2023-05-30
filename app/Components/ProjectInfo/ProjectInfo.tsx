import React from "react"
import style from "./ProjectInfo.module.css"
import Image from "next/image";
import { IntProjectData } from "@/app/Intefaces/Interfaces"

interface ProjectInfoProps {
	inProject: IntProjectData,
}

export default function ProjectInfo({ inProject }: ProjectInfoProps): JSX.Element {
	return (
		<article className={style.container} id={inProject.title}>
			<figure className={style.miniature}>
				<Image
					src={inProject.miniature}
					blurDataURL={inProject.miniature}
					alt="Capture d'ecran du projet"
					priority={true}
					style={{ objectFit: "cover" }}
					sizes="25vw"
					fill
				/>
			</figure>
			<h2 className={style.title}>
				{inProject.title}
			</h2>
			<p className={style.description}>
				{inProject.description}
			</p>
			{inProject.code !== "" && <p className={`${style.code} ${style.lien}`}><a href={inProject.code} target="_blank" rel="noreferrer">Voir le code</a></p>}
			{inProject.site !== "" && <p className={`${style.site} ${style.lien}`}><a href={inProject.site} target="_blank" rel="noreferrer">Voir le site</a></p>}
		</article>
	)
}
