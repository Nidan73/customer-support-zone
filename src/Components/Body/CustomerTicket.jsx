import React, { use } from 'react';
import Ticket from './Ticket';
const CustomerTicket = ({ticketData}) => {
   const TicketData = use(ticketData) ;
    return (
        <div className=''>
          <h1 className='text-[24px] text-[#34485A]'>Customer Tickets</h1>
         <div className='grid grid-cols-2 gap-2'> {
            TicketData.map(ticket => <Ticket ticket = {ticket}></Ticket>)
          }
          </div>
        </div>
    );
};

export default CustomerTicket;



