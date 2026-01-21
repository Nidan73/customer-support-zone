import React from 'react';
import icon1 from '../../assets/Ellipse22.png'
import cal from '../../assets/Vector3.png'
import icon2 from '../../assets/Ellipse23.png'
import { toast } from 'react-toastify';

const Ticket = ({ticket, setClick ,clickData , setProgress , countProgress}) => {
    const priorityColor = {
  Low: "text-green-500",
  Medium: "text-yellow-500",
  High: "text-orange-500",
  Critical: "text-red-500"
};

const buttonColor = {
    Open : "bg-green-200",
    InProgress : "bg-yellow-200" ,
};
const handleClick = (ticket) => {
    setClick([...clickData,ticket]);
    const increase = countProgress +1 ;
    setProgress(increase);
    toast("Added to Task Status Bar");
} 
    return (
        <div>
        <div  onClick={()=>handleClick(ticket)

        } className="card mt-4 bg-base-100 md:w-140 h-40 shadow-sm">
  <div className="card-body">
    <div className='flex items-center justify-between'>
    <h2 className="card-title text-[15px]">{ticket.title}</h2>
    <h3 className={`p-3 flex items-center gap-2 rounded-[400px] font-bold ${buttonColor[ticket.status] || ""}`}><img src={ticket.status === "InProgress" ? icon2 : icon1} alt="" />{ticket.status}</h3>
    </div>
    <p className='text-gray-500  text-[0.8rem] line-clamp-1 mb-0.5'>{ticket.description}</p>
    <div className='flex items-center justify-between text-[#627382]'>
        <div className='flex gap-2 mt-2'>
            <p>#10{ticket.id < 10 ? `0${ticket.id}` : ticket.id}</p>
            <p className={priorityColor[ticket.priority] || ""}>{ticket.priority}</p>
        </div>
        <div className='flex gap-4'>
            <p>{ticket.customer}</p>
            <p className='flex gap-1 text-[#627382]'><img src={cal}/>{ticket.createdAt}</p>
        </div> 
    </div>
  </div>
</div>
        </div>
    );
};

export default Ticket;