"use client"
import React from 'react'
import Image from 'next/image'

import { Car } from "../../type/product";
import Link from 'next/link';
import Cars from './../components/car';


function page() {







  return (
    <div className='  bg-slate-200  border border-slate-100 shadow-2xl h- '>
      <div className=' lg:grid grid-cols-2  gap-7 py-4 mr-6 mx-4  '>
      <h1 className='bg-blue-400 lg:w-[580px] lg:h-[320px] py-[32px] px-[64] rounded-md mx-5 '>
        <p className='text-2xl text-white px-4 text-pretty'>The Best Platform <br></br>for Car Rental</p>
        <p className='text-xs text-white py-3 px-4'>Ease of doing a car rental safely and<br></br> reliably. Of course at a low price.</p>
        <Link href='/carlist'><button className='bg-blue-700 px-4 py-2 mt-3 mx-4 rounded '>Rent Now</button></Link>
        <Image
        src='/aa.png'
        alt='web image' width={606} height={316}
        className='px-36 py-4'
        /></h1>
      <h2 className='bg-blue-600 rounded-md mx-5 lg:w-[580px] lg:h-[320px] py-[32px] my-6 lg:my-0 '>
       <p className='text-2xl text-white px-4 text-pretty'>Easy way to rent a<br></br> car at a low price</p>
       <p className='text-xs text-white py-3 px-4'>Providing cheap car rental services <br></br>and safe and comfortable facilities.</p>
      
       <Link href='/carlist'><button className='bg-blue-400 px-6 py-2 mt-3 mx-4 rounded '>Rent Now</button></Link>
       <Image
        src='/image 8.png'
        alt='web image' width={606} height={316}
        className='px-36 py-2'
        /></h2></div>


<div className='bg-white mx-7 rounded-md shadow-sm'>
      <div className='flex justify-around'>
      <div>
      <div className='py-3 px-2 font-bold'>Pick - Up</div>
      <div className='lg:grid grid-cols-3'>
      <h1><p className='px-2 font-bold'>Location</p>
      <select className='text-slate-500  border border-slate-100 shadow-lg  mr-4' >
         <option>select location</option>
         <option></option>
         <option></option>
         </select>
         </h1>

         <h1><p  className='px-2 font-bold '>Date</p>
      <select className='text-slate-500 border border-slate-100 shadow-lg '>
         <option>select date</option>
         <option></option>
         <option></option>
         </select>
         </h1>


         <h1><p  className='px-2 font-bold'>Time</p>
      <select className='text-slate-500 border border-slate-100 shadow-lg' >
         <option>select time</option>
         <option>07:00 pm</option>
         <option></option>
         </select>
         </h1>
         </div>
</div>
<div>

<div className='py-4 px-2 font-bold '>Drop - Off</div>
      <div className='lg:grid grid-cols-3 '>
      <h1><p className='px-2 font-bold'>Location</p>
      <select className='text-slate-500  border border-slate-100 shadow-lg mr-4 ' >
         <option>slect location</option>
         <option>Kota Semarang</option>
         <option></option>
         </select>
         </h1>

         <h1><p  className='px-4  font-bold'>Date</p>
      <select className='text-slate-500  border border-slate-100 shadow-lg'>
         <option>slect date</option>
         <option>21 July 2022</option>
         <option></option>
         </select>
         </h1>


         <h1><p  className='px-2 font-bold'>Time</p>
      <select className='text-slate-500 border border-slate-100 shadow-lg' >
         <option>select time</option>
         <option>10:00 pm</option>
         <option></option>
         </select>
         </h1> </div></div>
         </div></div>

<h1 className='flex justify-between py-2'>
  <p className='text-xs px-7 text-slate-500'>Popular Car</p>
  <p className='text-blue-600 text-xs px-4'>view all</p>
</h1>
<div className='   '>
<Cars/>
</div>
<h1 className='text-center '>
  <Link href='/carlist'><button className='bg-blue-600 px-2 py-2 rounded'> Show more cars</button>
   <span className='flex justify-end text-slate-500 text-sm '>120 cars</span></Link></h1>
</div>

)

} 
export default page








