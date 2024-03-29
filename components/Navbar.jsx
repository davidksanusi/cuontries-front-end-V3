"use client";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

import { useState } from "react";
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center gap-6 px-4 md:px-6 lg:px-10 py-5 bg-white border-b border-[#E5E8EB]">
        {/* Logo and Menus */}
        <div className="flex gap-8 justify-center items-center">
          <Link href={'/'}>
          <Image alt="" src={"/logo.svg"} className="cursor-pointer" height={24} width={140}/>
          </Link>
          <div className="hidden lg:flex gap-8 justify-center items-center">
            <a className="text-[#0D121C] font text-sm leading-normal">Home</a>
            <a className="text-[#0D121C] text-sm leading-normal">Featured</a>
            <a className="text-[#0D121C] text-sm leading-normal">Recent</a>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-8">
                
                        <div className="relative flex items-center justify-center">
                        <CiSearch className="absolute left-3" size={25} color="#4A699C" />
                    <input placeholder="Search" className="bg-[#E8EDF5] h-10 rounded-xl w-[260px] border-none outline-none text-sm px-10" />

                        </div>

          <div className="flex gap-2 justify-center itemes-center">
            <Button className="bg-blue-600 hover:bg-blue-400 rounded-2xl">Log In</Button>
            <Button className="bg-gray-200 hover:bg-gray-300 text-black rounded-2xl">Sign up</Button>
          </div>
        </div>
        <FiMenu
          className="block lg:hidden text-black h-6 w-6"
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="click"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div
            id="dropdown"
            className="absolute top-[45px] mt-[20px] right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <Link
                  href={'/'}
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Featured
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Recent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Search
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Log in
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;