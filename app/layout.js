import Header from "@/components/sub/header";
import Footer from "@/components/sub/footer";
import { ThemeProvider } from "../context/ThemeContext";
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
        </ThemeProvider>
      </body>
    </html>
  );
}
