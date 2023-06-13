"use client"
import React, { useEffect, useRef, useState } from "react"
import style from "./NavBar.module.css"
import Button from "../Button/Button"
import { Bars3Icon } from "@heroicons/react/20/solid"

export default function NavBar(): JSX.Element {

	const menuIconRef = useRef<HTMLDivElement>(null);
	const [windowWidth, setWindowWitdh] = useState(window.innerWidth);

	const handleResize = () => {
		setWindowWitdh(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [])

	const setVisible = (): void => {
		if(menuIconRef.current !== null && windowWidth <= 800) {
			if (menuIconRef.current?.classList.contains(style.menu_visible)) {
				menuIconRef.current.classList.remove(style.menu_visible)
			} else {
				menuIconRef.current.classList.add(style.menu_visible)
			}
		}
	}
	return (
		<>
			<Bars3Icon className={style.button_menu} onClick={()=>{setVisible()}}/>
			<div className={style.container} ref={menuIconRef}>
				<Button inName={"Accueil"} inColor={"blue"} inLinkRef="/" inClick={()=>{setVisible()}} />
				<Button inName={"Projets"} inColor={"yellow"} inLinkRef="/projects" inClick={()=>{setVisible()}} />
				<Button inName={"Expériences"} inColor={"purple"} inLinkRef="/experiences" inClick={()=>{setVisible()}} />
				<Button inName={"Contact"} inColor={"green"} inLinkRef="/contact" inClick={()=>{setVisible()}} />
			</div>
		</>
	)
}
