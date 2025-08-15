"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchFormReset from './SearchFormReset';
import { Search } from 'lucide-react';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleReset = () => {
    setInputValue("");
    // Remove query param from URL
    const url = new URL(window.location.href);
    url.searchParams.delete("query");
    router.replace(url.pathname + url.search);
  };

  return (
    <div>
  <form action="/" className="max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5" onSubmit={e => { /* prevent default reset behavior */ }}>
        <input
          name="query"
          value={inputValue}
          onChange={handleInputChange}
          className="flex-1 font-bold placeholder:font-semibold placeholder:text-black/50 w-full h-auto outline-none"
          placeholder="Search Startups"
        />
        <div className="flex gap-2">
          {inputValue && (
            <SearchFormReset onReset={handleReset} />
          )}
          <button type="submit" className="size-[35px] rounded-full bg-black flex justify-center items-center py-1 px-3 text-white text-sm">
            <Search />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm