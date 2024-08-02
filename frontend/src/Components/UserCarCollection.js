import React, { useEffect, useState } from 'react'
import Carcard from './Carcard'

const UserCarCollection = ({ user_id }) => {

    const [userCarCollection, setUserCarCollection] = useState([])

    useEffect(() => {
        fetch(`http://localhost:7000/userCarCollection/${user_id}`)
            .then(function(res){
                console.log(res)
                return res.json()
            })
            .then((data) => {
                setUserCarCollection(data);
                 console.log(data)
            });

    }, [user_id])
    return (
        <>
            <div className=' grid relative justify-start w-full items-center  '>
                <div className='flex justify-start w-full absolute top-0 border-b border-slate-300  items-center'>
                    <span className='font-semibold  text-3xl'>Car Collection</span>
                </div>
                <div className='flex justify-start  items-center gap-4 py-2 pt-12 rounded-lg'>
                    {userCarCollection.Car_ID ? <Carcard
                        id={userCarCollection.Car_ID}
                        key={userCarCollection.Car_ID}
                        name={userCarCollection.Car_Name}
                        marque={userCarCollection.Car_Marque}
                        imagePath={`/assets/images/${userCarCollection.Car_img}`}
                        image1={`/assets/images/${userCarCollection.img1}`}
                        image2={`/assets/images/${userCarCollection.img2}`}
                        image3={`/assets/images/${userCarCollection.img3}`}
                        image={userCarCollection.Car_img}
                        likes={userCarCollection.Car_likes}
                    /> : <span className='px-4 py-4 font-bold text-lg'>No car at the moment ...</span>}


                </div>
            </div>
        </>
    )
}

export default UserCarCollection