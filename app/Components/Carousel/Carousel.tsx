"use client"
import React, { useEffect, useState } from "react";
import { useFetch } from "../../Hooks/Fetch/useFetch";
import css from "./Carousel.module.css";
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon, MinusSmallIcon } from "@heroicons/react/20/solid";

interface CarouselProps {
	inTitle?: boolean,
	inDotScroll?: boolean,
	inButtons?: boolean,
	inAutoPlay?: boolean,
	inAutoPlayDelay?: number,
}

interface ProjetsProps {
	miniature: string,
  title: string,
	description: string,
}

/* TODO :
	- AutoPlay.
	- Scroll au doigt.
*/

export default function Carousel({ inTitle = false, inDotScroll = false, inButtons = false, inAutoPlay = false, inAutoPlayDelay = 1000}: CarouselProps): JSX.Element {

	const [index, setIndex] = useState(0);
	const [nextIdx, setNextIdx] = useState(0);
	const [prevIdx, setPrevIdx] = useState(0);
	const [nbProject, setNbProject] = useState(0);
	const animationDelay = 300;

	const { response, error, isLoading } = useFetch<ProjetsProps[]>("./projets.json");

	const nextSlide = (): void => {
		document.getElementById("imagesContainer")?.classList.add(css.animFF);
		setTimeout(() => {
			setIndex((current) => {
				if (current === nbProject - 1) {
					return 0;
				}
				return current + 1;
			})
		}, animationDelay);
		setTimeout(() => {
			document.getElementById("imagesContainer")?.classList.remove(css.animFF);
		}, animationDelay + 50)
	}

	const previousSlide = (): void => {
		document.getElementById("imagesContainer")?.classList.add(css.animFR);
		setTimeout(() => {
			setIndex((current) => {
				if (current === 0) {
					return nbProject - 1;
				}
				return current - 1;
			})
		}, animationDelay);
		setTimeout(() => {
			document.getElementById("imagesContainer")?.classList.remove(css.animFR);
		}, animationDelay + 50)
	}

	const goToSlide = (idx: number): void => {
		setIndex(idx);
	}

	useEffect((): () => void => {
		let timer1: NodeJS.Timer;
		let timer2: NodeJS.Timer;
		if(nbProject !== 0) {
			timer1 = setTimeout(() => {
				setPrevIdx(() => {
					if (index - 1 < 0) {
						return nbProject - 1;
					}
					return index - 1;
				})
				setNextIdx(() => {
					if (index + 1 > nbProject - 1) {
						return 0;
					}
					return index + 1;
				})
			}, 50)
			if (inAutoPlay) {
				timer2 = setTimeout(() => {
					nextSlide();
				}, inAutoPlayDelay)
			}
		}
		return (() => {
			clearTimeout(timer1)
			clearTimeout(timer2)
		})
	}, [index, nbProject])

	useEffect((): void => {
		if (response !== undefined) {
			setNbProject(response.length)
			setIndex(0);
		}
	}, [response])

	if (isLoading) {
		return(<></>);
	}

	if (error !== undefined) {
		return(<></>);
	}

	if (response !== undefined) {
		return (
			<div className={css.container}>
				<div className={css.carousel}>
					<div id="imagesContainer" className={css.images}>
						<div className={css.image}>
							<Image 
								src = {`/carousel/${response[prevIdx].miniature}`}
								blurDataURL = {`/carousel/${response[prevIdx].miniature}`}
								alt = "Capture d'ecran du projet"
								priority = {true}
								style={{objectFit: "cover"}}
								sizes="50vw"
								fill
							/>
						</div>
						<div className={css.image}>
							<Image 
								src = {`/carousel/${response[index].miniature}`}
								blurDataURL = {`/carousel/${response[index].miniature}`}
								alt = "Capture d'ecran du projet"
								priority = {true}
								style={{objectFit: "cover"}}
								sizes="50vw"
								fill
							/>
						</div>
						<div className={css.image}>
							<Image 
								src = {`/carousel/${response[nextIdx].miniature}`}
								blurDataURL = {`/carousel/${response[nextIdx].miniature}`}
								alt = "Capture d'ecran du projet"
								priority = {true}
								style={{objectFit: "cover"}}
								sizes="50vw"
								fill
							/>
						</div>
					</div>
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
				{inTitle && <div className={css.title}>
					{response[index].title}
				</div>}
			</div>
		)
	}

	return (
		<></>
	)
}
