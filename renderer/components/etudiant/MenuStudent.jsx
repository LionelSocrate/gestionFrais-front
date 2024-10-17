import React from 'react';

export default function MenuStudent({ label, state, onClick }) {
  return (
    <>
      <p
        className={`uppercase text-sm tracking-widest flex items-center justify-center py-2 rounded-sm ${
          state
            ? ' bg-blue-300 text-white'
            : 'bg-[rgb(247,247,247)] hover:bg-blue-200 hover:text-white '
        }  cursor-pointer`}
        onClick={onClick}
      >
        {label}
      </p>
    </>
  );
}
