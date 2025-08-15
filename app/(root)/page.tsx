import { Search } from 'lucide-react';
import React from 'react';
import SearchForm from '../../components/SearchForm';
import { title } from 'process';
import StartupCard from '@/components/StartupCard';

const Home = async ({ searchParams }: { searchParams: { query?: string } }) => {
    const query = (await searchParams).query;

    const posts = [
      {
        id: 1,
        createdAt: new Date(),
        views: 55,
        author: {
          id: 1,
          name: "Author 1",
        },

        description: "Description for Startup 1",
        image:"https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/05/Melina-Elden-Ring.jpg",
        category:"Gaming",
        title:"Elden Ring",
      },
      {
        id: 2,
        createdAt: new Date("2023-01-02"),
        views: 75,
        author: {
          id: 2,
          name: "Author 2",
        },
        description: "Description for Startup 2",
        image:"https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg",
        category:"Gaming",
        title:"Arkham Knight",
      },
      {
        id: 3,
        createdAt: new Date("2023-01-03"),
        views: 100,
        author: {
          id: 3,
          name: "Author 3",
        },
        description: "Description for Startup 3",
        image:"https://store-images.s-microsoft.com/image/apps.3117.14492969036550054.5a1d40f5-fe0d-427a-bd14-9a9ed15a423c.f601beb2-973f-47de-ad1a-ccec296ee4d1?q=90&w=480&h=270",
        category:"Gaming",
        title:"GTA V",
      },
    ];



      



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
            
            posts.map((post: any )=>(
              <StartupCard key={post?.id} post = {post} />
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