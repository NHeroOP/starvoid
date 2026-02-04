"use client";

import Footer from "@/components/Footer";
import { DiscordIcon } from "@/components/SocialIcons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Particles } from "@/components/ui/particles";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Vortex } from "@/components/ui/vortex";
import axios from "axios";
import { ChevronRight, Gamepad2, Server, Shield, Trophy, Users, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, } from "react";
import { toast } from "sonner"

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const serverAddress = 'ip.starvoid.fun'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverAddress)
    toast.success("Ip has been copied", {
      style: { backgroundColor: '#24A850', color: 'black', fontSize: '14px' },
      actionButtonStyle: { backgroundColor: '#050a1f', color: 'white'},
      action: {
        label: "Close",
        onClick: () => console.log("Closed"),
      }
    })
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  const [players, setPlayers] = useState(100);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("https://api.mcsrvstat.us/3/play.starvoid.fun")
      setPlayers(data.players.online);
    }

    getData();
  }, [])

  return (
    <div className="relative">
      <div className="min-h-screen text-foreground overflow-x-hidden relative">
        <header className="text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <nav className="relative z-10 container mx-auto px-4 py-4">
            <div className="flex items-center justify-center relative">
              <button className="lg:hidden absolute left-0 p-2">
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className="bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5"></span>
                  <span className="bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 opacity-100"></span>
                  <span className="bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5"></span>
                </div>
              </button>
              <div className="hidden lg:flex flex-col items-end space-y-3 mr-8">
                <div className="flex items-center space-x-7">
                  <a className="relative group" href="/">
                    <span className="text-white hover:text-white transition-colors duration-200 font-semibold text-base">Home</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 transition-all duration-200 opacity-100 scale-x-100"></div>
                  </a>
                  <a className="relative group" href="/store">
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-base">Store</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 transition-all duration-200 opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"></div>
                  </a>
                  <a className="relative group" href="/bans">
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-base">Bans</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 transition-all duration-200 opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"></div>
                  </a>
                  <a className="relative group" href="/vote">
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-base">Vote</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 transition-all duration-200 opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"></div>
                  </a>
                </div>
                <button onClick={copyToClipboard} className="flex items-center bg-green-600 hover:bg-green-700 transition-colors duration-200 rounded-lg px-5 py-3 cursor-pointer group relative" title="Click to copy server IP">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[6px] border-l-white border-y-4 border-y-transparent ml-0.5"></div>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base">PLAY NOW</p>
                      <p className="text-green-200 text-sm">ip.starvoid.fun</p>
                    </div>
                    <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">{players}/100</div>
                  </div>
                </button>
              </div>
              <div className="flex justify-center">
                <Link href="/" className="flex items-center">
                  <img alt="StarVoid Logo" width="1170" height="585" decoding="async" data-nimg="1" className="h-40 w-auto hover:scale-105 transition-transform duration-200 text-transparent " src={"/logo-text.png"}/>
                </Link>
              </div>
              <div className="hidden lg:flex flex-col items-start space-y-3 ml-8">
                <div className="flex items-center space-x-7">
                  <a className="relative group" href="/rules">
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-base">Rules</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 transition-all duration-200 opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"></div>
                  </a>
                  <a className="relative group" href="/leaderboard">
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-base">Leaderboard</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 transition-all duration-200 opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"></div>
                  </a>
                  <a className="relative group" href="/staff">
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-base">Staff</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 transition-all duration-200 opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"></div>
                  </a>
                  <a className="relative group" href="/tools">
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-base">Tools</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 transition-all duration-200 opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"></div>
                  </a>
                </div>
                <Link target="_blank" rel="noopener noreferrer" href={"https://discord.com/invite/XTWkKbd32v"} className="flex items-center bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 rounded-lg px-5 py-3 cursor-pointer group" title="Click to join Discord server">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                      <DiscordIcon />
                    </div>
                    <div>
                      <p className="text-white font-bold text-base">DISCORD</p>
                      <p className="text-indigo-200 text-sm">discord.starvoid.fun</p>
                    </div>
                    <div className="bg-indigo-500 text-white px-2 py-1 rounded text-sm font-bold">286</div>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
          <div className="lg:hidden relative z-10 container mx-auto px-4 pb-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center bg-green-600 hover:bg-green-700 transition-colors duration-200 rounded-lg px-6 py-3 cursor-pointer group relative" title="Click to copy server IP">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[6px] border-l-white border-y-4 border-y-transparent ml-1"></div>
                  </div>
                  <div>
                    <p className="text-white font-bold">PLAY NOW</p>
                    <p className="text-green-200 text-sm">ip.starvoid.fun</p>
                  </div>
                  <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">28/100</div>
                </div>
              </div>
              <div className="flex items-center bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 rounded-lg px-6 py-3 cursor-pointer group" title="Click to join Discord server">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                    <DiscordIcon />
                  </div>
                  <div>
                    <p className="text-white font-bold">DISCORD</p>
                    <p className="text-indigo-200 text-sm">discord.starvoid.fun</p>
                  </div>
                  <div className="bg-indigo-500 text-white px-2 py-1 rounded text-sm font-bold">369</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto ">

            <div className="text-center space-y-6 mb-12">
              <Badge
                className="mx-auto bg-accent/20 text-accent hover:bg-accent/30 border-accent/30"
                variant="outline"
              >
                ⚔️ Fantasy Survival Realm
              </Badge>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                Embark on Your{' '}
                <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Epic Fantasy Adventure
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                A beautifully crafted survival world with custom enchants, town warfare, and epic weekly events. Build your legacy and conquer the realm.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 relative z-10">
                <Link target="_blank" rel="noopener noreferrer" href={"https://discord.com/invite/XTWkKbd32v"}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer"

                  >
                    
                    Join the Server
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link target="_blank" rel="noopener noreferrer" href={"https://discord.com/invite/XTWkKbd32v"}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-secondary bg-transparent text-white hover:text-gray-300 transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  >
                    
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-full overflow-hidden">
          <Vortex
            rangeY={800}
            particleCount={500}
            baseHue={240}
            className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
          >
            <section id="features" className="py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <Badge
                    className="mx-auto bg-primary/20 text-primary hover:bg-primary/30 border-primary/30 mb-4"
                    variant="outline"
                  >
                    Why Choose Us
                  </Badge>
                  <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                    Incredible Features
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Everything you need for an unforgettable Minecraft adventure
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Zap,
                      title: 'Custom Unique Enchants',
                      description:
                        'Discover powerful custom enchantments that enhance your gear and gameplay experience',
                    },
                    {
                      icon: Shield,
                      title: 'Town System & Wars',
                      description:
                        'Build and lead your own town, wage war with rival factions, and claim your territory',
                    },
                    {
                      icon: Trophy,
                      title: 'Daily Fishing Events',
                      description:
                        'Participate in our daily fishing competitions and catch legendary loot',
                    },
                    {
                      icon: Gamepad2,
                      title: 'Skyblock-Like Armors',
                      description:
                        'Collect rare armor sets inspired by Hypixel Skyblock with unique abilities',
                    },
                    {
                      icon: Server,
                      title: 'Dark Auctions & Black Market',
                      description:
                        'Bid on exotic items and gear at our mysterious dark auctions',
                    },
                    {
                      icon: Users,
                      title: 'Weekly Events & Boat Races',
                      description:
                        'Join fun community events including thrilling boat races and more',
                    },
                  ].map((feature, idx) => {
                    const Icon = feature.icon
                    return (
                      <Card
                        key={idx}
                        className="bg-card/60 border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 p-6 transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                      >
                        <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </section>
          </Vortex>
        </div>


        {/* Community Section */}
        <section id="community" className="py-20 px-4 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge
                className="mx-auto bg-accent/20 text-accent hover:bg-accent/30 border-accent/30 mb-4"
                variant="outline"
              >
                A Thriving Community
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Join a Dedicated Community
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Connect with fellow adventurers, form alliances, compete in town wars, and share your epic stories
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10 ">
              {[
                {
                  role: 'Town Mayors',
                  description: 'Lead your faction and expand your territory',
                  color: 'from-primary to-accent',
                },
                {
                  role: 'Legendary Fishers',
                  description: 'Master the daily fishing events and dominate the leaderboards',
                  color: 'from-accent to-primary',
                },
                {
                  role: 'Master Crafters',
                  description: 'Forge powerful custom armor and enchanted gear',
                  color: 'from-primary to-accent',
                },
              ].map((group, idx) => (
                <div key={idx} className="text-center ">
                  <div className={`w-20 h-20 rounded-full bg-linear-to-br ${group.color} mx-auto mb-4 flex items-center justify-center`}>
                    <Users className="w-10 h-10 text-background" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{group.role}</h3>
                  <p className="text-muted-foreground">{group.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer/>
        
      </div>
      <div className="fixed inset-0 w-screen h-screen pointer-events-none">
        <ShootingStars minDelay={3000} maxDelay={7000} />
        <Particles staticity={25} />
        <StarsBackground/>
      </div>
    </div>
  );
}
