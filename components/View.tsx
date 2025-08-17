import React from 'react'
import Ping from './ping';

interface ViewProps {
  id: string;
}

const View = ({ id }: {id:string}) => {
  return (
    <div className="flex justify-end items-center mt-5 fixed bottom-3 right-3">
         <div className='absolute -top-2 -right-2'>
            <Ping/>
         </div>
    
    <p className='font-medium text-[16px] bg-pink-200 px-4 py-2 rounded-lg capitalize'>
           <span className='font-black'>100 views</span>
    </p>

    </div>
  )
}

export default View