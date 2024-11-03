import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-black py-8 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-2xl font-bold mb-4 md:mb-0">Knight Entertainment</div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-purple-400 transition-colors"><Instagram /></a>
                        <a href="#" className="hover:text-purple-400 transition-colors"><Twitter /></a>
                        <a href="#" className="hover:text-purple-400 transition-colors"><Facebook /></a>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm text-gray-500">
                    © 2023 Knight Entertainment. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
