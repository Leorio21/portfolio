import React from "react"
import { Lobster } from "next/font/google"
import "./globals.css"
import css from "./layout.module.css"

import NavBar from "./Components/NavBar/NavBar"

const lobster = Lobster({
	weight: "400",
	subsets: ["latin"]
})

export const metadata = {
	title: "Jérôme LEFEUVRE - dev Web",
	description: "Portfolio créer avec NextJs, TS",
}

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}): JSX.Element {
	return (
		<html lang="fr" className={lobster.className}>
			<body>
				<div className={css.container}>
					<NavBar />
					<p>----- Site en construction -----</p>
					<div className={css.content}>
						{children}
					</div>
				</div>
			</body>
		</html>
	)
}
