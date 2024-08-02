import React from 'react';

const ProfileUser = ({ userData }) => {


    return (
        <>
            <div className='flex relative flex-wrap justify-center items-center w-full  pb-[5rem] px-4'>
                <span className=' font-bold text-5xl px-16'>
                    Welcome to your profile <span className='text-indigo-500 animate-pulse'>{userData.Client_Surname} {userData.Client_Name}</span>
                </span >
                <div className='border-b-[2px] border-b-indigo-200 right-0 px-[13rem] absolute bottom-0 '></div>
                <div className=' absolute z-20 -bottom-[3.5rem] flex justify-center w-[7rem] h-[7rem] rounded-full'>
                    <img
                        className='w-full h-full object-cover rounded-full border-[0.3rem] border-indigo-500'
                        src={`../assets/images/userPic/${userData.Client_Pic}`}
                        alt='user pic'
                    />
                    <div className='absolute flex justify-center w-full -bottom-[1.7rem]'>
                        <span className='flex justify-center items-center font-bold text-lg text-nowrap'>
                            {userData.Client_Surname} {userData.Client_Name}
                        </span>
                    </div>
                </div>
                <div className='border-b-[2px] border-b-indigo-200 left-0 px-[13rem] absolute bottom-0 '></div>

            </div>

        </>
    )
}

export default ProfileUser