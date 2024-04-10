import React from "react";

function Skills() {
  return (
    <>
      <div className="w-full h-screen ">
        <p className='text-center font-bold pt-[100px]'>{"Here's a few things that I'm comfortable working with"}</p>
        <div className="mx-auto flex flex-col md:grid grid-cols-4 gap-5 mt-5 p-5">{data.map((d)=>(
            <div key={d.id} className='bg-white rounded-xl flex flex-col'>
                <div>
                <img src={d.logo} alt="" className='w-[150px] mx-auto'/>
                </div>
               <p className='text-center text-black mt-3 flex items-center justify-center'>{d.desc}</p>
            </div>
        ))}</div>
      </div>
    </>
  );
}
const data = [
  {
    id: 1,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsubI1xnS2EsbFC7IKOtHXy3o2yp5zNGHX8-mLk-0nVw&s",
    desc: "HTML",
  },
  {
    id: 2,
    logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    desc: "Cascading Style Sheets(CSS)",
  },
  {
    id: 3,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmizqJ9MkOHqnZ36YJRtkcEE2Y4L0dU96cBq8tmKuBA&s",
    desc: "Javascript",
  },
  {
    id: 4,
    logo: "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp",
    desc: "Tailwind CSS",
  },
  {
    id: 5,
    logo: "https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png",
    desc: "Github",
  },
  {
    id: 6,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlB9YHfX4Wr2I1meXlBXXAgkjtHP5ybecdVTf7hxL1kw&s",
    desc: "Firebase",
  },
  {
    id: 7,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfDf25SqIcw4UMW47QhgwjLDEd9zIiFhwU5qr_sL0eg&s",
    desc: "React",
  },
  {
    id: 8,
    logo: "https://cdn.sanity.io/images/3do82whm/next/4b1f008289a88f4438a1c983fb32cf1a636d9d0e-1000x667.png?w=720&h=480&fit=clip&auto=format",
    desc: "Next.js",
  },
];
export default Skills;
