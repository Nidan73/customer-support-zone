import React from 'react';

const Resolved = ({data}) => {
    return (
        <div>
           {
            data.map(data =>
                 <div className='rounded-4xl'>
            <div className="card bg-base-100 w-96 shadow-sm mt-3">
                 <div className="card-body bg-green-100 ">
                   <h2 className="card-title text-xl mb-2">{data.title}</h2>
                     <button className="text-green-500 text-left text-xl font-bold">✓ Completed</button>
                    </div>
                    </div>
        </div>
            )
           }
        </div>
    );
};

export default Resolved;