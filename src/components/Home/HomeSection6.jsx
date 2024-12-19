import React from 'react'
import homepageHeroImage6 from './homeAssets/heroImages/homepageHeroImage6.jpeg'
import cybertruckLogo from './homeAssets/cybertrucklogo.svg'

function HomeSection6() {
    return (
        <>
            <img
                className='h-screen w-screen object-cover absolute'
                src={homepageHeroImage6} alt='Home Page Hero Image 3'
            />
            <div className='w-full h-screen relative top-0 py-16 flex flex-col justify-between '>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-1/4'>
                        <img src={cybertruckLogo} alt='CyberTruck Logo' />
                    </div>
                    <div className='text-white text-xl font-semibold text-center pb-1'>
                        Lease Starting at $899/mo
                    </div>
                </div>
                <div className='flex flex-row mt-8 gap-6 justify-center'>
                    <div className='border-t-4 border-gray-500 pt-1'>
                        <button className='text-lg font-semibold bg-gray-900 opacity-90 hover:opacity-80 px-20 py-2 text-gray-400'>
                            ORDER NOW
                        </button>
                    </div>
                    <button className='text-lg font-semibold bg-gray-900 opacity-90 hover:opacity-80 px-20 py-2 text-gray-400'>
                        LEARN MORE
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomeSection6