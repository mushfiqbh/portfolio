import Header from "@/components/sub/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "../context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Mushfiq R. (Personal Portfolio) - Full Stack Developer",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
