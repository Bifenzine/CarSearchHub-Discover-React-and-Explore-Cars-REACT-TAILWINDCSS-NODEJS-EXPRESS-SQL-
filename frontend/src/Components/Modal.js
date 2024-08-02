import React, { useContext, useEffect } from "react";
import { SearchTermContext } from "../searchTermContext/SearchTermContext";
import { CarsContext } from "./carsContext/CarsContext";
import { CloseSharp } from "@mui/icons-material";
import CardsSearch from "./CardsSearch";

const Modal = ({ isOpen, onClose }) => {
    const { searchValue, setSearchValue } = useContext(SearchTermContext)
    const { cars, setCars } = useContext(CarsContext)

    //console.log(cars)

    useEffect(() => {
        fetch("http://localhost:7000/supercars")
            .then((res) => res.json())
            .then((data) => {
                setCars(data.filter((datas) => datas.Car_Marque.toLowerCase().includes(searchValue) || datas.Car_Name.toLowerCase().includes(searchValue)));
                // console.log(data)
            });

    }, [searchValue])

    const handleCloseModal = () => {
        setSearchValue('');
        onClose();
    }

    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <div
            className={` absolute z-30 top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center ${isOpen ? "" : "hidden"
                }`}
        >
            <div className="bg-white rounded-lg py-8 px-[3rem] w-[55rem] ">
                <div className="flex items-center justify-between mb-4">
                    <span className=' flex justify-center w-fit bg-transparent rounded-lg shadow-lg border-[3px] border-slate-600 items-center font-extrabold text-5xl'>
                        O
                        <h1 className='text-indigo-500 border-b-2 border-black  bg-transparent'>X</h1>
                        O
                    </span>
                    <h1 className='font-extrabold text-4xl animate-pulse shadow-2xl bg-neutral-50 w-fit border-b-2 border-black'>SEARCH</h1>
                    <button
                        onClick={onClose}
                        className="text-gray-500 w-[5rem] hover:text-gray-700 focus:outline-none"
                    >
                        <CloseSharp style={{ fontSize: 30 }} />
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchValue}

                    onChange={handleSearchInputChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
                />
                {/* Add your search results or additional content here */}
                <div className="flex flex-wrap justify-start items-center overflow-y-auto max-h-[400px] ">
                    {/* {cars.map(car => (
                        <Carcard
                            id={car.Car_ID}
                            key={car.Car_ID}
                            name={car.Car_Name}
                            marque={car.Car_Marque}
                            imagePath={`/assets/images/${car.Car_img}`}
                            image={car.Car_img}
                            likes={car.Car_likes}


                        />

                    ))} */}
                    {cars.map(car => (
                        <CardsSearch
                            id={car.Car_ID}
                            key={car.Car_ID}
                            name={car.Car_Name}
                            marque={car.Car_Marque}
                            imagePath={`/assets/images/${car.Car_img}`}
                            image={car.Car_img}
                            likes={car.Car_likes}
                            onCloseModal={handleCloseModal}




                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;