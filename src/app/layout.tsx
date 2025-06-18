import './globals.css';
import Nav from '@/components/header/nav';
import Footer from '@/components/footer/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col p-6 antialiased absolute inset-0 h-full w-full bg-neutral-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]`}
      >
        <Nav />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
