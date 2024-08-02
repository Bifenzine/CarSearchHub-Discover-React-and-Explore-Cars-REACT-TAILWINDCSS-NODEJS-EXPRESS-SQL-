import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import { SearchTermContext } from '../searchTermContext/SearchTermContext'
import { Search } from '@mui/icons-material'
import Modal from './Modal'
import ProfileDropdown from './ProfileDropdown '
import { UserContext } from './UserContext/UserContext'


const Navbar = () => {
  const { setSearchValue } = useContext(SearchTermContext)

  const { setUser } = useContext(UserContext)

  // console.log(user)

  useEffect(() => {
    const storedUserData = localStorage.getItem('clientData')
    if (storedUserData) {
      setUser(JSON.parse(storedUserData))


    }
  }, [])


  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  const searchfunction = (e) => {
    setSearchValue(e.target.value)
  }

  const handleLogout = () => {
    localStorage.clear('clientData')
  }

  return (
    <>
      <div className=' flex justify-between items-center w-full px-8 flex-wrap  '>
        <div className='w-36  flex flex-wrap justify-center items-center  h-12'>
          <Link to={'/'} className='hover:animate-bounce duration-500 transition-all'>
            {/* <img className=' w-full h-fit object-cover ' src='../assets/images/font_blanc_couleur_noir.png' alt='logo' /> */}
            <span className=' flex justify-center w-fit bg-transparent rounded-lg shadow-lg border-[3px] border-slate-600 items-center font-extrabold text-5xl'>
              O
              <h1 className='text-indigo-500 border-b-2 border-black  bg-transparent'>X</h1>
              O
            </span>
          </Link>
        </div>
        <div className='w-[48rem] border flex-wrap gap-4 flex justify-around items-center py-[0.20rem] shadow-sm rounded-br-lg rounded-bl-lg  '>
          <Link className='p-2 m-2 hover:bg-gray-50  no-underline  w-[10rem] text-black font-medium shadow-md bg-white border-x-slate-950 rounded-md' to={''} >Home</Link>
          <div className=' no-underline hover:bg-gray-50 ' >
            <Dropdown />
          </div>
          <Link className='p-2 m-2 hover:bg-gray-50 no-underline w-[10rem] font-medium text-black shadow-md bg-white border-x-slate-950 rounded-md' to={''} >Contact</Link>
          <div className='w-[13rem]  px-1 py-1 rounded-sm  flex justify-start gap-2 '>
            <input className='p-2 rounded-sm w-[9rem]  shadow-md' type='text' placeholder='search here !!!' /*onClick={openModal}*/ onChange={searchfunction} />
            {/* <button className='border px-2 py-1  rounded-md shadow-md' type='button' >Search</button> */}
            <Search style={{ fontSize: 40 }} className='border  px-2 py-1  rounded-md shadow-md' onClick={openModal} />

          </div>
        </div>

        <ProfileDropdown

          Logout={handleLogout}
        // userPic={user.pic} 
        />

      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />



    </>
  )
}

export default Navbar