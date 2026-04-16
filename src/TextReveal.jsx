import React from 'react'

const TextReveal = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full pointer-events-none z-0 flex flex-col justify-end p-8 font-sans'>
        {/* Massive Background Text - Removed overflow-hidden to fix clipping */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center'>
            <h1 className='text-white font-[designer] text-[25vw] leading-none uppercase select-none tracking-[-0.08em] whitespace-nowrap scale-y-[1.8] origin-top transform-gpu'>
                Follow'the Art
            </h1>
        </div>

        {/* Bottom UI Layout */}
        <div className="w-full flex justify-between items-end z-10 pb-4">
            <div className="text-white text-xl md:text-2xl font-normal leading-[1.1] tracking-tight opacity-90">
                Nexus of <br /> Curators and <br /> Artists ↓
            </div>

            <div className="bg-black text-white px-8 py-5 pr-20 relative cursor-pointer pointer-events-auto group scale-90 origin-bottom-right">
                <span className="text-xl font-medium">Join</span>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 border border-white/40 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <span className="text-lg">→</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TextReveal;