import React, { useState } from 'react';

function SignUpForm({ close }) {

    return (
        <div className='flex flex-wrap justify-center items-center'>
            <form className='grid justify-start items-start ' >
                <span className='flex flex-wrap justify-start items-center'>Email :</span>
                <input className='py-2 rounded-md shadow-md border px-2 mb-4 w-[20rem]' type="email" name="email" placeholder="Email" required />
                <span className='flex flex-wrap justify-start items-center'>Password :</span>
                <input className='py-2 rounded-md shadow-md border px-2 mb-4 w-[20rem]' type="password" name="password" placeholder="Password" required />
                <button className='py-2 px-2 rounded-lg shadow-md border hover:bg-indigo-900 bg-indigo-500 text-white' onClick={close} type="submit">Connect</button>
            </form>
        </div>
    );
}

export default SignUpForm;