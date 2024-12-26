import React from 'react'
import teslaLogo from './navbarAssets/teslalogo.svg'
import helpIcon from './navbarAssets/helpIcon.svg'
import globeIcon from './navbarAssets/globeIcon.svg'
import profileIcon from './navbarAssets/profileIcon.svg'

function Navbar() {
    return (
        <>
            <div className='w-full px-8 sm:px-12 py-4 flex justify-between items-center absolute left-0 right-0 top-0 z-10'>
                <img
                    className='w-36 h-6 object-fill cursor-pointer'
                    onClick={() => console.log("Tesla")}
                    src={teslaLogo} alt='TESLA' />
                <ul className='hidden lg:flex'>
                    <li className='text-white cursor-pointer font-semibold rounded-md hover:bg-gray-200 hover:text-black px-5 py-1'>Vehicles</li>
                    <li className='text-white cursor-pointer font-semibold rounded-md hover:bg-gray-200 hover:text-black px-5 py-1'>Energy</li>
                    <li className='text-white cursor-pointer font-semibold rounded-md hover:bg-gray-200 hover:text-black px-5 py-1'>Charging</li>
                    <li className='text-white cursor-pointer font-semibold rounded-md hover:bg-gray-200 hover:text-black px-5 py-1'>Discover</li>
                    <li className='text-white cursor-pointer font-semibold rounded-md hover:bg-gray-200 hover:text-black px-5 py-1'>Shop</li>
                    <li className='text-white cursor-pointer font-semibold rounded-md hover:bg-gray-200 hover:text-black px-5 py-1'>We, Robot</li>
                </ul>
                <div className='hidden lg:flex gap-3'>
                    <div>
                        <img className='h-6 w-6 ' src={helpIcon} />
                    </div>
                    <div>
                        <img className='h-6 w-6 ' src={globeIcon} />
                    </div>
                    <div>
                        <img className='h-6 w-6 ' src={profileIcon} />
                    </div>
                </div>
                <div className='px-4 py-1 rounded-lg drop-shadow-lg bg-[#ffffff12]'>
                    <div className='text-white font-semibold'>
                        Menu
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar