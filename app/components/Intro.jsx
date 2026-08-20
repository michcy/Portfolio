'use client'

export default function Intro() {

    function scrollToNextSection() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }

    return (
        <div id="intro"
             className="intro-section bg-primary text-secondary flex items-center justify-center flex-col h-screen">
            <div className="flex items-center flex-wrap justify-center flex-1 flex-col">
                <div>
                    <h1 className="font-druk text-center uppercase text-[clamp(7.75rem,calc(8vw+1rem),9.375rem)]">Michelle Br<span className="uppercase text-center font-bebasneue text-[clamp(8.1875rem,calc(8vw+1.5rem),159px)]">ä</span>ndli</h1>
                </div>
                <p className="flex justify-center items-center font-josefin text-center text-3xl">Front-End Entwickler</p>
            </div>
            <p className="text-5xl p-2 cursor-pointer animate-bounce"
               onClick={() => scrollToNextSection()}
            >&#8595;</p>
        </div>
    );
}