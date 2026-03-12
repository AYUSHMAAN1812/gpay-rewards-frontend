import "./globals.css"; // 👈 This makes Tailwind work on the live site
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
  authors: [{ name: "Your Name/Brand" }],
  openGraph: {
    title: "Free Unused G-Pay Reward Codes",
    description: "I'm giving away my unused Google Pay rewards for free. Grab them before they're gone!",
    type: "website",
    // url: "https://your-live-website-url.com", // Update this after you deploy
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
      <body>{children}</body>
    </html>
  );
}