import React from 'react';

export default function Logo({ colorMode = 'dark' }: { colorMode?: string }) {
  return (
    <span
      className={`inline-block border-[5px] border-solid ${
        colorMode === 'dark' ? 'border-white' : 'border-black'
      } h-8 w-8 rounded-full`}
    ></span>
  );
}
