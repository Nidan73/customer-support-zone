import React from 'react';
import { toast } from 'react-toastify';

const Task = ({data,handleRemove,setProgress,countProgress}) => {
    const handleClick = (d) =>{
            handleRemove(d);
            const update = countProgress-1;
            setProgress(update)
            toast("Task Completed")
    }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title text-xl mb-2">{data.title}</h2>
      <button onClick={()=>
        handleClick(data)
      } className="btn btn-success">Completed</button>
  </div>
</div>
            <h1 className='text-2xl'></h1>
        </div>
    );
};

export default Task;


// createdAt
// : 
// "2025-01-07"
// customer
// : 
// "Michael Smith"
// description
// : 
// "Customer would like a dark mode option for better usability at night."
// id
// : 
// 3
// priority
// : 
// "Low"
// status
// : 
// "Open"
// title
// : 
// "Feature request: Dark mode"