import './globals.css'

export const metadata = {
  title: 'Youtube Clone',
  description: 'Clone do layout do Youtube',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
