import React from 'react';
import Task from './Task';

const TaskStatus = ({clickData,handleRemove,setProgress,countProgress}) => {
    return (
        <div className={`${clickData.length <= 0 && 'h-40'}`}>
            <h1 className='text-[24px] text-[#34485A]'>Task Status</h1>

            {
                clickData.length <= 0 ? <p className='text-[1rem] text-[#34485A]'>Select a ticket to add to Task Status</p>  : 
                <div className='mb-2.5'>{
                    clickData.map(data => <Task key={data.id} setProgress ={setProgress} countProgress = {countProgress} handleRemove = {handleRemove} data={data}></Task>)

                    }
                 </div>   
            }
            {
             
            }
        </div>
    );
};

export default TaskStatus;