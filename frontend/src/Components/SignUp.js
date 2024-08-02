import React, { useContext, useEffect, useState } from "react";
import { SearchTermContext } from "../searchTermContext/SearchTermContext";
import Carcard from "./Carcard";
import { CarsContext } from "./carsContext/CarsContext";
import { CloseSharp } from "@mui/icons-material";
import CardsSearch from "./CardsSearch";
import SignUpForm from "./Forms/SignUpForm";

const SignUp = ({ isOpen, onClose }) => {

    //console.log(cars)



    const handleCloseModal = () => {

        onClose();
    }


    return (
        <div
            className={` absolute z-30 top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center ${isOpen ? "" : "hidden"
                }`}
        >
            <div className="bg-white rounded-lg py-8 px-[3rem] w-[27rem] relative ">
                <div className="flex items-center justify-center mb-4">
                    <div className="grid justify-center items-center gap-2">
                        <span className=' flex justify-center w-fit bg-transparent rounded-lg shadow-lg border-[3px] border-slate-600 items-center font-extrabold text-5xl'>
                            O
                            <h1 className='text-indigo-500 border-b-2 border-black  bg-transparent'>X</h1>
                            O
                        </span>
                        <h1 className='font-extrabold text-3xl animate-pulse shadow-2xl bg-neutral-50 w-fit border-b-2 border-black'>Sign Up</h1>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 w-[5rem] hover:text-gray-700 focus:outline-none absolute right-4 top-8"
                    >
                        <CloseSharp style={{ fontSize: 45 }} />
                    </button>
                </div>

                {/* Add your search results or additional content here */}
                <SignUpForm close={handleCloseModal} />

            </div>
        </div>
    );
};

export default SignUp;