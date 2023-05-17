"use client"
import React, { useEffect, useState } from "react";
import { useFetch } from "../../Hooks/Fetch/useFetch";
import css from "./Carousel.module.css";
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon, MinusSmallIcon } from "@heroicons/react/20/solid";

interface CarouselProps {
	inTitle?: boolean;
	inDotScroll?: boolean;
	inButtons?: boolean;
}

interface ProjetsProps {
	miniature: string,
  title: string
}

export default function Carousel({ inTitle = false, inDotScroll = false, inButtons = false}: CarouselProps): JSX.Element {

	const [index, setIndex] = useState(0);
	const [nbProject, setNbProject] = useState(0);

	const { response, error, isLoading } = useFetch<ProjetsProps[]>("./projets.json");

	const nextSlide = (): void => {
		setIndex((current) => {
			if (current === nbProject) {
				return 0;
			}
			return current + 1;
		})
	}

	const previousSlide = (): void => {
		setIndex((current) => {
			if (current === 0) {
				return nbProject;
			}
			return current - 1;
		})
	}

	const goToSlide = (idx: number): void => {
		setIndex(idx);
	}

	useEffect((): void => {
		if (response !== undefined) {
			setNbProject(response.length)
		}
	}, [response])

	if (isLoading) {
		return(<></>)
	}

	if (error !== undefined) {
		return(<></>)
	}

	if (response !== undefined) {
		return (
			<div className={css.container}>
				{inTitle && <div className={`${css.headband} ${css.title}`}>
					{response[index].title}
				</div>}
				<Image 
					src = {`/carousel/${response[index].miniature}`}
					blurDataURL = {`/carousel/${response[index].miniature}`}
					alt = "Capture d'ecran du projet"
					priority = {true}
					style={{objectFit: "cover"}}
					sizes="50vw"
					fill
				/>

				{inDotScroll && <div className={`${css.headband} ${css.dotsScroll}`}>
					{response.map((el, idx) => {
						return <MinusSmallIcon className={idx === index ? `${css.dotScroll} ${css.selected}` : css.dotScroll} key={idx} onClick={() => {goToSlide(idx)}}/>
					})}
				</div>}

				{inButtons && 
				<>
					<ChevronLeftIcon  className={`${css.leftArrow} ${css.arrow}`} onClick={previousSlide}/>
					<ChevronRightIcon className={`${css.rightArrow} ${css.arrow}`} onClick={nextSlide}/>
				</>}
			</div>
		)
	}

	return (
		<></>
	)
}
