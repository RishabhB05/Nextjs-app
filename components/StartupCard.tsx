import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const StartupCard = ({post}: {post: StartupCardType}) => {
  
    //destructuring
    const { title, author, createdAt, views } = post;

    return (
    <div>
       <li className='bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100 group'>

          {/* for createdAt */}
           <div className='flex-between'>
                <p className='font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100'>
                    {formatDate(post.createdAt)}
                </p>

            {/* for views */}
                <div className='flex gap-1.5'>
                  <EyeIcon className='size-6 text-primary' /> 
                   <span className='font-medium text-[16px] text-black'>{post._views}</span>
                </div>
           

            {/* for author */}
                <div className='flex-between mt-5 gap-5'>
                    <div className='flex-1'>
                         <Link href = {`/user/${post.author?.id }`}>
                             <h3 className='font-medium text-[16px] text-black line-clamp-1'>{post.author?.name}</h3>
                         </Link>
                    </div>
                </div>           
            </div>
       </li>

    </div>
  )
}

export default StartupCard