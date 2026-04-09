import Link from "next/link"

export default function AboutMe() {
    return (
        <div id="aboutMe" className="bg-black sm:p-10 p-5 text-secondary">
            <h1 className="text-7xl uppercase font-druk sm:pt-12 pb-12 pt-20"><span
                className="font-bebasneue uppercase text-[76px]">ü</span>ber mich</h1>
            <div className="flex items-center flex-col-reverse lg:flex-row lg:gap-4 gap-10 justify-center">
                <div
                    className="flex flex-col gap-7 lg:w-1/2 font-josefin w-full bg-secondary text-black border-primary border-2 sm:p-10 p-7 rounded-xl">
                    <p className="sm:text-lg text-md">
                        Hallo, ich bin <span className="text-primary"> Michelle Brändli</span>, bin 18 Jahre alt und
                        wohne in der Schweiz. Zurzeit bin ich eine
                        Schülerin der 2.Klasse an der <span className="text-primary">IMS</span> in der <span
                        className="text-primary">Kantonschule Hottingen</span>. In meiner Freizeit zeichne ich
                        gerne, höre Musik und programmiere.
                    </p>
                    <Link href="https://github.com/Michcy"
                          className="bg-primary shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all p-4 w-fit flex gap-4 text-secondary rounded-xl"
                    >
                        <img src="./logo-github.svg" alt="Github Project" className="invert w-5 h-5"/>
                        GitHub Profile
                    </Link>
                </div>
                <img className="flex lg:w-1/2  w-full justify-center items-center" src="./aboutMe.jpg"
                     alt="image of myself and my drawings"/>
            </div>
            <div className="pt-10 pb-10">
                <img src="./Skizze.jpg" alt="Placeholder für eine Animation"
                     className="w-full aspect-video object-cover"/>
            </div>
        </div>
    )
}