import React from 'react';
import DashList from './DashList';


function Dashboard() {
  return (
    <div className='absolute text-white'>
      <div className="relative container">
        <div className="grid grid-cols-4 gap-6 p-8">
              {DashList.map((item)=> 
                <article key={item.id} id={item.id} className="col-span-4 md:col-span-2 lg:col-span-1 py-4 px-8 flex items-center justify-between bg-white text-darkBlack rounded-xl shadow shadow-2xl">
                    <div className='py-2'>
                      <h3 className='text-2xl font-semibold'>{item.count}</h3>
                      <small className='text-lg text-darkGray font-medium capitalize py-2'>{item.title}</small>
                    </div>
                      {item.svg}
                </article>
              )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard