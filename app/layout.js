import "./globals.css";
import Navbar from "./components/Navbar";
import page from "./page.module.css";

export const metadata = {
  title: "Fitness Daily",
  description: "Created with nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <h5 className={page.h5}>Developled By: Southwane</h5>
      </body>
    </html>
  );
}
