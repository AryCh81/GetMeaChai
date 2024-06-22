"use client"

import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';


const page = () => {

    const { data: session } = useSession();

    if (session) {
        return (
            <>
                <div className=' flex gap-2'>
                    <div className=' cursor-pointer w-48 h-8 bg-purple-600 rounded-lg text-white font-semibold text-xl pl-3'>Signed in as {session.user.email}</div>
                    <div className=' cursor-pointer w-20 h-8 bg-purple-600 rounded-lg text-white font-semibold text-xl pl-3'><button onClick={() => signOut()}>SignOut</button></div>
                </div>
            </>
        );
    }
    else {
        return (

            <div className=' login-cont font-sans min-h-screen'>

                <div className=' text-white font-bold text-xl text-center my-8'>Login/SignUp to get Started</div>

                <div className=' flex flex-col gap-5 items-center justify-center'>
                    {/* 1 */}
                    <div className=' bg-white w-60 h-10 flex gap-2 rounded-md justify-center items-center cursor-pointer'>
                        <div><img width={25} height={25} src="svgs/google.svg" alt="img" /></div>
                        <div className=' font-semibold text-black'>Continue with Google</div>
                    </div>
                    {/* 2 */}
                    <div className=' bg-white w-60 h-10 flex gap-2 rounded-md justify-center items-center cursor-pointer'>
                        <div><img width={25} height={25} src="svgs/linkedin.svg" alt="img" /></div>
                        <div className=' font-semibold text-black'>Continue with Linkedin</div>
                    </div>
                    {/* 3 */}
                    <div className=' bg-white w-60 h-10 flex gap-2 rounded-md justify-center items-center cursor-pointer'>
                        <div><img width={25} height={25} src="svgs/twitter.svg" alt="img" /></div>
                        <div className=' font-semibold text-black'>Continue with Twitter</div>
                    </div>
                    {/* 4 */}
                    <div className=' bg-white w-60 h-10 flex gap-2 rounded-md justify-center items-center cursor-pointer'>
                        <div><img width={25} height={25} src="svgs/facebook.svg" alt="img" /></div>
                        <div className=' font-semibold text-black'>Continue with Facebook</div>
                    </div>
                    {/* 5 */}
                    <div onClick={() => signIn()} className=' bg-white w-60 h-10 flex gap-2 rounded-md justify-center items-center cursor-pointer'>
                        <div><img width={25} height={25} src="svgs/github.svg" alt="img" /></div>
                        <div className=' font-semibold text-black'>Continue with GitHub</div>
                    </div>
                    {/* 6 */}
                    <div className=' bg-white w-60 h-10 flex gap-2 rounded-md justify-center items-center cursor-pointer'>
                        <div><img width={25} height={25} src="svgs/apple.svg" alt="img" /></div>
                        <div className=' font-semibold text-black'>Continue with Apple</div>
                    </div>


                </div>

            </div>
        );
    };
}

export default page;
