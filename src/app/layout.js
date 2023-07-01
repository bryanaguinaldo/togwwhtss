import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Stop Game | That One Game Where We Have To Say Stop",
    description:
        "Stop Game: Hey Filipinos! Remember that one game we used to play on paper where we draw stuff like head shapes, hairs, eyes, and others? The one where we'd point at those drawings back and forth and where we say stop is the one we'll be drawn as? This is a virtual version of that game!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
