"use client"
import { Link } from 'lucide-react';
import React, { useRef } from 'react';

const SearchFormReset = () => {
  const reset = () => {
    // Reset the search query
    const form = document.querySelector('.search-form') as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };

  return (
    <div>

       <button
          type="reset"
          onClick={reset}
          className="size-[35px] rounded-full bg-black flex justify-center items-center py-1 px-3 text-white text-sm"
        >
          X
        </button>
      
    </div>
  );
};

export default SearchFormReset;