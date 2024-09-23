import React from 'react';
import { useState, useEffect } from 'react';

function Display({id}) {
    const [projects, setProjects] = useState([]);

    // Fetching Data
    useEffect(()=>
        {
            if (id == null){
                async function fetchProjectsData(){
                    try {
                        const requeste = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
                        const response = await requeste.json();
                        if (requeste.status === 200){
                            setProjects(response);
                        }
                        else{
                            throw "There Is A Problem In Server..."
                        } 
                    }catch(error){
                        alert("Error: There Is A Problem In Server...", error);
                    }
                }
                fetchProjectsData();
            } else{
                async function fetchProjectsData(){
                    try {
                        const requeste = await fetch('https://jsonplaceholder.typicode.com/posts?userId='+id);
                        const response = await requeste.json();
                        if (requeste.status === 200){
                            setProjects(response);
                        }
                        else{
                            throw "There Is A Problem In Server..."
                        } 
                    }catch(error){
                        alert("Error: There Is A Problem In Server...", error);
                    }
                }
                fetchProjectsData();
            }
        },[id]);

    return (
        <div className='relative bg-gray-300'>
            <small className='absolute -top-9 left-2/4 -translate-x-2/3 px-4 py-1 rounded-t-lg capitalize font-medium text-balance text-orange-700 text-xs lg:text-base bg-gray-300'>this app is build just for large screens?</small>
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
        </div>
    )
}

export default Display