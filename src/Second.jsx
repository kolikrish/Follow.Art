import React from 'react'

const Second = () => {
  return (
    <section className='w-full min-h-screen bg-[#898e7e] flex items-center px-10 py-24 relative overflow-hidden font-sans text-white'>
        <div className='w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10'>
            
            {/* Left Side: Photo + Stroke */}
            <div className='relative group'>
                {/* Decorative Orange Stroke/Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] opacity-90 -z-10 pointer-events-none">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-[#ED7239]">
                        <path d="M44.7,-76.4C58.3,-69.2,70.1,-58.5,77.9,-45.5C85.8,-32.5,89.7,-16.2,90.1,0.2C90.5,16.7,87.3,33.3,79.5,47.3C71.6,61.3,58.9,72.6,44.4,79.1C29.9,85.6,15,87.3,0.3,86.7C-14.3,86.1,-28.7,83.1,-42.6,76.3C-56.5,69.5,-69.9,58.8,-78.3,45.3C-86.7,31.7,-90.1,15.9,-89.2,0.5C-88.3,-14.9,-83.1,-29.7,-74.6,-43.2C-66.1,-56.7,-54.3,-68.8,-40.5,-75.9C-26.7,-82.9,-13.3,-84.9,0.3,-85.4C13.9,-85.9,27.8,-84.9,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                </div>
                
                <div className='relative bg-black rounded-[2rem] overflow-hidden shadow-2xl'>
                    <img 
                        src="/phone_hand_holding_nexus_card_1776346793590.png" 
                        alt="Mobile Nexus Interface" 
                        className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                    />
                </div>

                <div className='absolute -bottom-6 -left-6 bg-transparent text-white'>
                    <h3 className='text-3xl font-normal leading-[1.1]'>
                        How <br /> <span className="font-bold">FOLLOW.ART</span> <br /> works?
                    </h3>
                </div>
            </div>

            {/* Right Side: Typography & Description */}
            <div className='flex flex-col justify-between h-full py-10'>
                <div className="relative">
                    <h1 className='text-[12vw] md:text-[8vw] font-[designer] leading-[0.85] uppercase tracking-[-0.05em] select-none'>
                        YOUR <br /> NEXUS
                    </h1>
                    <div className="absolute top-0 right-0 md:right-[20%] text-6xl opacity-80 animate-pulse">✨</div>
                </div>

                <div className='mt-20 md:mt-40 max-w-[500px] border-t border-white/20 pt-10'>
                    <p className='text-2xl md:text-3xl leading-tight font-normal opacity-90'>
                        Join Nexus of Curators & Artists, built on <span className="underline underline-offset-8 decoration-1 italic">collaboration</span>. 
                        No gatekeeping and competition.
                    </p>
                </div>
            </div>
        </div>

        {/* Replicated Join Button */}
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

export default Second