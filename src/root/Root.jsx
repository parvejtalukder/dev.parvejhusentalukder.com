import React, { useEffect, useRef } from 'react';
import Header from '../components/header/Header';
import { NavLink, Outlet } from 'react-router';
import Footer from '../components/footer/Footer';

import Lenis from '@studio-freight/lenis';

const Root = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 0.4,       
      easing: (t) => t,    
      smooth: true,        
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />

      <div className='max-w-6xl mx-auto px-10 flex flex-col lg:gap-5'>
        <main className='py-12'>
          <Outlet />
        </main>
        <div className='flex justify-center items-center'>
            <div className="tabs tabs-box border-2 border-blue-500 rounded-2xl lg:w-auto w-full flex justify-center items-center">
              <NavLink to={"/stack"}><input type="radio" name="my_tabs_1" className="tab" aria-label="Stack" /></NavLink>
              <NavLink to={"/"}><input type="radio" name="my_tabs_1" className="tab" aria-label="Home" defaultChecked /></NavLink>
              <NavLink to={"/project"}><input type="radio" name="my_tabs_1" className="tab" aria-label="Project" /></NavLink>
            </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Root;