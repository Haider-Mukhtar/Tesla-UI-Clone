import React from 'react'
import homepageHeroImage10 from './homeAssets/heroImages/homepageHeroImage10.jpeg'

function HomeSection10() {
    return (
        <>
            <img
                className='h-screen w-screen object-cover absolute'
                src={homepageHeroImage10} alt='Home Page Hero Image 3'
            />
            <div className='w-full h-screen relative top-0 py-16 flex flex-col justify-between '>
                <div>
                    <div className='text-white text-6xl font-bold text-center pb-2'>
                        Powerwall
                    </div>
                </div>
                <div className='flex flex-row mt-8 gap-6 justify-center'>
                    <button className='text-lg bg-blue-500 hover:bg-blue-600 px-20 py-2 rounded-md text-white'>
                        Shop Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomeSection10