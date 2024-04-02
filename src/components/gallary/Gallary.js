import React from 'react'
import instrapost from '../../images/instra.jpg';

export default function Gallary() {
    return (
        <div className='bg-neutral-800'>

            <div className="w-2/5 m-auto relative">
                <div className="py-10 w-80 m-auto text-center font-bold text-xl mt-10 before:absolute before:w-28 before:h-0.5 before:bg-slate-600 dark:before:bg-slate-100 before:left-10 before:top-14 after:absolute after:w-28 after:h-0.5 after:bg-slate-600 dark:after:bg-slate-100 after:right-10 after:top-14 dark:text-slate-200">LATEST INSTAGRAM SHOTS</div>
            </div>

            <div className='grid grid-cols-4 gap-0'>
                <img src={instrapost} className='w-full' />
                <img src={instrapost} className='w-full' />
                <img src={instrapost} className='w-full' />
                <img src={instrapost} className='w-full' />
            </div>

            <div className='py-10 bg-neutral-800 text-center text-slate-100 font-light'>
                <a href='https://facebook.com/thealamdev' className='border border-slate-100 py-2 px-5'>FACEBOOK PAGE</a>
            </div>


        </div>
    )
}
