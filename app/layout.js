import '../styles/global.css'
export const metadata = {
  title: 'Metaverse website'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
      <body>{children}</body>
    </html>
  )
}
