"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import Link from "next/link";
import { Meteors } from "@/components/ui/meteors";
import { Particles } from "@/components/ui/particles";
import { Play } from "lucide-react";
export default function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="h-screen bg-neutral-900 relative w-full overflow-hidden">
      <div className=" px-72 pt-8">
        <nav className="flex justify-between items-center">
          <div className="flex flex-col">
            <ul className="flex gap-4 text-white font-bold text-lg">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/store"}>Store</Link>
              </li>
              <li>
                <Link href={"/vote"}>Vote</Link>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src={"/logo-text.png"}
              width={512}
              height={512}
              alt="Logo"
              className="rounded-full"
            />
          </div>
          
          <ul className="flex gap-4 text-white font-bold text-lg">
            <li className="bg-red-400 px-1 rounded-lg ">
              <Link href={"/rules"}>Rules</Link>
            </li>
            <li>v
              <Link href={"/leaderboards"}>Leaderboards</Link>
            </li>
            <li>
              <Link href={"/staff"}>Staff</Link>
            </li>
          </ul>
        </nav>
      </div>
      <StarsBackground/>
      <Particles staticity={25} />
      <ShootingStars minDelay={3000} maxDelay={7000} />
    </div>
  );
}
