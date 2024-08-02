import React, { useContext, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Carcard from './Carcard'
import { SearchTermContext } from '../searchTermContext/SearchTermContext'
import { CarsContext } from './carsContext/CarsContext'

const Test = () => {
  ////  exemple of null ////////////
  const { searchValue, setSearchValue } = useContext(SearchTermContext)

  // const [cars, setCars] = useState(null)
  const { cars, setCars } = useContext(CarsContext)



  useEffect(() => {
    fetch("http://localhost:7000/supercars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data.filter((datas) => datas.Car_Marque.toLowerCase().includes(searchValue) || datas.Car_Name.toLowerCase().includes(searchValue)));
        // console.log(data)
      });

  }, [searchValue])

  if (cars == null)

    return (
      <CircularProgress className='absolute z-30 mx-auto top-1/2 right-1/2' />
    )
  else {
    return (
      <>
        <div className='flex flex-wrap justify-between w-full  border-2 rounded-md mt-4  shadow-lg px-12  pt-4 pb-8 gap-2'>

          <div className='w-full font-extrabold text-6xl mb-6 animate-pulse'><h1 className='shadow-2xl bg-neutral-50 w-fit border-b-2 border-black'>NEW ARRI<span className='text-indigo-600'>VALS</span></h1></div>
          {cars.map(car => (
            <Carcard
              id={car.Car_ID}
              key={car.Car_ID}
              name={car.Car_Name}
              marque={car.Car_Marque}
              imagePath={`/assets/images/${car.Car_img}`}
              image1={`/assets/images/${car.img1}`}
              image2={`/assets/images/${car.img2}`}
              image3={`/assets/images/${car.img3}`}
              image={car.Car_img}
              likes={car.Car_likes}


            />
          ))}


        </div>

        {/* premiere version */}
        {/* <Popup
          name={cars.Car_Name}
          marque={cars.Car_Marque}
        /> */}
      </>
    )
  }


}

export default Test