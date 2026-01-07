import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
    return (
        <div className="flex md:flex-row flex-col">
            <div className="flex md:flex-col md:gap-6 gap-4 h-full w-[100px] md:text-base text-[12px] tracking-widest underline items-center md:place-items-start md:mx-8 my-2">
                <Image
                    src="/profile.png"
                    height={100}
                    width={100}
                    alt="Dummy Image"
                    className="rounded-full aspect-square object-cover w-[50px] md:w-auto h-[50px] md:h-auto"
                />      
                <Link href="/" className="navlink">Home</Link>
                <Link href="/projects" className="navlink">Projects</Link>
                <Link href="/work" className="navlink">Work</Link>
                <Link href="https://devpost.com/xander-chin" target="_blank" className="navlink">Hackathons</Link>
                {/* <Link href="" className="">RESUME</Link> */}
            </div>
            <hr className="h-full border-[1px] border-black md:mr-8 mb-4"/>
        </div>
    )
}