import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';

const navbar = () => {
    return (
        <div className=' h-16 bg-gray-800 flex justify-between px-14 py-4'>

            <div className='flex gap-4'>
                <div><img width={30} height={30} src="svgs/tea.svg" alt="img" /></div>
                <div className=' font-bold text-2xl text-white'>Get Me a Chai</div>
            </div>

            <div className=' cursor-pointer w-20 h-8 bg-purple-600 rounded-lg text-white font-semibold text-xl pl-3'>
              <Link href={'/login'}>  <button>Login</button></Link>
            </div>

        </div>
    );
}

export default navbar;
