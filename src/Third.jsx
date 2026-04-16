import React, { useState } from 'react'

const FlipCard = ({ number, title, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className="relative w-full aspect-square cursor-pointer group"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            style={{ perspective: '2000px' }}
        >
            <div 
                className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
            >
                {/* Front */}
                <div className="absolute inset-0 bg-black p-10 flex flex-col justify-between [backface-visibility:hidden]">
                    <span className="text-white/40 text-lg font-medium">{number}</span>
                    <h3 className="text-white text-3xl font-medium leading-[1.1] max-w-[180px]">{title}</h3>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-white p-10 flex flex-col justify-center items-center [backface-visibility:hidden] [transform:rotateY(180deg)] text-black shadow-2xl border-2 border-black">
                    <p className="text-center text-lg font-bold uppercase tracking-tight">{title}</p>
                    <p className="text-center mt-4 text-sm opacity-70 px-4">{backContent}</p>
                </div>
            </div>
        </div>
    )
}

const Third = () => {
    const cards = [
        { number: '1', title: 'Professional presentation', backContent: 'Showcase your portfolio with cutting-edge tools designed for the modern art world.' },
        { number: '2', title: 'Visibility', backContent: 'Enter a global marketplace where curators and collectors find your latest releases.' },
        { number: '3', title: 'Connection', backContent: 'Forge authentic links with industry leaders and fellow visionary artists.' },
        { number: '4', title: 'Knowledge exchange', backContent: 'Participate in exclusive dialogues and share insights within a vetted network.' }
    ];

    return (
        <section className='w-full min-h-screen bg-[#7D8FA3] relative overflow-hidden font-sans selection:bg-orange-500 selection:text-white'>
            
            {/* White Decorative Border (Vertical) */}
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white opacity-20 hidden md:block z-20"></div>

            <div className='w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 relative h-full'>
                
                {/* Left Side: Content */}
                <div className='flex flex-col justify-between py-30 px-8 md:px-6 h-full min-h-screen md:border-r border-white/10'>
                    <div className="relative">
                        <h1 className='text-[12vw] font-[designer] leading-none uppercase tracking-tighter text-black flex items-start'>
                            FOLLOW.ART
                            <img src="/cross.svg" className="w-[1em] h-[1em] ml-2 -mt-4 invert-0 hue-rotate-[180deg] filter grayscale brightness-[5] grayscale-0" 
                                 style={{ filter: 'brightness(10) contrast(10)' }} 
                                 alt="star" />
                        </h1>
                    </div>

                    <div className='max-w-[550px] mt-20 md:mt-auto mb-10'>
                        <p className='text-3xl md:text-4xl leading-[1.15] font-[gilroy] text-white tracking-tight'>
                            <span className="font-semibold">FOLLOW.ART</span> is the <span className="underline underline-offset-[6px] decoration-1">
                                first</span> and only <span className="font-bold underline underline-offset-[6px] decoration-1">network </span> 
                                made for curators and artists, combining tools for professional presentation, visibility, connection and knowledge sharing.
                        </p>
                    </div>
                </div>

                {/* Right Side: Grid with Orange Cross Backdrop */}
                <div className='relative font-[gilroy] flex items-center justify-center p-8 md:p-24 min-h-[800px]'>
                    
                    {/* Orange Decoration Background (The 'Helix' or 'Cross' from image) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] opacity-80 pointer-events-none">
                         <img src="/helix-decoration.svg" className="w-full h-auto" alt="decoration" /> 
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[650px] z-10">
                        {cards.map(card => (
                            <FlipCard key={card.number} {...card} />
                        ))}
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Third;
