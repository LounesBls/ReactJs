import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

function SideBar(props) {
  const [users, setUsers] = useState([]);

  // Fetching Users Name And Email process.
  useEffect(()=>
    {
      async function fetchData (){
        try
        {
          const request = await fetch('https://jsonplaceholder.typicode.com/users')
          const response = await request.json();
          if (request.status === 200)
            {
                setUsers(response);
            } else {
              throw "There Is A Problem In Server..."  
            }
        }catch(error){
          alert("Error: There Is A Problem In Server...", error);
        }
      }
      fetchData();
    },[]);
  
  return (
    <aside className='py-4 px-4 rounded-l-lg border border-2 border-r-0 border-gray-400 bg-zinc-400'>
      <ul className=''>
        {
          users.map(user =>
            // <Link key={user.id} to={`/${user.id}`}>
            <Link key={user.id} to='/display'>
              <li id={user.id} onClick={(e)=>{props.takeId(user.id); e.target.closest('li').classList.toggle('active')}} className='flex flex-col min-w-[13rem] py-2 mb-2 px-4 bg-slate-200 rounded-lg hover:bg-white duration-300 cursor-pointer'>
                {user.name}
                <small>{user.email}</small>
              </li>
            </Link>
          )
        }
      </ul>
    </aside>
  )
}


export default SideBar