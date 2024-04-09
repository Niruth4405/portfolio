import React from "react";

function Hero() {
  return (
    <>
      <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center'>
            <div>
                <p className='tracking-widest uppercase text-md text-gray-600'>Let&apos;s build together</p>
                <h2 className='capitalize text-4xl mt-3 px-10 md:text-6xl'>Hi, I&apos;m <span className='text-blue-600'>Niruth</span></h2>
                <p className='capitalize mt-3 text-4xl px-5 font-bold md:text-6xl md:mt-5'>A front-end web developer</p>
                <div className='mx-auto md:w-[500px]'>
                <p className='text-neutral-500 mt-5'>I&apos;m focused on building responsive front-end web applications integrating back-end technologies</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
