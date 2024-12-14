import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";

export const metadata = {
  title: "QuickRent",
  description: "A platform for renting gadgets like laptops, cameras, and gaming consoles.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
      <SignedOut> 
        </SignedOut>
        <SignedIn>
          {/* <UserButton showName/> */}
        </SignedIn>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}