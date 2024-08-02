import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Carcard from './Carcard';
import { SearchTermContext } from '../searchTermContext/SearchTermContext';
import CircularProgress from '@mui/material/CircularProgress'



const Categorie = () => {

    /*fetching the movie information*/
    const { id } = useParams();
    // console.log(useParams())
    const { searchValue, setSearchValue } = useContext(SearchTermContext)

    const [categorieData, setCategorieData] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:7000/bycategories/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCategorieData(data);
                // console.log(data)
            });

    }, [id, searchValue])

    if (categorieData == null)

        return (
            <CircularProgress className='absolute mx-auto top-1/2 right-1/2' />
        )
    else {

        return (
            <>
                <div className='flex flex-wrap justify-between w-full  border-2 rounded-md mt-4  shadow-lg px-12  pt-4 pb-8 gap-2'>
                    <div className='w-full font-extrabold text-6xl mb-6 animate-pulse'><h1 className='shadow-2xl bg-neutral-50 w-fit border-b-2 border-black'>{categorieData.Categorie_Name}</h1></div>
                    <Carcard
                        id={categorieData.Car_ID}
                        key={categorieData.Car_ID}
                        name={categorieData.Car_Name}
                        marque={categorieData.Car_Marque}
                        imagePath={`/assets/images/${categorieData.Car_img}`}
                        image1={`/assets/images/${categorieData.img1}`}
                        image2={`/assets/images/${categorieData.img2}`}
                        image3={`/assets/images/${categorieData.img3}`}
                        image={categorieData.Car_img}
                        likes={categorieData.Car_likes}

                    />
                </div>
            </>
        )
    }
}

export default Categorie