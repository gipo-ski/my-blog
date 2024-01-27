import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-slate-600 p-0 bottom-0 left-0 right-0 mt-10 relative items-center">
      <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-16 text-white text-4xl lg:text-5xl p-10">
        <Link
          className="text-white/70 hover:text-white"
          href="https://www.linkedin.com/in/o-kunle/"
        >
          <FaLinkedin />
        </Link>
        <Link
          className="text-white/70 hover:text-white"
          href="https://kunle-o-portfolio.netlify.app/"
        >
          <FaLaptop />
        </Link>
        <Link
          className="text-white/70 hover:text-white"
          href="https://github.com/gipo-ski"
        >
          <FaGithub />
        </Link>
        <Link
          className="text-white/70 hover:text-white"
          href="https://twitter.com/"
        >
          <FaTwitter />
        </Link>
      </div>
      <div className="flex flex-row sm:flex-col mx-auto justify-between bg-slate-200">
        <Link href="/" className="no-underline">
          <Image
            src="/images/linefamily.png"
            alt="giposki line family"
            width={1500}
            height={20}
          />
        </Link>
      </div>
    </footer>
  );
}
