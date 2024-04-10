"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

function Navbar() {
  const [nav, setnav] = useState(false);

  function handlenav() {
    setnav(!nav);
  }
  
  return (
    <>
      <nav className="fixed z-[100] w-full bg-[#ecf0f3] shadow-xl">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 py-4">
          <h2 className="text-blue-900">
            <i>Portfolio.</i>
          </h2>
          <ul className="uppercase hidden md:flex">
            <Link href="/">
              <li className="ml-6">Home</li>
            </Link>
            <Link href="/About">
              <li className="ml-6">About</li>
            </Link>
            <Link href="/Skills">
              <li className="ml-6">Skills</li>
            </Link>
            <Link href="/Projects">
              <li className="ml-6 mr-6">Projects</li>
            </Link>
          </ul>
          <div
            className="flex justify-end items-center md:hidden"
            onClick={handlenav}
          >
            {!nav ? <FiMenu size={20} /> : <IoCloseOutline size={20} />}
          </div>
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] h-full border-r bg-[#ecf0f3] border-r-gray-900 ease-in-out duration-500 md:hidden"
                : "fixed left-[-100%] "
            }
          >
            <h3 className='text-center text-bold px-4 py-3 mb-5'>{"Let's build something together!"}</h3>
            <hr className='bg-neutral-700'/>
            <ul className="mt-20 uppercase flex flex-col justify-center items-center">
              <Link href='/'><li className="mb-5 border-b border-black">Home</li></Link>
              <Link href='/About'><li className="mb-5 border-b border-black">About</li></Link>
              <Link href='/Skills'><li className="mb-5 border-b border-black">Skills</li></Link>
              <Link href='/Projects'><li className="mb-20 border-b border-black">Projects</li></Link>
             
            </ul> 
            <hr className='bg-neutral-700'/>
            <h3 className='text-center mt-6'>{"let's connect!"}</h3>
            <div className='flex justify-center items-center mt-3'>
                {data.map((d)=>(
                    <button key={d.id} className='ml-2 p-2'>{d.logo}</button>
                ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
const data =[
    {
        id:1,
        logo:<FaLinkedin color='white'/>,
    },
    {
        id:2,
        logo:<FaGithub color='white'/>,
    },
    {
        id:3,
        logo:<MdEmail color='white'/>
    }
]
export default Navbar;
