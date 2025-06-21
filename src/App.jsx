
import './App.css'
import axios from 'axios'
import {useQuery} from '@tanstack/react-query'
import { MdAccessTime  } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { IoOptionsOutline } from "react-icons/io5";


function App() {


  const {data:dest , isLoading : isLodingDest ,error :errorDest} = useQuery({
    queryKey:['destination'],
    queryFn: async()=>{
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/destination`)
      return res.data;
    },
  });

  const {data:pack ,isLoading :isLodingPack ,error : errorPack} = useQuery({
    queryKey : ['packages'],
    queryFn : async()=>{
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/packages/top-selling`)
      return res.data;
    }

})

  if(isLodingDest || isLodingPack) return <p>Loading...</p>
  if(errorDest||errorPack) return <p>Error...</p>


  return (
    <>

  {/* ---Hero section--- */}
  <div className="container w-full bg-[url('./image/image1.jpg')]  bg-cover bg-bottom  mx-auto h-[60vh]"  >
    <div className='bg-black/40'>
      <div className="relative overflow-hidden h-[60vh]">
        <div className="max-w-screen-xl mx-auto py-16 lg:py-28 px-6 sm:px-8">
          <div className="relative z-10 max-lg:text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white !leading-tight">
              Discover Your Next
              <span className="text-green-400 block"> Adventure</span>
            </h1>
            <div className="max-w-md md:max-w-3xl  mt-6">

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed ">
                Elevate your culinary experience with our exclusive premium services. Indulge in exquisite flavors and extraordinary moments.
              </p>

              <div className="mt-12 lg:mt-16 flex flex-wrap max-lg:justify-center gap-6">
                <div className="rounded-md shadow-sm">
                  <button className="w-full flex items-center justify-center px-8 py-4 font-medium text-base tracking-wide rounded-full  bg-green-600 text-white hover:bg-green-700 transition border-0 cursor-pointer">
                    Book Now
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
</div>



{/* Destinations */}
<div className='container mx-auto text-center m-10'>
        <h1 className='text-4xl m-4 font-bold text-slate-900'>Explore Most Popular Destination</h1>
        <h5>plan your perfact trip with our most loved and best selling <span className='block'>tour package</span></h5>
</div>
<div className=' container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 '>
      {dest.map((d)=>{
        return <div
      class="bg-white [box-shadow:0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl overflow-hidden mx-auto mt-4">
      <div class="aspect-[3/2]">
        <img src={d.image} class="w-full h-full object-cover rounded-2xl" />
      </div>

      <div class="p-6">
        <div class=" flex items-center justify-between ">
            <h3 class="text-lg  font-bold text-green-700">{d.name}</h3>
            <h3 class="text-lg text-slate-900 font-bold ">₹{d.price}/-</h3>
        </div>
      </div>

    </div>
      })}
</div>



{/*--- Advantages--- */}

<div className='container mx-auto  m-17 bg-green-600 p-15'>
      <div className='text-center text-white'>
        <h1 className='text-4xl font-bold my-5 text-white'>Our Advantages</h1>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo facilis amet ullam quia minima. Nihil, <span className='block'>excepturi, explicabo placeat dolor optio</span></p>
      </div>
    <div className=' grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-10 py-10  '>

      <div className='text-center  mx-auto sm:w-1/2 w-full'>
          <div className='rounded-full bg-white mx-auto h-30 w-30 text-6xl text-yellow-400 flex items-center justify-center'> <MdAccessTime /> </div>
          <p className='text-white my-2'>save time</p>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur</p>
      </div>

      <div className='text-center  mx-auto sm:w-1/2 w-full'>
          <div className='rounded-full bg-white mx-auto h-30 w-30 text-6xl  text-yellow-400 flex items-center justify-center'><FaMoneyCheckAlt /></div>
          <p className='text-white my-2'>save Money</p>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur</p>
      </div>

      <div className='text-center  mx-auto sm:w-1/2 w-full'>
          <div className='rounded-full bg-white mx-auto h-30 w-30 text-6xl text-yellow-400 flex items-center justify-center'><GiNetworkBars /></div>
          <p className='text-white my-2'>Trusted Network</p>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur</p>
      </div>

      <div className='text-center  mx-auto sm:w-1/2 w-full'>
          <div className='rounded-full bg-white mx-auto h-30 w-30 text-6xl text-yellow-400 flex items-center justify-center'><IoOptionsOutline /></div>
          <p className='text-white my-2'>Multiple option</p>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur</p>
      </div>
    </div>
</div>

     


{/*--- Packages--- */}
<div className='container mx-auto text-center m-10'>
      <h1 className='text-4xl m-4 font-bold'>Top Selling Tour Packages of India</h1>
      <h5>plan your perfact trip with our most loved and best selling <span className='block'>tour package</span></h5>
</div>
<div className=' container grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-10 '>
      {pack.map((d)=>{
        return <div
      class="bg-white [box-shadow:0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl overflow-hidden mx-auto mt-4">
      <div class="aspect-[3/2]">
        <img src={d.image} class="w-full h-full object-cover rounded-2xl" />
      </div>

      <div class="p-6">
        <h3 class="text-xl text-slate-900 font-bold text-center">{d.name}</h3>
          <div class=" flex items-center my-2">
          <button className="w-full flex items-center justify-center px-8 py-3 font-medium text-base tracking-wide rounded-full text-white bg-green-500  transition border-0 cursor-pointer">
                      view details
          </button>
       </div>
      </div>
    </div>
      })}
</div>



{/* ---Testimonials--- */}
<div class="p-4 max-w-6xl mx-auto container my-20">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-slate-900 !leading-tight">What our happy client say</h2>
        <p class="text-[15px] mt-6 leading-relaxed text-slate-600">See what our happy clients have to say. They’ve shared how our templates helped them launch quickly, look professional, and grow with ease.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-md:justify-center text-center max-lg:max-w-3xl max-md:max-w-lg mx-auto mt-16">
        <div>
          <div class="flex flex-col items-center">
            <img src="https://readymadeui.com/team-2.webp" class="w-24 h-24 rounded-full border-2 border-purple-600" />
            <div class="mt-6">
              <h4 class="text-base font-semibold text-slate-900">John Doe</h4>
            </div>
          </div>

          <div class="flex justify-center space-x-1 mt-3">
            <svg class="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>

          <div class="mt-6">
            <p class="text-[15px] leading-relaxed text-slate-700 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at natus assumenda sunt dolorum sit consequatur nihil ullam molestias. Vel?</p>
          </div>
        </div>

        <div>
          <div class="flex flex-col items-center">
            <img src="https://readymadeui.com/team-3.webp" class="w-24 h-24 rounded-full border-2 border-purple-600" />
            <div class="mt-6">
              <h4 class="text-base font-semibold text-slate-900">Mark Adair</h4>
            </div>
          </div>

          <div class="flex justify-center space-x-1 mt-3">
            <svg class="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>

          <div class="mt-6">
            <p class="text-[15px] leading-relaxed text-slate-700 font-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est qui quis temporibus fugit facere labore cupiditate modi iure eius eos!</p>
          </div>
        </div>

        <div>
          <div class="flex flex-col items-center">
            <img src="https://readymadeui.com/team-4.webp" class="w-24 h-24 rounded-full border-2 border-purple-600" />
            <div class="mt-6">
              <h4 class="text-base font-semibold text-slate-900">Simon Konecki</h4>
            </div>
          </div>

          <div class="flex justify-center space-x-1 mt-3">
            <svg class="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 h-4 fill-purple-600" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>

          <div class="mt-6">
            <p class="text-[15px] leading-relaxed text-slate-700 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tempora ipsam voluptatem eius saepe quidem veniam itaque tenetur accusantium dolor.</p>
          </div>

        </div>
      </div>
    </div>

    </>
  )
}

export default App
