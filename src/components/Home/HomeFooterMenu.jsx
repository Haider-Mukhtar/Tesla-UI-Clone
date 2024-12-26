import React from 'react'

function HomeFooterMenu() {
    return (
        <>
            <div className='my-6'>
                <ul className='flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs font-bold justify-center'>
                    <li className='cursor-pointer text-center'>
                        Tesla © 2024
                    </li>
                    <li className='cursor-pointer text-center'>
                        Privacy & Legal
                    </li>
                    <li className='cursor-pointer text-center'>
                        Vehicle Recalls
                    </li>
                    <li className='cursor-pointer text-center'>
                        Contact
                    </li>
                    <li className='cursor-pointer text-center hidden sm:block'>
                        News
                    </li>
                    <li className='cursor-pointer text-center hidden sm:block'>
                        Get Updates
                    </li>
                    <li className='cursor-pointer text-center hidden sm:block'>
                        Locations
                    </li>
                </ul>
            </div>
        </>
    )
}

export default HomeFooterMenu