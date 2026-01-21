import React from 'react';

const Hero = () => {
    return (
        <div className=' flex flex-col md:flex-row items-center justify-between gap-2 max-w-550 mx-auto'>
          <div className='w-350 h-62.5 p-10 rounded-2 flex flex-col justify-center items-center bg-amber-700'>
                           <h1>In-Progress</h1>
                           <h1 className='text-5xl'>0</h1>
          </div>  
          <div className='w-350 h-62.5 p-10 rounded-2 flex flex-col justify-center items-center bg-amber-700'>
            <h1>Resolved</h1>
            <h1 className='text-5xl'>0</h1>

          </div>  
        </div>
    );
};

export default Hero;