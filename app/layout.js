import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import Footer from '/app/_components/Footer';

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
            {/* You can place content for when the user is signed out here */}
          </SignedOut>
          <SignedIn>
            {/* <UserButton showName/> */}
            {/* This could be for displaying user info or login/logout */}
          </SignedIn>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
