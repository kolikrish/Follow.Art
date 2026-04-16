import React from 'react'

const Fourth = () => {
    return (
        <section className='w-full min-h-screen bg-[#898e7e] flex items-center justify-center relative overflow-hidden font-sans text-black'>
            {/* Background Massive Text - "CONNECTORY" */}
            <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                <h1 className='text-[30vw] font-[designer] leading-none uppercase tracking-[-0.05em] text-black/10 select-none whitespace-nowrap scale-y-[1.8] origin-center opacity-80'>
                    CONNECTORY
                </h1>
            </div>

            {/* Main Visual Overlay */}
            <div className='relative z-10 w-full max-w-[800px] px-6 md:px-12 flex flex-col items-center'>

                {/* Website Interface Image (image2.png) */}
                <div className='relative w-full shadow-[0_40px_100px_-15px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden transform md:-rotate-1'>
                    <img 
                        src="/image2.png" 
                        alt="The Connectory Platform" 
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Replicated Global Join Button */}
            <div className="absolute bottom-10 right-10 z-30">
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

export default Fourth;
