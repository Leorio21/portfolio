import React from "react";
import { Lobster, Courgette } from "next/font/google";
import "./globals.css";
import css from "./layout.module.css";

import NavBar from "./Components/NavBar/NavBar";

const lobster = Lobster({
	weight: "400",
	subsets: ["latin"],
	variable: "--font--lobster",
});

const courgette = Courgette({
	weight: "400",
	subsets: ["latin"],
	variable: "--font--courgette",
})

export const metadata = {
	title: "Jérôme LEFEUVRE - dev Web",
	description: "Portfolio créé avec NextJs, TS",
}

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}): JSX.Element {
	return (
		<html lang="fr" className={`${lobster.variable} ${courgette.variable}`}>
			<body>
				<div className={css.container}>
					<NavBar />
					<div className={css.content}>
						{children}
					</div>
				</div>
			</body>
		</html>
	)
}
