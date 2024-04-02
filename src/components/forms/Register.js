import React, { useState } from 'react';

export default function Register() {
    const [request, requestChange] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = request;

    const handleChange = (e) => {
        requestChange({ ...request, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.table(request.name);
        console.table(request.email);
        console.table(request.password);
    }

    return (
        <div className='divide-y divide-dashed'>
            <div className='columns-1 border-slate-100 bg-slate-900 shadow-lg p-3'>
                <form action='' onSubmit={onSubmit}>
                    <div className='grid grid-cols-4 gap-4'>

                        <div className=''>
                            <input className="p-1 rounded-2xl border border-slate-100 w-10/12 bg-transparent text-slate-100" onChange={handleChange} type='text' name='name' placeholder='enter name' />
                            <p className='text-slate-100'>{name}</p>
                        </div>
                        <div className=''>
                            <input className="p-1 rounded-2xl border border-slate-100 w-10/12 bg-transparent text-slate-100" onChange={handleChange} name='email' placeholder='enter email' />
                            <p className='text-slate-100'>{email}</p>
                        </div>
                        <div className=''>
                            <input className="p-1 rounded-2xl border border-slate-100 w-10/12 bg-transparent text-slate-100" onChange={handleChange} type='password' name='password' placeholder='enter password' />
                            <p className='text-slate-100'>{password}</p>
                        </div>
                        <div className=''>
                            <button className='px-4 py-2 bg-indigo-500 rounded-md text-white'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='columns-1 border-slate-100 bg-slate-900 shadow-lg p-3'>
                <form action='' onSubmit={onSubmit}>
                    <div className='grid grid-cols-4 gap-4'>

                        <div className=''>
                            <input className="p-1 rounded-2xl border border-slate-100 w-10/12 bg-transparent text-slate-100" onChange={handleChange} type='text' name='name' placeholder='enter name' />
                            <p className='text-slate-100'>{name}</p>
                        </div>
                        <div className=''>
                            <input className="p-1 rounded-2xl border border-slate-100 w-10/12 bg-transparent text-slate-100" onChange={handleChange} name='email' placeholder='enter email' />
                            <p className='text-slate-100'>{email}</p>
                        </div>
                        <div className=''>
                            <input className="p-1 rounded-2xl border border-slate-100 w-10/12 bg-transparent text-slate-100" onChange={handleChange} type='password' name='password' placeholder='enter password' />
                            <p className='text-slate-100'>{password}</p>
                        </div>
                        <div className=''>
                            <button className='px-4 py-2 bg-indigo-500 rounded-md text-white'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='columns-1 border-b border-slate-100 bg-slate-900 shadow-lg p-3'>
                <form action='' onSubmit={onSubmit}>
                    <div className='grid grid-cols-4 gap-4'>

                        <div className=''>
                            <input className="p-1 rounded-2xl border border-slate-100 w-10/12 bg-transparent text-slate-100" onChange={handleChange} type='text' name='name' placeholder='enter name' />
                            <p className='text-slate-100'>{name}</p>
                        </div>
                        <div className=''>
                            <input className="p-1 rounded-2xl border border-slate-100 w-10/12 bg-transparent text-slate-100" onChange={handleChange} name='email' placeholder='enter email' />
                            <p className='text-slate-100'>{email}</p>
                        </div>
                        <div className=''>
                            <input className="p-1 rounded-2xl border border-slate-100 w-10/12 bg-transparent text-slate-100" onChange={handleChange} type='password' name='password' placeholder='enter password' />
                            <p className='text-slate-100'>{password}</p>
                        </div>
                        <div className=''>
                            <button className='px-4 py-2 bg-indigo-500 rounded-md text-white'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="h-screen flex justify-center items-center space-x-3 bg-slate-900">

                <div className='text-center space-y-1 bg-slate-900 p-6 rounded-lg shadow-lg border border-slate-400'>
                    <p className='text-xl text-sky-400'>Welcome to </p>
                </div>

                <div className='text-center space-y-1 bg-slate-900 p-6 rounded-lg shadow-lg border border-slate-100'>
                    <p className='text-lg text-sky-400'>Learn with <span className='text-red-500 text-xl'>Shah Alam</span></p>
                </div>

                <div className='text-center space-y-1 bg-slate-900 p-6 rounded-lg shadow-lg border border-slate-400'>
                    <button className='border px-2 py-1 rounded-xl text-sm text-sky-400'>View More</button>
                </div>

            </div>
        </div>
    )
}
