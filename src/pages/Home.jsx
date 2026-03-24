import React from 'react';
import { TextEffectOne } from 'react-text-animate';

const Home = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex flex-col justify-center items-start gap-3 flex-1'>
                {/* text */}
                    <h4 className='font-bold px-4 py-2 border-[1px] border-blue-500 text-sm bg-red-500/10  text-center rounded-full'>WELCOME TO MY UNIVERSE</h4>
                    <p className='font-bold text-6xl'>Building <br /> <span className='text-blue-500'><TextEffectOne text="Web apps" animateOnce={false} /></span></p>
                    <p className='text-xl'>I’m <span className='text-blue-400 animate-pulse font-bold'>Parvej Husen Talukder</span>, a passionate Full-Stack Developer dedicated to building high-performance, user-centric web applications that leave a lasting impact.</p>
                    <section>
                        <button>Hire Me</button>
                        <button>Resume</button>
                    </section>
            </div>
            <div className='flex-1'>
                {/* img  */}
            </div>
        </div>
    );
};

export default Home;