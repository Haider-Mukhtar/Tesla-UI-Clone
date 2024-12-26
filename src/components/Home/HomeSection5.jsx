import React from 'react'
import homepageHeroImage5 from './homeAssets/heroImages/homepageHeroImage5.jpeg'

function HomeSection5() {
    return (
        <>
            <img
                className='h-screen w-screen object-cover absolute'
                src={homepageHeroImage5} alt='Home Page Hero Image 3'
            />
            <div className='w-full h-screen relative top-0 py-16 flex flex-col justify-between '>
                <div>
                    <div className='text-white text-4xl sm:text-6xl font-bold text-center pb-2'>
                        Model S
                    </div>
                    <div className='text-white text-4xl font-semibold text-center pb-1'>
                        From $68,4904
                    </div>
                    <div className='text-white text-xl font-semibold text-center underline underline-offset-2 hover:cursor-pointer hover:underline-offset-4'>
                        After Est. Gas Savings $6,500
                    </div>
                </div>
                <div className='flex flex-row mt-8 gap-4 sm:gap-6 justify-center'>
                    <button className='text-lg bg-blue-500 hover:bg-blue-600 px-8 sm:px-20 py-2 rounded-md text-white'>
                        Order Now
                    </button>
                    <button className='text-lg bg-gray-100 hover:bg-white px-8 sm:px-20 py-2 rounded-md text-black'>
                        Learn More
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomeSection5