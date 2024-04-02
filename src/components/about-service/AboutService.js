import React from 'react'

export default function AboutService(props) {
    return (
        <div className='container py-10'>
            <div className='grid grid-cols-2 gap-4'>
                <div className=''>
                    <h3 className='text-heading'>{props.heading1}</h3>
                    <div className='flex pt-10'>
                        <img className='w-full' src='https://thealamdev.github.io/kuub/images/about-1.jpg'></img>
                        <div className='space-y-2 px-5 text-justify'>
                            <h3 className='font-normal text-lg text-slate-300'>Maecenas Faucibus Molli Interdum. Cras Mattis Consectetur Purus Sitor Amet Sed Donec Malesuada Ullamcorper Odio.</h3>
                            <p className='font-thin text-sm text-slate-400'>Curabitur blandit tempus porttitor. Vollisky inceptos mollisestor commodo luctus. Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligulas semper. Cum sociis natoque penatibus et magnis maecenas. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac egestas eget quam.</p>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <h3 className='text-heading'>{props.heading2}</h3>

                    <div className='flex pt-10 text-justify'>
                        <img className='w-10 h-10' src='https://thealamdev.github.io/kuub/images/s_logo.png'></img>
                        <div className='pl-5'>
                            <h3 className='font-normal text-lg text-slate-300'>Photography</h3>
                            <p className='font-thin text-sm text-slate-400'>Curabitur blandit tempus porttitor. Duis at vollisky inceptos mollisestor commodo luctus erat. Morbi risus, porta consectetur vestibulum at eros.</p>
                        </div>
                    </div>

                    <div className='flex pt-10 text-justify'>
                        <img className='w-10 h-10' src='https://thealamdev.github.io/kuub/images/s_logo-2.png'></img>
                        <div className='pl-5'>
                            <h3 className='font-normal text-lg text-slate-300'>Photography</h3>
                            <p className='font-thin text-sm text-slate-400'>Curabitur blandit tempus porttitor. Duis at vollisky inceptos mollisestor commodo luctus erat. Morbi risus, porta consectetur vestibulum at eros.</p>
                        </div>
                    </div>

                    <div className='flex pt-10 text-justify'>
                        <img className='w-10 h-10' src='https://thealamdev.github.io/kuub/images/s_logo-3.png'></img>
                        <div className='pl-5'>
                            <h3 className='font-normal text-lg text-slate-300'>Photography</h3>
                            <p className='font-thin text-sm text-slate-400'>Curabitur blandit tempus porttitor. Duis at vollisky inceptos mollisestor commodo luctus erat. Morbi risus, porta consectetur vestibulum at eros.</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
