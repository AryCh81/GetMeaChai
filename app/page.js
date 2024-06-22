// import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (

    // main container 
    <div className="container min-h-screen w-screen font-sans ">

      {/* get me a chai heading  */}
      <div className=" flex flex-col justify-center items-center h-[45vh] ">

        <div className='flex gap-5 my-8'>
          <div className=' font-bold text-3xl text-white'>Get Me a Chai</div>
          <div><img width={40} height={40} src="svgs/tea.svg" alt="img" /></div>
        </div>
        <div className=" text-white ">A crowdfunding platform for creators to fund their projects</div>
        <div className=" text-white ">A place where ypur friends and fans can buy you a Chai. Unleash the power of your friends and fans to  your projects funded.</div>

        <Link href={'/login'}><div className=' cursor-pointer my-5 w-32 h-10 bg-purple-600 rounded-lg text-white font-semibold text-xl pl-3 p-1'>Get Started</div></Link>

      </div>
      {/* borderline  */}
      <div className=" h-1 bg-gray-600 w-screen"></div>

      <div className=" text-white font-bold text-xl text-center mt-10">Your friends can buy you a Chai</div>

{/* Your friends can buy you a chai  */}
      <div className=" flex justify-evenly mt-16 ml-8 ">

        <div className=" flex flex-col items-center">
          <div className=" w-16 h-16 rounded-full bg-gray-500 pl-3 pt-2"><img width={40} height={40} src="svgs/working.svg" alt="" /></div>
          <div className=" text-sm font-sans font-semibold">Friends want to help </div>
          <div className=" text-sm font-sans">Your friends are available to support you.</div>
        </div>
        <div className=" flex flex-col items-center">
          <div className=" w-16 h-16 rounded-full bg-gray-500 p-3"><img width={40} height={40} src="svgs/rupee.svg" alt="" /></div>
          <div className=" text-sm font-sans font-semibold">Friends want to contribute </div>
          <div className=" text-sm font-sans">Your friends are willing to contribute financially.</div>
        </div>
        <div className=" flex flex-col items-center">
          <div className=" w-16 h-16 rounded-full bg-gray-500 p-3"><img width={40} height={40} src="svgs/group.svg" alt="" /></div>
          <div className=" text-sm font-sans font-semibold">Friends want to collaborate</div>
          <div className=" text-sm font-sans">Your friends are ready to collaborate with you.</div>
        </div>

      </div>


    </div>

  );
}
