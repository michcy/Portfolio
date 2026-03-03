import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer  flex bg-black text-secondary items-center justify-between text-center">
            <div className="flex flex-wrap items-center  justify-center gap-2 sm:p-10 p-5">
                <Link href="https://github.com/Michcy"
                      className=" p-1 rounded-full">
                    <img src="./logo-github.svg" alt="github"
                         className="sm:w-6 w-4 invert hover:invert-75 aspect-square"/>
                </Link>
                <Link href={`mailto:michelle.braendli@icloud.com"`}
                      className=" cursor-pointer p-2 rounded-full">
                    <img src="./email.png" alt="email"
                         className="sm:w-5 w-4 invert hover:invert-75"/>
                </Link>
                <Link href="tel:+41774076388" className=" p-2 rounded-full">
                    <img src="./phone-call.png" alt="telefon"
                         className="sm:w-5 w-4 invert hover:invert-75 aspect-square"/>
                </Link>
            </div>
            <p className="font-josefin sm:text-base text-xs p-10">© 2026 Michelle Brändli</p>
        </footer>
    );
}