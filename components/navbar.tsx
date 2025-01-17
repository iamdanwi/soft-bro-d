'use client';

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";
import { Beau_Rivage, Poppins } from "next/font/google";
import { scrollToSection } from "@/components/scroll-to-section";
import Link from "next/link";
// import Image from "next/image";

const navItems = [
    { title: "Home", id: "home" },
    { title: "About Us", id: "about" },
    { title: "Our Services", id: "services" },
    { title: "Portfolio", id: "portfolio" },
];


const monsieurLaDoulaise = Beau_Rivage({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-monsieur',
});

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-poppins',
});

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (id: string) => {
        scrollToSection(id);
        setIsOpen(false);
    };

    return (
        <div className="flex items-center justify-between p-4">
            <button onClick={() => handleNavClick("home")} className="flex items-center space-x-2">
                <span className={`text-xl font-bold ${monsieurLaDoulaise.variable} logo font-extrabold text-2xl`}>Softbro<span className="text-blue-700">-D</span></span>
            </button>

            {/* Desktop Navigation */}
            <div className={`hidden md:flex md:items-center md:space-x-6 ${poppins.variable}navItems`} >
                <nav className="flex items-center space-x-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavClick(item.id)}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {item.title}
                        </button>
                    ))}
                </nav>
                <Link href="/register">
                    <Button variant="default" size="sm" className="ml-6 rounded-none px-6 hover:bg-none">
                        Inquire
                    </Button>
                </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="w-[300px] sm:w-[400px] text-[#686867] bg-[#F4EFE6] dark:bg-gray-900 dark:text-white"
                        aria-label="Mobile navigation"
                    >
                        <SheetTitle>
                            <Link href="/" className="ml-4 flex items-center gap-2">
                                {/* <Image
                                    src="/Softbro-D.png"
                                    alt="softbro-D"
                                    width={100}
                                    height={100}
                                    className="h-auto w-auto"
                                /> */}
                                <span className={`text-xl font-bold ${monsieurLaDoulaise.variable} logo font-extrabold text-2xl`}>Softbro<span className="text-blue-700">-D</span></span>
                            </Link>
                        </SheetTitle>
                        <nav className="flex flex-col gap-4 mt-6">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className="block py-2 text-lg font-semibold text-left hover:text-primary transition-colors"
                                >
                                    {item.title}
                                </button>
                            ))}
                            <Link href="/register">
                                <Button className="mt-4" onClick={() => setIsOpen(false)}>
                                    Inquier
                                </Button>
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}
