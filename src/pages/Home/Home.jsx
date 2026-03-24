import React from 'react';
import { TextEffectOne } from 'react-text-animate';
import Terminal from '../../components/terminal/Terminal';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className='flex justify-between items-center gap-10'>
            <div className='flex flex-col justify-center items-start lg:gap-3 gap-6 flex-1'>
                {/* text */}
                    <h4 className='font-bold px-4 py-2 border-[1px] border-blue-500 text-sm bg-blue-500/10  text-center rounded-full'>WELCOME TO MY UNIVERSE</h4>
                    <div className='font-bold lg:text-6xl text-4xl'>Building <br /> <span className='text-blue-500'><TextEffectOne text="Web apps" animateOnce={false} /></span></div>
                    <p className='lg:text-xl text-md'>I’m <span className='text-blue-400 animate-pulse font-bold'>Parvej Husen Talukder</span>, a passionate Full-Stack Developer dedicated to building high-performance, user-centric web applications that leave a lasting impact.</p>
                    <section className='flex justify-center items-center gap-4'>
                        <Link to={"/contact"} className="btn text-xl rounded-2xl px-4 bg-blue-700 text-blue-100 font-bold hover:animate-pulse">
                        <TextEffectOne text="Hire Me" animateOnce={false} />
                        </Link>
                        <Link to={"/contact"} className="btn text-xl rounded-2xl px-4 bg-white text-blue-700 font-bold hover:animate-pulse">
                        <TextEffectOne text="Get Resume" animateOnce={false} />
                        </Link>
                    </section>
            </div>
            <div className='hover-3d hidden flex-1 lg:block' data-aos="fade-left">
                <Terminal></Terminal>
            </div>
        </div>
    );
};

export default Home;