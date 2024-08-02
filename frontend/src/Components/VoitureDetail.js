import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import Carousel from './Carousel';
import SlickCaroussel from './SlickCaroussel/SlickCaroussel';
// import Like from './Like';



const VoitureDetail = () => {
    /*fetching the movie information*/
    const { id } = useParams();
    // console.log(useParams())


    const [carDetails, setCarDetails] = useState([])

    useEffect(() => {
        fetch(`http://localhost:7000/Detail_Car/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCarDetails(data);
                //console.log(data)
            });

    }, [id])


    return (
        <>
            <div className='flex flex-wrap justify-center px-10 items-start  w-full mt-4'>

                {/* <Carousel
                    id={carDetails.Car_ID}
                    key={carDetails.Car_ID}
                    name={carDetails.Car_Name}
                    marque={carDetails.Car_Marque}
                    image={carDetails.Car_img}
                    imagePath={`/assets/images/${carDetails.Car_img}`}
                    imagePath1={`/assets/images/${carDetails.img1}`}
                    imagePath2={`/assets/images/${carDetails.img2}`}
                    imagePath3={`/assets/images/${carDetails.img3}`}


                /> */}

                <SlickCaroussel
                    id={carDetails.Car_ID}
                    key={carDetails.Car_ID}
                    name={carDetails.Car_Name}
                    marque={carDetails.Car_Marque}
                    image={carDetails.Car_img}
                    imagePath={`/assets/images/${carDetails.Car_img}`}
                    imagePath1={`/assets/images/${carDetails.img1}`}
                    imagePath2={`/assets/images/${carDetails.img2}`}
                    imagePath3={`/assets/images/${carDetails.img3}`}
                />


                <div className='flex flex-wrap justify-between items-center border-2 px-8 py-2 w-full  mb-12 shadow-lg'>
                    <div className='grid justify-center items-center'>
                        <span className='border-b-2'>Nom du client</span>
                        <span>{carDetails.Client_Name}</span>
                    </div>
                    <div className='grid justify-center items-center'>
                        <span className='border-b-2'>Nom de voiture</span>
                        <span>{carDetails.Car_Marque} {carDetails.Car_Name}</span>
                    </div>
                    <div className='grid justify-center items-center'>
                        <span className='border-b-2'>Couleur</span>
                        <span>{carDetails.Car_Color}</span>
                    </div>
                    <div className='grid justify-center items-center'>
                        <span className='border-b-2'>Categorie</span>
                        <span>{carDetails.Categorie_Name}</span>
                    </div>
                    <div className='grid justify-center items-center'>
                        <span className='border-b-2'>Matricule</span>
                        <span className=''>{carDetails.Car_Matricule}</span>

                    </div>

                </div>


            </div>
        </>
    )
}

export default VoitureDetail