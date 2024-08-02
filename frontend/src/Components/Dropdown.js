import React, { useEffect, useRef, useState } from 'react';
import ArrowDropUpOutlined from '@mui/icons-material/ArrowDropUpOutlined'
import ArrowDropDownOutlined from '@mui/icons-material/ArrowDropDownOutlined'
import { Link } from 'react-router-dom';



const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dropDownRef = useRef(null)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [categories, setCategories] = useState("")

    useEffect(() => {
        fetch("http://localhost:7000/Categories")
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
                // console.log(data)
            });

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





    return (
        <div className="relative inline-block w-full text-left text-black shadow-md bg-white border-x-slate-950  rounded-md" ref={dropDownRef}>
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md  p-2 px-4  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50  focus:ring-offset-gray-100"
                    onClick={toggleDropdown}
                >
                    Categories {!isOpen ?
                        // <svg
                        //     className="-mr-1 ml-2 h-5 w-5"
                        //     xmlns="http://www.w3.org/2000/svg"
                        //     viewBox="0 0 20 20"
                        //     fill="currentColor"
                        //     aria-hidden="true"
                        // >
                        //     <path
                        //         fillRule="evenodd"
                        //         d="M10 12l-8-8 1.5-1.5L10 9.999 16.5 2.5 18 4l-8 8z"
                        //         clipRule="evenodd"
                        //     />
                        // </svg> 
                        <ArrowDropDownOutlined />
                        :
                        <ArrowDropUpOutlined />}

                </button>
            </div>

            {isOpen && (
                <div className="origin-top-right absolute z-50 -right-8 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    {categories.map(categorie => (
                        <Link className='no-underline font-medium' to={`categorie/${categorie.Categorie_ID}`} key={categorie.Categorie_ID} >
                            <div className="py-1 px-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <button
                                    type="button"
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    role="menuitem"
                                >
                                    {categorie.Categorie_Name}
                                </button>

                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;