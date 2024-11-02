import localFont from "next/font/local";
import "./globals.css";

const plusJakartaSans = localFont({
  src: [
    {
      path: "../../public/fonts/PlusJakartaSans-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlusJakartaSans-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-plus-jakarta-sans",
});

export const metadata = {
  title: "Frontend Mentor | Mortgage repayment calculator",
  description: "This mortgage calculator is an excellent project for practicing working with forms, client-side validation, and updating the DOM. Remember to focus on accessibility, too!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} font-sans text-base bg-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
