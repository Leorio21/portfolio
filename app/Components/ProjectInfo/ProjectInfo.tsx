import React from "react"
import style from "./ProjectInfo.module.css"
import Image from "next/image";
import { type IntProjectData } from "@/app/Intefaces/Interface"

interface ProjectInfoProps {
  inPproject: IntProjectData,
}

export default function ProjectInfo({inPproject}: ProjectInfoProps): JSX.Element {
	return (
		<div className={style.container} id={inPproject.id}>
			<div className={style.miniature}>
				<Image 
					src = {`/carousel/${inPproject.miniature}`}
					blurDataURL = {`/carousel/${inPproject.miniature}`}
					alt = "Capture d'ecran du projet"
					priority = {true}
					style={{objectFit: "cover"}}
					sizes="20vw"
					fill
				/>
			</div>
			<div className={style.title}>
				{inPproject.title}
			</div>
			<div className={style.description}>
				{inPproject.description}
			</div>
		</div>
	)
}
