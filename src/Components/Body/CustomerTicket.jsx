import React, { use } from 'react';
import Ticket from './Ticket';
const CustomerTicket = ({ticketData ,clickData ,setClick , countProgress , setProgress}) => {
   const TicketData = use(ticketData) ;
    return (
        <div className=''>
          <h1 className='text-[24px] text-[#34485A]'>Customer Tickets</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-2'> {
            TicketData.filter(ticket => ticket.status !== "Resolved")
            .map(ticket => 
            <Ticket key={ticket.id} countProgress ={countProgress} setProgress ={setProgress} setClick ={setClick} clickData={clickData} ticket = {ticket}></Ticket>)
          }
          </div>
        </div>
    );
};

export default CustomerTicket;



