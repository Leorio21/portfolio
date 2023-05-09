import './globals.css'

export const metadata = {
  title: 'Jérôme LEFEUVRE - dev Web',
  description: 'Portfolio créer avec NextJs, TS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
