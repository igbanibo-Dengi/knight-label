'use client'

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"

const navLinks = [
    { href: "/artists", label: "Artists" },
    { href: "/comedy", label: "Comedy" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
]

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm text-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    Knight <span className="text-[#C1A355]">Entertainment</span>
                </Link>
                <div className="hidden md:flex items-center gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:underline hover:text-[#C1A355] transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full bg-black/95 text-white">
                        <SheetHeader className="mt-8">
                            <SheetTitle className="text-2xl font-bold text-white">
                                Knight <span className="text-[#C1A355]">Entertainment</span>
                            </SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col justify-center gap-4 text-center h-full">
                            {navLinks.map((link) => (
                                <SheetClose asChild key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-4xl font-semibold hover:underline hover:text-[#C1A355] transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}