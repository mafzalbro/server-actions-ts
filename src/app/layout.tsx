import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Navbar from "@/components/main/navbar";
// import { MenuBar } from "@/components/main/menubar";
import { NavMenu } from "@/components/main/navmenu";
import { ThemeProvider } from "@/components/main/theme-provider";
import Footer from "@/components/main/footer";


const outfit = localFont({
  src: "./fonts/Outfit.ttf",
  variable: "--font-outfit",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Advance Next JS Practice Project",
  description: "My Advance Next JS Practice Project Description",
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    // <html lang="en" suppressHydrationWarning>
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        
       {/* <Navbar /> */}
       {/* <MenuBar /> */}

       <NavMenu />
       <main className="p-4 md:p-10 py-8 min-h-96 flex flex-col justify-center items-center">
       <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
       </main>

       <Footer />
      </body>
    </html>
  );
}