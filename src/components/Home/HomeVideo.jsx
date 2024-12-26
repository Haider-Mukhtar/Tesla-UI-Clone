import React from 'react'
import teslaVideo from './homeAssets/heroVideo/teslaVideo.webm'

function HomeVideo() {
    //     <video width="320" height="240" controls>
    //   <source src="movie.mp4" type="video/mp4">
    //   <source src="movie.ogg" type="video/ogg">
    //   Your browser does not support the video tag.
    // </video>
    return (
        <>
            <video
                className='h-screen w-screen object-cover absolute'
                src={teslaVideo} autoPlay loop
            />
            <div className='w-full h-screen relative bottom-0 px-16 py-16 flex flex-col justify-end items-start'>
                <div className='text-white text-4xl sm:text-6xl font-bold text-center pb-2'>
                    We Are Tesla
                </div>
                <div className='mt-8'>
                    <button className='text-lg bg-blue-500 hover:bg-blue-600 px-8 sm:px-20 py-2 rounded-md text-white'>
                        Join Tesla
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomeVideo