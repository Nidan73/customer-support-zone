import './App.css'
import CustomerTicket from './Components/Body/CustomerTicket'
import ResolvedTask from './Components/Body/ResolvedTask'
import TaskStatus from './Components/Body/TaskStatus'
import Hero from './Components/Hero-section/Hero'
import { Suspense, useState } from 'react'
  import { ToastContainer } from 'react-toastify';

const ticketFetch = async () =>
{
   const res = await fetch('/ticket.json')
   return res.json();
}

const ticketData = ticketFetch(); 
function App() {
 const [clickData, setClick] = useState([])
 const [countProgress , setProgress] = useState(0)

 const handleRemove = (t) => {
   const filterTicket = clickData.filter(tic => tic.id !== t.id)
   setClick(filterTicket)
 }
  return (
    <>
     <Navbar></Navbar>
     <Hero countProgress = {countProgress}></Hero>
    <div className='max-w-550 mx-auto grid grid-cols-1 rounded-2xl mt-4 gap-3 md:grid-cols-3 '>
      <div className='md:col-span-2'>
        <Suspense fallback ={<span className="loading loading-spinner loading-xl"></span>}>
          <CustomerTicket setProgress ={setProgress} countProgress = {countProgress} clickData={clickData} setClick = {setClick} ticketData = {ticketData}></CustomerTicket>
        </Suspense>
      </div>
      <div className='md:col-span-1'>
     <TaskStatus setProgress ={setProgress} countProgress = {countProgress} handleRemove = {handleRemove} clickData={clickData}></TaskStatus>
     <ResolvedTask></ResolvedTask>
     </div>
     </div>
     <ToastContainer />

    </>
  )
}


function Navbar()
{
  return(
    <div className="navbar shadow-2xs bg-base-100">
  <div className='navbar justify-between max-w-550 mx-auto w-full'>
    
    <div className="font-bold">
      <a className="text-[1rem] md:text-xl">CS - Ticket System</a>
    </div>
    <div className="hidden md:flex flex-none text-lg font-semibold">
      <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
        <li>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 rounded text-white">
            + New Ticket
          </button>
        </li>
      </ul>
    </div>
    <div className="flex md:hidden">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
          <li>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 rounded text-white ">
              + New Ticket
            </button>
          </li>
        </ul>
      </div>
    </div>

  </div>
</div>
  )
}
export default App
