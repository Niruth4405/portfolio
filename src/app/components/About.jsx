import React from "react";

function About() {
  return (
    <>
      <div className="h-screen w-full px-10">
        <div className="mx-auto flex flex-col gap-5 md:grid grid-cols-2">
          <div className='m-auto md:ml-7'>
            <p className='text-blue-900 mb-2 text-xl'>About</p>
            <h2 className='text-start'>Who Am I?</h2>
            <p className='leading leading-7 mt-5'>
              {"Hello, I'm Niruth Ananth! As a 20-year-old enthusiast, I'm deeply\
              passionate about the world of Computer Science. Currently, I'm on\
              an exciting journey to master the MERN stack (MongoDB, Express.js,\
              React, Node.js) for web development, and I'm absolutely loving it!\
              My toolbox includes HTML, CSS, Tailwind CSS, JavaScript, Node.js,\
              React.js, and Express.js, which I use to craft seamless and\
              user-friendly web experiences. Hackathon enthusiast. Now, I'm\
              actively seeking an internship opportunity that will not only\
              allow me to contribute to meaningful projects but also provide the\
              perfect environment to expand and refine my skills."}
            </p>
            
          </div>
          <div className='w-[200px] md:w-[300px] mx-auto mt-2 flex justify-center items-center'>
            <img src="https://i.pinimg.com/736x/57/d7/8d/57d78ddd142c05490f28af0649ab0416.jpg" alt="" className='mx-auto rounded-lg'/>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default About;
