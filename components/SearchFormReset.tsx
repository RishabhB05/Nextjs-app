"use client"
import Link from "next/link";
import React, { useRef } from 'react';

type SearchFormResetProps = {
  onReset: () => void;
};

const SearchFormReset = ({ onReset }: SearchFormResetProps) => {
  return (
    <button
      type="button"
      onClick={onReset}
      className="size-[35px] rounded-full bg-black flex justify-center items-center py-1 px-3 text-white text-sm"
    >
      X
    </button>
  );
};

export default SearchFormReset;