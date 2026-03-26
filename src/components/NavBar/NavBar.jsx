import React from 'react';
import dollerImg from "../../assets/dollar-1.png"
import logoImg from "../../assets/logo.png"

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <img src={logoImg}></img>
  </div>
  <div className="flex justify-between gap-3">
    <div className='flex justify-between gap-8 mt-2'>
        <h3>Home</h3>
        <h3>Fixture</h3>
        <h3>Teams</h3>
        <h3>Schedules</h3>
    </div>
    <button className="btn btn-outline border-gray-200 rounded-xl flex gap-2 font-bold hover:bg-transparent hover:text-black">
  <span>0 Coin</span>
  <img src={dollerImg} alt="coin icon" className="w-6 h-6" />
</button>
  </div>
</div>
        </div>
    );
};

export default NavBar;