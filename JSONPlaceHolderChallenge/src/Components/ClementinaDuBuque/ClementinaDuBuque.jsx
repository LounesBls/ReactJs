import React, { useEffect, useState } from 'react'


function ClementinaDuBuque() {
  const [projects, setProjects] = useState([]);

    useEffect(()=>
        {
            
            async function fetchProjectsData(){
                try {
                    const requeste = await fetch('https://jsonplaceholder.typicode.com/posts?userId=10');
                    const response = await requeste.json();
                    if (requeste.status === 200){
                        
                        setProjects(response)
                    }
                    else{
                        throw "There Is A Problem In Server..."
                    } 
                }catch(error){
                    alert("Error: There Is A Problem In Server...", error);
                }
            }
            fetchProjectsData();
        },[]);
    return (
        <ul>
                {
                    projects.map(pro => 
                        <li key={pro.id} id={pro.id} className='flex flex-col capitalize font-medium px-2 py-1 border border-2 border-gray-700 rounded-lg mb-2'>
                            {pro.title}
                            <hr className='border border-t-2 border-black'/>
                            <span className=' text-xs'>{pro.body}</span>
                        </li>
                    )
                }
        </ul>
    )
}

export default ClementinaDuBuque