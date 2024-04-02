import React from 'react'

export default function Navbar() {
    return (
        <div className='relative p-8 bg-gray-900'>
            <div className='container'>
                <div className='flex justify-between'>
                    <img src='https://thealamdev.github.io/kuub/images/logo.png' />
                    <div className='flex-end'>
                        <ul>
                            <li className='nav-item'><a href='#'>HOME</a></li>
                            <li className='nav-item'><a href='#'>ABOUT</a></li>
                            <li className='nav-item'><a href='#'>SERVICES</a></li>
                            <li className='nav-item'><a href='#'>PORTFOLIO </a></li>
                            <li className='nav-item'><a href='#'>JOURNAL  </a></li>
                            <li className='nav-item'><a href='#'>CONTACT </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
