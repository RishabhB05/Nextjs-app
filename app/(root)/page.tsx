import { Search } from 'lucide-react';
import React from 'react';
import SearchForm from '../../components/SearchForm';
import { title } from 'process';
import StartupCard, { StartupTypeCard } from '@/components/StartupCard';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

const Home = async ({ searchParams }: { searchParams: { query?: string } }) => {
    const query = (await searchParams).query;
   const params = { search: query || null };
    const posts = await client.fetch(STARTUPS_QUERY, { search: query });
    
      // const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });


  return (
    <>
      <section className="w-full min-h-[530px] bg-yellow-500 bg-[repeating-linear-gradient(to_right,white,white_0px,transparent_1px,transparent_60px)] flex justify-center items-center flex-col py-10 px-6">
        
        <div className='bg-[#EE2B69] p-3 rounded-md '>
            <div className="font-work-sans font-bold uppercase text-[17px] leading-[24px] tracking-[0.06em] w-[231px] h-[24px] flex items-center">
              PITCH, VOTE, AND GROW
            </div>
          </div>


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

     <ul className="mt-7     grid md:grid-cols-3 sm:grid-cols-2 gap-5      ">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul> 

    </section>


    </>
  );
};

export default Home;