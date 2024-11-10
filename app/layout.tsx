
import Nav from "./components/navbar";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Nav/>
        {children}
      </body>
    </html>
  );
}
