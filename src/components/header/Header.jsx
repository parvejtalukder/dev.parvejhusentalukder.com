import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {

    const links = <>
        <NavLink target='_blank' className="text-sm lg:text-md" to={"https://github.com/parvejtalukder"}>GitHub</NavLink>
        <NavLink target='_blank' className="text-sm lg:text-md hidden lg:block" to={"https://codeforces.com/profile/parvejhusentalukder"}>CodeForces</NavLink>
        <NavLink target='_blank' className="text-sm lg:text-md hidden lg:block" to={"https://www.hackerrank.com/profile/parvejsunamganj"}>HackerRank</NavLink>
        <NavLink target='_blank' className="text-sm lg:text-md" to={"https://www.linkedin.com/in/parvejhusentalukder"}>LinkedIn</NavLink>
    </>


    return (
        <div className="max-w-6xl mx-auto lg:mt-8 bg-base-300/70 sticky top-0 lg:top-8 flex justify-between items-center rounded-xl p-4 shadow-md z-50">
          {/* <button className="btn btn-ghost text-xl">daisyUI</button> */}
          <Link to={"/"} className='pl-2'>
            <img src="https://parvejhusentalukder.com/wp-content/uploads/2026/01/PHT.png" alt="pht();" className='w-10 h-full animate-pulse' />
          </Link>
          <div>
            <ul className='flex justify-around items-center gap-3 pl-3'>
                {
                    links
                }
            </ul>
          </div>
        </div>
    );
};

export default Header;