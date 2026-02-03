import { Particles } from "@/components/ui/particles";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Test2() {
  return (
    <div className="h-screen bg-neutral-900/10 relative w-full overflow-hidden">
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="text-white relative overflow-hidden">
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
                  <a className="relative group" href="/web/20251107201847/https://www.rexkraft.com/">
                    <span className="text-white hover:text-white transition-colors duration-200 font-semibold text-base">Home</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 transition-all duration-200 opacity-100 scale-x-100"></div>
                  </a>
                  <a className="relative group" href="/web/20251107201847/https://www.rexkraft.com/store">
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-base">Store</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 transition-all duration-200 opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"></div>
                  </a>
                  <a className="relative group" href="/web/20251107201847/https://www.rexkraft.com/bans">
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-base">Bans</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 transition-all duration-200 opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"></div>
                  </a>
                  <a className="relative group" href="/web/20251107201847/https://www.rexkraft.com/vote">
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-base">Vote</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 transition-all duration-200 opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"></div>
                  </a>
                </div>
                <div className="flex items-center bg-green-600 hover:bg-green-700 transition-colors duration-200 rounded-lg px-5 py-3 cursor-pointer group relative" title="Click to copy server IP">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5"></div>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base">PLAY NOW</p>
                      <p className="text-green-200 text-sm">play.rexkraft.com</p>
                    </div>
                    <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">28/100</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center"><a className="flex items-center" href="/web/20251107201847/https://www.rexkraft.com/">
                <img alt="RexKraft Logo" width="1170" height="585" decoding="async" data-nimg="1" className="h-40 w-auto hover:scale-105 transition-transform duration-200 text-transparent " src={"/logo-text.png"}/>
              </a>
              </div>
              <div className="hidden lg:flex flex-col items-start space-y-3 ml-8">
                <div className="flex items-center space-x-7">
                  <a className="relative group" href="/web/20251107201847/https://www.rexkraft.com/rules">
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-base">Rules</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 transition-all duration-200 opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"></div>
                  </a>
                  <a className="relative group" href="/web/20251107201847/https://www.rexkraft.com/leaderboard">
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-base">Leaderboard</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 transition-all duration-200 opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"></div>
                  </a>
                  <a className="relative group" href="/web/20251107201847/https://www.rexkraft.com/staff">
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-base">Staff</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 transition-all duration-200 opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"></div>
                  </a>
                  <a className="relative group" href="/web/20251107201847/https://www.rexkraft.com/tools">
                    <span className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-base">Tools</span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400 transition-all duration-200 opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"></div>
                  </a>
                </div>
                <div className="flex items-center bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 rounded-lg px-5 py-3 cursor-pointer group" title="Click to join Discord server">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-base">DISCORD</p>
                      <p className="text-indigo-200 text-sm">discord.rexkraft.com</p>
                    </div>
                    <div className="bg-indigo-500 text-white px-2 py-1 rounded text-sm font-bold">369</div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="lg:hidden relative z-10 container mx-auto px-4 pb-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center bg-green-600 hover:bg-green-700 transition-colors duration-200 rounded-lg px-6 py-3 cursor-pointer group relative" title="Click to copy server IP">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-1"></div>
                  </div>
                  <div>
                    <p className="text-white font-bold">PLAY NOW</p>
                    <p className="text-green-200 text-sm">play.rexkraft.com</p>
                  </div>
                  <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">28/100</div>
                </div>
              </div>
              <div className="flex items-center bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 rounded-lg px-6 py-3 cursor-pointer group" title="Click to join Discord server">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold">DISCORD</p>
                    <p className="text-indigo-200 text-sm">discord.rexkraft.com</p>
                  </div>
                  <div className="bg-indigo-500 text-white px-2 py-1 rounded text-sm font-bold">369</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <footer className="relative z-10 mt-2">
          <div className="container mx-auto px-4 py-1">
            <div className="flex flex-col items-center space-y-1 text-center">
              <div className="space-y-0.5">
                <p className="text-gray-300 text-base font-medium">© 2017-2025 REXKRAFT. All rights reserved.</p>
                <p className="text-gray-500 text-sm">We are not affiliated with Mojang Studios or Minecraft.</p>
              </div>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-400">🔮 Enderman Clicks:</span>
                <span className="text-purple-300 font-semibold">0</span>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-2 text-sm">
                <a className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:underline" href="/web/20251107201847/https://www.rexkraft.com/privacy">
                  Privacy Policy
                </a>
                <span className="text-gray-600">|</span>
                <a className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:underline" href="/web/20251107201847/https://www.rexkraft.com/terms">
                  Terms of Service
                </a>
                <span className="text-gray-600">|</span>
                <a className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:underline" href="/web/20251107201847/https://www.rexkraft.com/contact">
                  Contact Us
                </a>
                <span className="text-gray-600">|</span>
                <a className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:underline" href="/web/20251107201847/https://www.rexkraft.com/support">
                  Support
                </a>
                  <span className="text-gray-600">|</span>
                  <a className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:underline" href="/web/20251107201847/https://www.rexkraft.com/refund">
                  Refund Policy
                </a>
                <span className="text-gray-600">|</span>
                <a className="text-gray-400 hover:text-purple-300 transition-colors duration-300 hover:underline" href="/web/20251107201847/https://www.rexkraft.com/roadmap">
                  Roadmap
                </a>
              </div>
            </div>
          </div>
        </footer>
        
      </div>
      <StarsBackground/>
      <Particles staticity={25} />
      <ShootingStars minDelay={3000} maxDelay={7000} />
    </div>
  )
}
