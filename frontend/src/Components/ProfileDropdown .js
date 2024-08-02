import React, { useContext, useEffect, useRef, useState } from 'react';
import SignIn from './SignIn';
import { UserContext } from './UserContext/UserContext';
import { PersonTwoTone } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom'


const ProfileDropdown = ({ Logout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { user, setUser } = useContext(UserContext)

    const dropDownRef = useRef(null)

    const openModal = () => {
        setIsOpen(false)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {

        const handleClickOuntside = (event) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOuntside);
        return () => {
            document.removeEventListener('mousedown', handleClickOuntside)
        }

    }, [])

    const navigate = useNavigate()

    const logoutUser = () => {
        localStorage.removeItem('clientData')
        setUser(null)
        if (Logout) {
            Logout()
            navigate('/')
        }

    }

    const toggleDropdown = () => {
        if (!isOpen) {
            setIsOpen(!isOpen);
        } else {
            setIsOpen(false)
            closeModal()
        }
    };


    return (
        <>

            <div className="relative" ref={dropDownRef}>

                <div className='flex justify-center pl-2 items-center border gap-4 rounded-3xl w-fit shadow-sm'>
                    {/* {user && user.Client_Surname && (<button onClick={logoutUser} >Log out</button>)} */}
                    <div className='flex flex-wrap justify-center items-center cursor-pointer' onClick={user && user.Client_Surname ? toggleDropdown : openModal}>
                        <span className='px-2'>{user && user.Client_Surname ? user.Client_Surname : 'log in'}</span>
                        {user && user.Client_Surname
                            ?
                            <img
                                src={`../assets/images/userPic/${user.Client_Pic}`}
                                alt="Profile"
                                className="rounded-full h-11 w-11 cursor-pointer object-cover border-l"

                            />
                            :
                            <div className='px-2 py-2 border-l flex flex-wrap justify-center items-center'>

                                <PersonTwoTone />
                            </div>
                        }
                    </div>
                </div>
                {user && user.Client_Surname && isOpen && (
                    <div className="absolute z-30 top-[3.8rem] p-1 px-1 right-0 bg-white border rounded-lg shadow">

                        <div className='grid  '>
                            <Link to={`Profile/${user.Client_ID}`} >
                                <div className='hover:bg-slate-100 px-4 py-1 cursor-pointer' onClick={toggleDropdown}  > Profile</div>
                            </Link>
                            <div className='hover:bg-slate-100 px-4 py-1 cursor-pointer' onClick={logoutUser} > Log out</div>
                        </div>
                    </div>
                )}
            </div>
            <SignIn isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default ProfileDropdown;