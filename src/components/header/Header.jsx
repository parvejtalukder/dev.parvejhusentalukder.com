import React from 'react';
import { Link } from 'react-router';

const Header = () => {

    const links = <>
        <Link>Home</Link>
        <Link>Projects</Link>
        <Link>Skills</Link>
        <Link>Contact</Link>
    </>


    return (
        <div className="max-w-6xl mx-auto mt-8 bg-base-300 sticky top-8 flex justify-between items-center rounded-xl p-4 shadow-md z-50">
          {/* <button className="btn btn-ghost text-xl">daisyUI</button> */}
          <div className='pl-2'>
            <img src="https://parvejhusentalukder.com/wp-content/uploads/2026/01/PHT.png" alt="pht();" className='w-10 h-full animate-pulse' />
          </div>
          <nav>
            <ul className='flex justify-around items-center gap-5 pr-2'>
                {
                    links
                }
            </ul>
          </nav>
        </div>
    );
};

export default Header;