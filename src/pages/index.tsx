import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner"
import { ArrowDownIcon } from '@heroicons/react/solid'

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Blade</title>        
      </Head>
    <div className="bg-white flex w-full absolute h-12">
    </div>
    <header className="flex max-w-7xl mx-auto z-10 transition-all duration-200">      
      <span className="p-3 "><a className="hover:text-gray-500 transition-all duration-200 m-2" href="#">BLADE</a></span>
      <nav className=" font-thin text-sm">
        <a href="#">HOME</a>
        <a href="#">SERVICES</a>
        <a href="#">LOCATIONS</a>
        <a href="#">GALLERY</a>
        <a href="#">CONTACT</a>
      </nav>
      <div className="mobileNav">
       <div> </div>
       <div> </div>
       <div> </div>
      </div>
    </header> 
    

    <Banner />
    {/* <div className=" mx-auto w-full text-center">
      <span className=" border text-gray-300 p-10 mt-10 inline-block rounded-[100px] hover:bg-slate-50 cursor-pointer hover:border-slate-50 transition-colors duration-300"><ArrowDownIcon width={50} height={50}/></span>
      <div className=" grid grid-cols-2 w-full border-b">
        <div className=" h-20 border-r"></div>
        <div className=" h-20"></div>
      </div>
    </div> */}
    <main className="sm:pt-0 pt-20 max-w-7xl mx-auto border-r border-l">
    
    <div className=" w-full inline-block sm:py-10">
      <p className=" sm:p-10 sm:text-lg sm:px-20 mx-auto px-10 mb-10 max-w-6xl">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 text-center z-10 bg-white sm:border-t">
      <div className="feature border-r">
        <h2>Services</h2>
      </div>
      <div className="feature border-r">
        <h2>Locations</h2>
      </div>
      <div className="feature">
        <h2>Gallery</h2>
      </div>
    </div>
    <div className="p-4 my-10 mt-20">
      <p className="sm:max-w-[50%] p-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    </div>
    <div className="p-4 my-10 w-full inline-block">
      <p className="sm:max-w-[50%] p-2 float-right">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    </div>
    <div className="p-4 pb-20">
      <p className="sm:max-w-[50%] p-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    </div>
    </main>

    <footer className=" text-center p-20 text-gray-400 font-thin border-t">Copyright @ 2022 Ross Duris</footer>
  </>
  );
};


export default Home;
