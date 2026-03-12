import "./globals.css";

export const metadata = {
  title: "Free Unused G-Pay Reward Codes | Updated Daily",
  description: "Get free Zomato, Swiggy, and Ajio discount codes from my unused Google Pay scratch cards. No login required, first come first served!",
  keywords: [
    "Google Pay rewards", 
    "free scratch card codes", 
    "unused Zomato coupons", 
    "free Swiggy promo codes", 
    "GPay reward sharing", 
    "free discount codes India"
  ],
  authors: [{ name: "Ayushmaan" }], // Put your name here!
  verification: {
    // 💡 GET THIS FROM SEARCH CONSOLE (The 'content' value in the HTML tag)
    google: "poDimLdsP78JTmH9b2H9DzEXC9bWkVJG3LtNqLdY_4s", 
  },
  category: 'ecommerce',
  openGraph: {
    title: "Free Unused G-Pay Reward Codes",
    description: "I'm giving away my unused Google Pay rewards for free. Grab them before they're gone!",
    url: "https://gpay-rewards-frontend.vercel.app",
    siteName: "GPay Rewards India",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

{/* <meta name="google-site-verification" content="poDimLdsP78JTmH9b2H9DzEXC9bWkVJG3LtNqLdY_4s" /> */}