import React from 'react'
import homepageHeroImage9 from './homeAssets/heroImages/homepageHeroImage9.jpeg'

function HomeSection9() {
    return (
        <>
            <img
                className='h-screen w-screen object-cover absolute'
                src={homepageHeroImage9} alt='Home Page Hero Image 3'
            />
            <div className='w-full h-screen relative top-0 py-16 flex flex-col justify-between '>
                <div>
                    <div className='text-white text-6xl font-bold text-center pb-2'>
                        Powerwall
                    </div>
                </div>
                <div className='flex flex-row mt-8 gap-6 justify-center'>
                    <button className='text-lg bg-blue-500 hover:bg-blue-600 px-20 py-2 rounded-md text-white'>
                        Order Now
                    </button>
                    <button className='text-lg bg-gray-100 hover:bg-white px-20 py-2 rounded-md text-black'>
                        Learn More
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomeSection9