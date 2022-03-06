import React from 'react'
import {Link} from 'react-router-dom';

export const Navbar = ({darkTheme , setDarkTheme}) => {
  return (
    <div className='p-5 pb-5 flex flex-wrap sm:justify-between justify-center item-center border-b dark:border-gray-700 border-gray-200 lg:text-2xl md:text-lg sm:text-xs'>
        
    <div className='flex justify-between items-center space-x-5 w-screen'>

        <Link to="/">
            <p className='bg-green-500 px-2 py-1 font-bold text-white rounded dark:bg-gray-500 dark:text-gray-900 '>
             IQuran
            </p>
        </Link>
        <Link to="/infoQuran">
            <p className='hover:hover:shadow-lg'>
             Quran Info
            </p>
        </Link>
        <Link to="/Search">
            <p className='hover:hover:shadow-lg'>
             Search a word
            </p>
        </Link>
        <Link to="/Quran">
            <p className='hover:hover:shadow-lg'>
             Quran
            </p>
        </Link>
        <button type="button" onClick={()=> setDarkTheme(!darkTheme)} className = "dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg font-bold" >
            {darkTheme ? "Light ☀" : "Dark 🌙"}
        </button>
    </div>
    
    </div>
  );
}
