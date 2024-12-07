// The root layout is a Server Component
// by default and can not be set to a Client Component.

"use client";

import React from "react";

import "./globals.css";

import {Poppins} from "next/font/google";

// The font used in the design appears to be Sans Serif font and poppins - https://dub.sh/7LKZLCv

const poppins = Poppins({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-poppins",
	display: "swap",
});

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en" className={`${poppins.variable} ${poppins.variable}`}>
			<body className="min-h-screen h-screen bg-[#EFF1F3] font-mono antialiased">
				<main>{children}</main>
			</body>
		</html>
	);
}
