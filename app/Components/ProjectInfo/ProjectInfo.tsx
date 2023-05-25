import React from "react"
import style from "./ProjectInfo.module.css"
import Image from "next/image";
import { type IntProjectData } from "@/app/Intefaces/Interface"

interface ProjectInfoProps {
  project: IntProjectData,
}

export default function ProjectInfo({project}: ProjectInfoProps): JSX.Element {
	return (
		<div className={style.container} id={project.id}>
			<div className={style.miniature}>
				<Image 
					src = {`/carousel/${project.miniature}`}
					blurDataURL = {`/carousel/${project.miniature}`}
					alt = "Capture d'ecran du projet"
					priority = {true}
					style={{objectFit: "cover"}}
					sizes="20vw"
					fill
				/>
			</div>
			<div className={style.title}>
				{project.title}
			</div>
			<div className={style.description}>
				{project.description}
			</div>
		</div>
	)
}
