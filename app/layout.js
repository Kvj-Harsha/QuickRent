import "./globals.css";

export const metadata = {
  title: "QuickRent",
  description: "A platform for renting gadgets like laptops, cameras, and gaming consoles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
