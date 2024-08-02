import React, { useState } from "react";

const Popup = ({ name, marque }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLikeClick = () => {
        setIsOpen(true);
        setTimeout(() => {
            setIsOpen(false);
        }, 2000);
    };

    return (
        <>
            <div className="absolute px-4 py-4 bottom-8 ">
                <button
                    onClick={handleLikeClick}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Like
                </button>
                {isOpen && (
                    <div className="fixed bottom-[4rem] text-white left-0 right-0 flex items-end justify-center">
                        <div className="bg-indigo-600 border shadow-indigo-500 px-4 py-4 rounded shadow-lg transform translate-y-1/2 transition-transform duration-500">
                            <p className="font-bold">Popup content here...</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Popup;