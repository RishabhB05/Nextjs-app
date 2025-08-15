import { Search } from 'lucide-react';
import React from 'react';
import SearchForm from '../../components/SearchForm';

const Home = async ({ searchParams }: { searchParams: { query?: string } }) => {
    const query = (await searchParams).query;

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

    <ul className=' px-6 py-10 max-w-7xl mx-auto'>

    </ul>


    </section>
 






    </>
  );
};

export default Home;