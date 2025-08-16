import { Search } from 'lucide-react';
import React from 'react';
import SearchForm from '../../components/SearchForm';
import { title } from 'process';
import StartupCard from '@/components/StartupCard';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

const Home = async ({ searchParams }: { searchParams: { query?: string } }) => {
    const query = (await searchParams).query;
    const posts = await client.fetch(STARTUPS_QUERY, { search: query });
      
    
  return (
    <>
      <section className="w-full min-h-[530px] bg-yellow-500 bg-[repeating-linear-gradient(to_right,white,white_0px,transparent_1px,transparent_60px)] flex justify-center items-center flex-col py-10 px-6">
        <div className="uppercase bg-black px-6 py-3 font-extrabold text-white sm:text-[3.375rem] sm:leading-[4rem] text-[2.25rem] leading-[2.875rem] max-w-5xl text-center my-5">
          Pitch Your Startup <br /> Connect with Entrepreneurs
        </div>

        <p className="font-bold text-lg text-white max-w-3xl text-center">
          Submit Ideas, Vote on Pitches, and Get Noticed on Virtual Competition
        </p>

        <SearchForm/>
      </section>


    <section className='px-6 py-10 max-w-7xl mx-auto'>
       <p className='text-[30px] font-bold text-black'>
         {query ? `Search results for: ${query}` : "All Startups"}
       </p>

    <ul className=' mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5'>
          {posts.length > 0 ? (
            // posts.map((post) => (
            //   <li key={post.title} className='bg-white rounded-lg shadow-md p-5'>
            //     <img src={post.image} alt={post.title} className='w-full h-40 object-cover rounded-md' />
            //     <h3 className='text-lg font-bold mt-2'>{post.title}</h3>
            //     <p className='text-sm text-gray-600'>{post.description}</p>
            //     <div className='mt-2'>
            //       <span className='text-xs text-gray-500'>{post.category}</span>
            //     </div>
            //   </li>
            // ))
            
            posts.map((post: any, index: number )=>(
              <StartupCard key={post?.id || post?.title || index} post = {post} />
            ))

          ) : (
            <li className='col-span-3 text-center'>No posts found.</li>
          )}
    </ul>


    </section>


    </>
  );
};

export default Home;