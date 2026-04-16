import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-[#111] text-white py-20 px-10 md:px-20 font-sans relative overflow-hidden'>
        <div className='max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10'>
            
            {/* Branding Column */}
            <div className='md:col-span-2 flex flex-col justify-between h-full'>
                <div>
                   <h4 className='text-4xl font-black tracking-tighter mb-4'>FOLLOW.ART</h4>
                   <p className='text-sm opacity-50 uppercase tracking-[0.2em] max-w-[300px]'>
                       Nexus of Curators and Artists. Building the first global network for art professionals.
                   </p>
                </div>
                <div className='mt-20 md:mt-0'>
                    <p className='text-xs opacity-30'>© 2026 FOLLOW.ART. ALL RIGHTS RESERVED.</p>
                </div>
            </div>

            {/* Links Columns */}
            <div className='flex flex-col gap-6 text-[11px] uppercase tracking-[0.2em] font-bold'>
                <p className='opacity-30 mb-2'>Explore</p>
                <a href="#" className='hover:line-through transition-all'>About</a>
                <a href="#" className='hover:line-through transition-all'>Nexus Card</a>
                <a href="#" className='hover:line-through transition-all'>Pricing</a>
                <a href="#" className='hover:line-through transition-all'>FAQ</a>
            </div>

            <div className='flex flex-col gap-6 text-[11px] uppercase tracking-[0.2em] font-bold'>
                <p className='opacity-30 mb-2'>Social</p>
                <a href="#" className='hover:line-through transition-all'>Instagram</a>
                <a href="#" className='hover:line-through transition-all'>Twitter (X)</a>
                <a href="#" className='hover:line-through transition-all'>LinkedIn</a>
                <a href="#" className='hover:line-through transition-all'>Foundation</a>
            </div>
        </div>

        {/* Subtle Decorative Element */}
        <div className='absolute bottom-0 right-0 p-10 opacity-[0.03] select-none pointer-events-none'>
            <h1 className='text-[20vw] font-[designer] leading-none uppercase -mb-[5%]'>REVEAL</h1>
        </div>
    </footer>
  )
}

export default Footer;
