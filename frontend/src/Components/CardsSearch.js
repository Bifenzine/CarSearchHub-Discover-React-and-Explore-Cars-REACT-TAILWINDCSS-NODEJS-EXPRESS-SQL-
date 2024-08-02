import React from 'react'
import { Link } from 'react-router-dom'


const CardsSearch = ({ id, name, marque, image, imagePath, likes, onCloseModal }) => {

    const handleCardClickToCloseModal = () => {
        onCloseModal();
    }



    return (
        <>
            <Link to={`Detail/${id}`} onClick={handleCardClickToCloseModal}  >
                <div className='flex flex-wrap justify-start items-center text-start w-[16rem] rounded-md shadow-md border  py-2 px-3' >
                    <div className='w-[4rem] h-[4rem]  '>
                        <img className='w-full h-full border-[2px] object-cover rounded-lg' src={imagePath} alt={image} />
                    </div>
                    <div className='grid justify-start items-center px-2 py-2'>
                        <span>{marque}</span>
                        <span>{name}</span>
                    </div>
                </div>
            </Link>

        </>
    )
}

export default CardsSearch
