import React from "react"
import { Lobster } from "next/font/google"
import "./globals.css"

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
		<html lang="fr">
			<body className={lobster.className}>{children}</body>
		</html>
	)
}
