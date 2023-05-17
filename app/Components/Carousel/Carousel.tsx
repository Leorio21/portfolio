"use client"
import React, { useEffect, useState } from "react";
import css from "./Carousel.module.css";
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon, MinusSmallIcon } from "@heroicons/react/20/solid";

interface CarouselProps {
	inTitle?: boolean;
	inDotScroll?: boolean;
	inButtons?: boolean;
}

export default function Carousel({ inTitle = false, inDotScroll = false, inButtons = false}: CarouselProps): JSX.Element {

	const [index, setIndex] = useState(0);
	const [imgBdd, setImgBdd] = useState<string[]>([]);

	const nextSlide = (): void => {
		setIndex((prev) => {
			if (prev === imgBdd.length - 1) {
				return 0;
			}
			return prev + 1;
		})
	}

	const previousSlide = (): void => {
		setIndex((prev) => {
			if (prev === 0) {
				return imgBdd.length - 1;
			}
			return prev - 1;
		})
	}

	const goToSlide = (idx: number): void => {
		setIndex(idx);
	}

	useEffect(() => {

		fetch("api/carousel")
			.then(async (res) => await res.json())
			.then((data) => {setImgBdd(() => [...data.data])})
			.catch((error) => {console.log("error :", error)})

	}, [])

	if (imgBdd[0] === undefined) {
		return (<></>)
	}

	return (
		<div className={css.container}>
			{inTitle && <div className={`${css.headband} ${css.title}`}>
				{imgBdd[index].split(".")[0]}
			</div>}
			<Image 
				src = {`/carousel/${imgBdd[index]}`}
				blurDataURL = {`/carousel/${imgBdd[index]}`}
				alt = "Capture d'ecran du projet"
				priority = {true}
				style={{objectFit: "cover"}}
				sizes="50vw"
				fill
			/>

			{inDotScroll && <div className={`${css.headband} ${css.dotsScroll}`}>
				{imgBdd.map((slide, idx) => {
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
