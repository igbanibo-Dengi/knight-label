import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

export const Footer = () => {
    return (
        <footer className="bg-black border-t py-8 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-2xl font-bold mb-4 md:mb-0">Knight Entertainment</div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-purple-400 transition-colors"><Instagram /></a>
                        <a href="#" className="hover:text-purple-400 transition-colors"><Twitter /></a>
                        <a href="#" className="hover:text-purple-400 transition-colors"><Facebook /></a>
                    </div>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-center">
                    <Link href="/studio" target="_blank" className="mt-4 text-center text-sm text-muted-foreground mx-auto z-40">
                        © 2023 Knight Entertainment. All rights reserved.
                    </Link>
                </div>
            </div>
        </footer>
    );
};
