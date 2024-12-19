import React from 'react'
import homepageHeroImage2 from './homeAssets/heroImages/homepageHeroImage2.jpeg'

function HomeSection2() {
    return (
        <>
            <img
                className='h-screen w-screen object-cover absolute'
                src={homepageHeroImage2} alt='Home Page Hero Image 2'
            />
            <div className='w-full h-screen relative top-0 py-16 flex flex-col justify-between '>
                <div>
                    <div className='text-white text-6xl font-bold text-center pb-2'>
                        Model Y
                    </div>
                    <div className='text-white text-4xl font-semibold text-center pb-1 underline underline-offset-2 hover:cursor-pointer hover:underline-offset-4'>
                        0% APR Available
                    </div>
                    <div className='text-white text-xl font-semibold text-center'>
                        Lease Starting at $299/mo
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

export default HomeSection2