// eslint-disable-next-line no-unused-vars
import React from 'react'
import PowerMoonServicesLogo from '../assets/PowerMoonServicesLogo.jpg'

function Header() {
    return (
        <>
            <header className="fixed w-full bg-slate-800 shadow-lg z-50">
                <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-1">
                        <img src={PowerMoonServicesLogo} alt='PowerMoonServicesLogo' className='h-10 w-10 object-cover rounded-full' />
                        <div className="text-xl font-bold text-blue-400">PowerMoonServices</div>
                    </div>

                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
                        <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
                        <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a>
                        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
                    </div>

                    <div className="hidden md:flex lg:hidden space-x-6">
                        <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
                        <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a>
                        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                        <a href='https://forms.gle/7w5XnPPAkMBkdqcF6' target="_blank" rel="noopener noreferrer">Get Started</a>
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header
