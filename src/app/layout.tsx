// The root layout is a Server Component
// by default and can not be set to a Client Component.
"use client";

import React from "react";

import "./globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en" className={`font-serif`}>
			<body className="min-h-screen h-screen bg-[#EFF1F3] font-mono antialiased">
				<main>{children}</main>
			</body>
		</html>
	);
}
