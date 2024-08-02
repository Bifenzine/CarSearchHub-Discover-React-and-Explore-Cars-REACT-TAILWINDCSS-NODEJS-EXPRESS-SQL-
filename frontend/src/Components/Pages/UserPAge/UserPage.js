import React, { useContext } from 'react'
import ProfileUser from '../../ProfileUser'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../UserContext/UserContext';
import UserCarCollection from '../../UserCarCollection';

const UserPage = () => {
    /*fetching the movie information*/
    const { id } = useParams();
    // console.log(useParams())

    const { user, setUser } = useContext(UserContext)

    return (
        <>
            <div className='grid justify-center items-center border-[2px] border-dashed border-indigo-500 mt-8  py-8 '>
                <div className=' flex justify-center items-center w-full '>

                    <ProfileUser
                        userData={user} />
                </div>
                <div className=' flex flex-wrap justify-center w-full border-[2px] border-slate-300 rounded-2xl shadow-xl items-center mt-[6rem] py-4 px-4 '>

                    <UserCarCollection
                        user_id={id}
                    />
                </div>
            </div>

        </>
    )
}

export default UserPage