import Link from "next/link"
import Image from "next/image"

export default function Banner(){
  return(
    <>
    <div className=" absolute w-full h-screen -top-20 -z-20 opacity-60 sm:max-h-[458px] md:max-h-[488px] max-h-[428px] transition-all duration-200">
      <Image
        src="https://ik.imagekit.io/zhmk2wx4u/white-brick-wall_uyqLG0jZT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660076642698"
        layout="fill"
        objectFit="cover"      
        className="-z-20"  
       />       
    </div>
    <div className=" max-w-7xl mx-auto border-l border-r relative h-[300px] sm:h-[330px] md:h-[360px] transition-all duration-200 border-b">
      {/* <div className=" absolute max-h-[300px] right-20 w-[70%] h-[80%] md:w-[60%] md:h-[150%] md:ml-20 lg:-top-20 md:-top-28 top-10 sm:-right-10 md:right-16 sm:top-[10px] transition-all duration-300">
        
      <Image src="/images/bw_sneakers.png"  layout="fill" objectFit="contain" className="-z-10" />
      </div> */}
    <h2 className=" text-bg text-5xl md:text-6xl z-10 inline-block pb-4 px-8 pt-4 
    text-stone-900 bg-white bg-opacity-40 
    max-w-lg md:max-w-xl transition-all duration-300">Introducing Blade</h2>
      <div className="w-full bg-white bg-opacity-60 absolute bottom-0">
      <h3 className=" text-lg p-2">The Ultimate Performance Template by Ross Duris.</h3>
      <Link href="#">
        <button className=" cursor-pointer bg-white p-2 m-4 rounded-lg border mb-8 hover:bg-slate-50 transition-all duration-200 ">Book Now</button>
      </Link>
      </div>
    
    </div>
    </>
  )
}