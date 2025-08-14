import { Search } from 'lucide-react'
import React from 'react'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <>
  <section className="w-full min-h-[530px] bg-yellow-500 bg-[repeating-linear-gradient(to_right,white,white_0px,transparent_1px,transparent_60px)] flex justify-center items-center flex-col py-10 px-6">

      <div className='uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[3.375rem] sm:leading-[4rem] text-[2.25rem] leading-[2.875rem] max-w-5xl  text-center my-5' >
        Pitch Your Startup <br /> Connect with Entrepreneurs
      </div>

      <p className='sub-heading !max-w-3xl text-white font-bold text-lg'>
       Submit Ideas, Vote on Pitches, and Get Noticed on Virtual Competition
      </p>

      <SearchForm />

      </section>
    </>
  
  )
}

export default Home