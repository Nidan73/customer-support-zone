import React from 'react';
import '../../App.css'
const Hero = ({countProgress,countResolved}) => {
    return (
        <div className=' flex flex-col  md:flex-row items-center justify-between gap-2 max-w-550 mx-auto'>
          <div className= {`bg-hero1 w-full md:w-350 md:h-62.5 p-10 rounded-xl flex flex-col justify-center items-center`}>
                           <h1>In-Progress</h1>
                           <h1 className='text-5xl'>{countProgress}</h1>
          </div>  
          <div className='bg-hero2 w-full md:w-350 md:h-62.5 p-10 rounded-xl flex flex-col justify-center items-center'>
            <h1>Resolved</h1>
            <h1 className='text-5xl'>{countResolved}</h1>

          </div>  
        </div>
    );
};

export default Hero;