import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-8 text-white font-sans pointer-events-none select-none'>
        <div className='flex flex-col gap-2 pointer-events-auto cursor-pointer group'>
            <h4 className='text-3xl font-black tracking-tighter leading-none'>FOLLOW.ART</h4>
            <span className='hidden lg:block text-[10px] uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity'>Nexus of Curators and Artists</span>
        </div>

        <div className='hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] pointer-events-auto font-medium'>
            <p className='cursor-pointer hover:line-through transition-all'>About</p>
            <p className='cursor-pointer hover:line-through transition-all'>Nexus Card</p>
            <p className='cursor-pointer hover:line-through transition-all'>Community Board</p>
            <p className='cursor-pointer hover:line-through transition-all'>Pricing</p>
            <p className='cursor-pointer hover:line-through transition-all'>FAQ</p>
        </div>

        <div className='flex gap-8 items-center font-[gilroy] pointer-events-auto'>
            <button className='text-[11px] uppercase tracking-[0.2em] font-bold cursor-pointer hover:opacity-50 transition-opacity'>Login</button>
            <button className='bg-white text-black px-8 py-3 text-[11px] uppercase tracking-[0.2em] font-black hover:bg-black hover:text-white transition-all'>Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar;