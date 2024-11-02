import { Music, Video } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ContentCategories() {
    return (
        <section className="py-16 bg- bg-fixed bg-black bg-cover min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-4x md:text-5xl 2xl:text-6xll font-bold mb-8 text-center">Productions</h2>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-background border-2 md:border-4 border-white hover:border-[#C1A355] group border-dashed p-8 rounded-xl text-center">
                        <Music className="w-16 h-16 mx-auto mb-4 group-hover:scale-125 group-hover:text-[#C1A355] text-white transition-all duration-500 ease-in-out" />
                        <h3 className="text-2xl font-bold mb-2">Music Label</h3>
                        <p className="mb-4">Discover our talented artists and their latest tracks</p>
                        <Button variant="outline" className="border-white group-hover:border-[#C1A355] group-hover:text-[#C1A355]">
                            Explore Music
                        </Button>
                    </div>
                    <div className="bg-background border-2 md:border-4 border-white hover:border-[#C1A355] group border-dashed p-8 rounded-xl text-center">
                        <Video className="w-16 h-16 mx-auto mb-4 group-hover:scale-125 group-hover:text-[#C1A355] text-white transition-all duration-500 ease-in-out" />
                        <h3 className="text-2xl font-bold mb-2">Comedy Content</h3>
                        <p className="mb-4">Laugh out loud with our hilarious skits and shows</p>
                        <Button variant="outline" className="border-white group-hover:border-[#C1A355] group-hover:text-[#C1A355]">
                            Watch Comedy
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}