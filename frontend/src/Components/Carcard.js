import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'
import HeartBrokenOutlined from '@mui/icons-material/HeartBrokenOutlined'
import CardsCaroussel from './CardsCaroussel/CardsCaroussel';
import ShareBtn from './ShareBtn/ShareBtn'




const Carcard = ({ id, name, marque, image, imagePath, image1, image2, image3, likes }) => {

    const [isOpen, setIsOpen] = useState(false);

    const [count, setCount] = useState(likes)

    const handleShowPopup = () => {
        if (likes === count) {

            setIsOpen(true)
            setTimeout(() => {
                setIsOpen(false);
            }, 1500);
        } else {
            setIsOpen(false)
        }
    }
    const handleLike = async () => {
        try {
            const newLikes = likes === count ? count + 1 : count - 1;
            const response = await fetch(`http://localhost:7000/updateLikes/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newLikes }),
            });
            if (response.ok) {
                setCount(newLikes);
                handleShowPopup();

            } else {
                console.error('Failed to update likes');
            }
        } catch (error) {
            console.error('Error updating likes:', error);
        }
    };


    return (
        <>
            <div className='w-[15rem] h-[13rem] no-underline text-black grid mb-4 border pb-1 rounded-xl shadow-md hover:translate-y-2 ease-linear transition-all'>
                <Link className='w-[15rem]' to={`Detail/${id}`} key={id}>
                    <Tooltip disableTouchListener title={`${marque} ${name}`}>
                        <div className='flex justify-center items-center w-full h-[8.5rem] '>
                            {/* <img className='w-full h-[8.5rem] rounded-t-xl  object-cover' src={imagePath} alt={`${image}`} /> */}
                            {/* <img className='w-full h-[8.5rem]  object-cover' src={`../${imagePath}`} alt={`${image}`} /> */}
                            {/* <img className='w-full h-[8.5rem]  object-cover  ' src={`.../assets/images/${image}`} alt={`${image}`} /> */}
                            <CardsCaroussel
                                img={imagePath}
                                img1={image1}
                                img2={image2}
                                img3={image3} />
                        </div>
                    </Tooltip>

                    <div className=' flex items-center w-full border'>
                        <span className='w-full'>{marque}</span>
                        <span className='w-full border bg-slate-950 text-white rounded-md'>{name}</span>
                    </div>


                </Link>
                <div className='w-full flex justify-between items-center gap-2 px-2 '>
                    {/* <span className='cursor-pointer'>Share it  <ShareRounded /></span> */}
                    <ShareBtn
                        id_Car={id} />
                    <span className='cursor-pointer' onClick={handleLike}><HeartBrokenOutlined className={likes === count ? 'animate-pulse ' : 'text-indigo-600'} />{count} </span>

                </div>
            </div>

            {isOpen && (
                <div className="fixed bottom-[4rem] w-full borde text-white left-0 right-0 flex items-end justify-center">
                    <div className="bg-indigo-600 border shadow-indigo-500 px-4 py-4 rounded-3xl  shadow-lg transform translate-y-1/2 transition-transform duration-500">
                        <p className="font-bold">You liked {marque} : {name} </p>
                    </div>
                </div>
            )}
            {/* <div className='absolute bottom-4 px-4 right-60 py-4 flex flex-wrap justify-center items-center w-[50rem]'>
                <div className={likes === count ? '  text-center transition-opacity opacity-0 hidden rounded-xl flex-wrap justify-center items-center z-30 shadow-lg w-[19rem] h-[6rem] border '
                    : ' bottom-12 left-[33rem] px-4 py-1 transition-opacity shadow-indigo-600 rounded-3xl bg-indigo-500 text-white flex flex-wrap justify-center items-center z-30 shadow-lg w-fit h-[3rem] border'}>
                    <span>{likes === count ?
                        <span></span>
                        : <span>You liked {marque}: {name}</span>}
                    </span>
                </div>
            </div> */}




            {/* {
                likes === count ? null :

                    <Alert
                        className='absolute bottom-12 right-1/2 ' id='alert' variant='outlined' severity='success'>
                        You liked {marque}: {name}

                    </Alert>

            } */}

        </>
    )
}

export default Carcard