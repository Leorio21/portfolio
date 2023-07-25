"use client"
import React, { useEffect, useState } from "react";
import css from "./Carousel.module.css";
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon, MinusSmallIcon } from "@heroicons/react/20/solid";
interface IntInData {
	miniature: string,
	title: string,
	[propName: string]: any,
}
interface CarouselProps {
	inData: IntInData[],
	inTitle?: boolean,
	inDotScroll?: boolean,
	inButtons?: boolean,
	inAutoPlay?: boolean,
	inAutoPlayDelay?: number,
}

/* TODO :
	- Scroll au doigt.
	- Refactoring
*/

export default function Carousel({ inData, inTitle = false, inDotScroll = true, inButtons = true, inAutoPlay = true, inAutoPlayDelay = 3000}: CarouselProps): JSX.Element {

	const [index, setIndex] = useState(0);
	const [nextIdx, setNextIdx] = useState(0);
	const [prevIdx, setPrevIdx] = useState(0);
	const [nbProject, setNbProject] = useState(0);
	const animationDelay = 500;

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
		setNbProject(inData.length)
		setIndex(0);
	}, [inData])

	return (
		<div className={css.container}>
			<div className={css.carousel}>
				<div id="imagesContainer" className={css.images}>
					<figure className={css.image}>
						<Image 
							src = {inData[prevIdx].miniature}
							blurDataURL = {inData[prevIdx].miniature}
							alt = "Capture d'ecran du projet"
							priority = {true}
							style={{objectFit: "contain"}}
							sizes="50vw"
							fill
						/>
					</figure>
					<figure className={css.image}>
						<a href={`#${inData[index].title}`}>
							<Image 
								src = {inData[index].miniature}
								blurDataURL = {inData[index].miniature}
								alt = "Capture d'ecran du projet"
								priority = {true}
								style={{objectFit: "contain"}}
								sizes="50vw"
								fill
							/>
						</a>
					</figure>
					<figure className={css.image}>
						<Image 
							src = {inData[nextIdx].miniature}
							blurDataURL = {inData[nextIdx].miniature}
							alt = "Capture d'ecran du projet"
							priority = {true}
							style={{objectFit: "contain"}}
							sizes="50vw"
							fill
						/>
					</figure>
				</div>
				{inDotScroll && <div className={`${css.headband} ${css.dotsScroll}`}>
					{inData.map((el, idx) => {
						return <MinusSmallIcon className={idx === index ? `${css.dotScroll} ${css.selected}` : css.dotScroll} key={idx} onClick={() => {goToSlide(idx)}}/>
					})}
				</div>}
				{inButtons && 
					<>
						<ChevronLeftIcon  className={`${css.leftArrow} ${css.arrow}`} onClick={previousSlide}/>
						<ChevronRightIcon className={`${css.rightArrow} ${css.arrow}`} onClick={nextSlide}/>
					</>}
			</div>
			{inTitle && <h1 className={css.title}>
				{inData[index].title}
			</h1>}
		</div>
	)

}
