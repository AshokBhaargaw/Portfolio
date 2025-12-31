import Contact from "@/app/(pages)/contact/Contact";
import { Footer, Header } from "@/Components/ui";
import React from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
