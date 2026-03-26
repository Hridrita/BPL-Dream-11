import React from 'react';
import bannerImg from "../../assets/banner-main.png";

const Banner = () => {
    return (
        <div className='min-h-screen bg-[#131313] py-10 flex flex-col justify-center items-center text-center space-y-6'>
            <img className='items-center' src={bannerImg}></img>
            <h1 className='text-white text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h4 className='text-gray-400 text-lg'>Beyond Boundries Beyond Limits</h4>
            <div className="border border-[#E7FE29] p-2 rounded-2xl">
                    <button className="btn bg-[#E7FE29] hover:bg-[#d4e924] border-none font-bold rounded-xl px-6">
                        Claim Free Credit
                    </button>
                </div>
        </div>
    );
};

export default Banner;