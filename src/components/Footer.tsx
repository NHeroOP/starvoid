import Image from "next/image";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "./SocialIcons";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center text-primary-content p-8 gap-4 z-10 relative">
      <aside>
        <Link target="_blank" rel="noopener noreferrer" href={"https://discord.com/invite/XTWkKbd32v"}>
          <Image
            src={"/image/sv.png"}
            width={64}
            height={64}
            alt="StarVoid Logo 2"
          />
        </Link>
        <p className="font-bold">
          StarVoid SMP.
          <br />
          Conquer the Void.
        </p>
        <div className="grid grid-flow-col gap-4">
          <Link href={"/"}>
            <TwitterIcon />
          </Link>
          <Link href={"/"}>
            <YoutubeIcon />
          </Link>
          <Link href={"/"}>
            <FacebookIcon/>
          </Link>
        </div>
        <p>© 2025-{new Date().getFullYear()} StarVoid. All right reserved</p>
        <p className="text-gray-500 text-sm">We are not affiliated with Mojang Studios or Minecraft.</p>
        <div className="w-48 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </aside>
      <nav>

        <div className="flex flex-wrap justify-center items-center gap-2 text-sm">
          <Link className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:underline" href="/">
            Privacy Policy
          </Link>
          <span className="text-gray-600">|</span>
          <Link className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:underline" href="/">
            Terms of Service
          </Link>
          <span className="text-gray-600">|</span>
          <Link className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:underline" target="_blank" rel="noopener noreferrer" href={"https://discord.com/invite/XTWkKbd32v"}>
            Contact Us
          </Link>
          <span className="text-gray-600">|</span>
          <Link className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:underline" target="_blank" rel="noopener noreferrer" href={"https://discord.com/invite/XTWkKbd32v"}>
            Support
          </Link>
            <span className="text-gray-600">|</span>
            <Link className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:underline" href="/">
            Refund Policy
          </Link>
          <span className="text-gray-600">|</span>
          <Link className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:underline" href="/">
            Roadmap
          </Link>
        </div>
      </nav>
    </footer>
  )
}


