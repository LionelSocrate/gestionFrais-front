import React from "react";

export function Lien({ path, icon, label }) {
  return (
    <>
      <Link href={path}>
        <p className=" flex items-center gap-2 px-6 cursor-pointer hover:text-white hover:bg-green-300 py-2">
          {icon}
          <span>{label}</span>
        </p>
      </Link>
    </>
  );
}
