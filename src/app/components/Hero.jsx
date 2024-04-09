import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link"


function Hero() {
  return (
    <>
      <div className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
          <div>
            <p className="tracking-widest uppercase text-md text-gray-600">
              {"Let's build together"}
            </p>
            <h2 className="capitalize text-4xl mt-3 px-10 md:text-6xl">
              {"Hi, I'm "}
              <span className="text-blue-600">Niruth</span>
            </h2>
            <p className="capitalize mt-3 text-4xl px-5 font-bold md:text-6xl md:mt-5">
              A front-end web developer
            </p>
            <div className="mx-auto md:w-[500px]">
              <p className="text-neutral-500 mt-5">
                I am focused on building responsive front-end web applications
                integrating back-end technologies
              </p>
            </div>
            <div className="flex justify-center items-center mt-4">
                {data.map((d)=>(
                    <button key={d.id} className='border border-blue-900 rounded-full flex justify-center items-center p-2 mr-5'><Link href={d.link}>{d.logo}</Link></button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    id: 1,
    logo: <FaLinkedin size={25}/>,
    link: "https://www.linkedin.com/in/niruth-ananth-19a9961b3/",
  },
  {
    id: 2,
    logo: <FaGithub size={25}/> ,
    link: "https://github.com/Niruth4405",
  },
  {
    id: 3,
    logo:<MdEmail size={25}/>,
    link: "https://mail.google.com/mail/u/0/#inbox",
  },
];
export default Hero;
