import React from 'react';
import Resolve from './Resolved';
const ResolvedTask = ({setResolved,resolved}) => {
    return (
        <div>
             <h1 className='text-[24px] text-[#34485A]'>Resolved Task</h1>

             {
                resolved.length <= 0 ? <p className='text-[1rem] text-[#34485A]'>Complete Task to Add Here</p>  : 
                <div className='mb-2.5'>{
                    resolved.map(data => <Resolve key={data.id} setResolved ={setResolved} data={data}></Resolve>)
                    }
                 </div>   
            }
        </div>
    );
};

export default ResolvedTask;