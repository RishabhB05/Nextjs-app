import React from 'react'
import  Form  from 'next/form'
import SearchFormReset from './SearchFormReset'

const SearchForm = () => {
    const query = 'Test'

    const reset = () => {
      // Reset the search query
      const form = document.querySelector('.search-form') as HTMLFormElement;
      if (form) {
        form.reset();
      }
    }

  return (
    <div>
      <Form action= "/" scroll={false} className="max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5">
        <input name = "query" defaultValue=""  className="flex-1 font-bold placeholder:font-semibold placeholder:text-black/50 w-full h-auto outline-none" placeholder='Search Startups' />
         <div className='flex gap-2'>
             {query && <SearchFormReset />}

             <button type="submit" className='bg-black text-white px-3.5 py-1 text-sm rounded-full'>
               S
             </button>
         </div>
      </Form>
    </div>
  )
}

export default SearchForm