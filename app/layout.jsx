import "./ui/globals.css";

export const metadata = {
  title: "Evo",
  description: "Your Comprehensive Learning Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
