import React from 'react'
import homepageHeroImage1 from './homeAssets/heroImages/homepageHeroImage1.jpeg'

function HomeSection1() {
    return (
        <>
            <img
                className='h-screen w-screen object-cover relative'
                src={homepageHeroImage1} alt='Home Page Hero Image 1'
            />
            <div className='absolute top-28 w-full'>
                <div className='text-white text-6xl font-bold text-center'>
                    0% APR Available
                </div>
                <div className='flex flex-row mt-8 gap-6 justify-center'>
                    <button className='text-lg bg-gray-100 hover:bg-white px-20 py-2 rounded-md text-gray-700'>
                        Order Model 3
                    </button>
                    <button className='text-lg bg-gray-100 hover:bg-white px-20 py-2 rounded-md text-gray-700'>
                        Order Model Y
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomeSection1