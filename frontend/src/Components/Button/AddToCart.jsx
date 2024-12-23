import React from 'react'

function AddToCart() {
    return (
        <div>
            <div className="relative group">
                {/* Button */}
                <div
                    data-tooltip="Price: $20"
                    className="relative w-[100px] h-[35px] bg-gray-800 text-white rounded-md flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-300"
                >
                    {/* Text */}
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:translate-y-[-100%]">
                        Buy Now
                    </div>
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0">
                        <svg
                            viewBox="0 0 16 16"
                            className="bi bi-cart2"
                            fill="currentColor"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                        </svg>
                    </div>
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-[75px] left-1/2 transform -translate-x-1/2 w-[90px] h-[35px] bg-gray-700 text-white text-sm rounded-md flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                    Price: $20
                    <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-gray-700"></div>
                </div>
            </div>
        </div>
    )
}

export default AddToCart