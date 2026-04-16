import React from 'react'

const Second = () => {
  return (
    <section className='w-full min-h-screen bg-[#898e7e] flex items-center px-10 py-24 relative overflow-hidden font-sans text-white'>
        <div className='w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10'>
            
            {/* Left Side: Video + Helix Decoration */}
            <div className='relative flex justify-center items-center'>
                {/* Official Helix Decoration SVG */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-auto opacity-100 -z-10 pointer-events-none drop-shadow-2xl">
                    <img 
                        src="/helix-decoration.svg" 
                        alt="Decoration" 
                        className="w-full h-auto"
                    />
                </div>
                
                {/* Video Player */}
                <div className='relative w-full max-w-[390px] aspect-[9/16] bg-black rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[8px] border-black/10'>
                    <video 
                        src="/homepage.mp4" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Floating Label */}
                    <div className='absolute bottom-10 left-10 text-white z-20'>
                        <h3 className='text-3xl font-light leading-[1.1]'>
                            How <br /> <span className="font-bold">FOLLOW.ART</span> <br /> works?
                        </h3>
                    </div>
                </div>
            </div>

            {/* Right Side: Typography & Description */}
            <div className='flex flex-col justify-between h-full py-10 min-h-[600px]'>
                <div className="relative">
                    <h1 className='text-[10vw] md:text-[8.5vw] font-[designer] leading-[0.8] uppercase tracking-[-0.05em] select-none text-white drop-shadow-sm'>
                        YOUR <br /> NEXUS
                    </h1>
                    <div className="absolute top-0 right-0 md:right-[15%] text-6xl opacity-80 animate-pulse">✨</div>
                </div>

                <div className='mt-20 md:mt-0 max-w-[550px] border-t border-white/30 pt-12'>
                    <p className='text-2xl md:text-4xl leading-[1.15] font-[gilroy] tracking-tight'>
                        Join Nexus of Curators & Artists, built on <span className="font-bold underline underline-offset-[6px] decoration-1">collaboration</span>. 
                        No gatekeeping and competition.
                    </p>
                </div>
            </div>
        </div>

        {/* Global Join Button */}
        <div className="absolute bottom-10 right-10 hidden md:block">
            <div className="bg-black text-white px-10 py-6 pr-24 relative cursor-pointer group pointer-events-auto">
                <span className="text-xl font-bold uppercase tracking-widest">Join</span>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/30 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <span className="text-xl font-bold">→</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Second;