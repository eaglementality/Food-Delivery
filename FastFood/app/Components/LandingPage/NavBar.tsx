"use client";

import Image from "next/image";
import chefHat from "../../Img/chefHat.png";
export const Nav_Bar = () => {
  return (
    <>
      <nav className="fixed bg-white w-full p-2 border shadow-lg flex justify-between">
        <div className="flex ">
          <Image className="sm:h-50" src={chefHat} height={50} width={80} alt="chef hat" />
          <h1 className=" mt-5 font-bold text-[30px] hidden sm:block">Fast Food</h1>
        </div>

        <div className="mt-7 text-[20px] hover:bg-gray-400">Joints</div>

        <details className="dropdown w-30 mt-6">
          <summary className=' bg-slate-700 text-white p-2 w-15'>
            Log In
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-45">
            <li>
              <a>Vendor</a>
            </li>
            <li>
              <a>Admin</a>
            </li>
          </ul>
        </details>
      </nav>
    </>
  );
};
