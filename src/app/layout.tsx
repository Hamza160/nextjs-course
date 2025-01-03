import {Metadata} from 'next';
import "./global.css";
export const metadata: Metadata = {
  title: {
    // absolute:"", it will ignore the parent template
    default:"NextJs Turorial - Codevolution", // fallback title for children who doesn't have a title
    template:"%s | Codevolution" // For adding a Preix
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{
          backgroundColor:"lightblue",
          padding:"1rem"
        }}>
          <p>Header</p>
        </header>
        <main>{children}</main>
        <footer style={{
          backgroundColor:"ghostwhite",
          padding:"1rem"
        }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  )
}
