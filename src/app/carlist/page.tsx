"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'

import { Car } from "./../../../type/product";
import Link from 'next/link';
import { useState } from 'react';
import { client } from '@/sanity/lib/client';
import { allProduct, someProduct } from './../../sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image';
const Carlist=() =>{
    const [car,setCar]=useState<Car[]>([])
    useEffect(()=>{
        async function fetchcar() {
            const fetchedcar:Car[]=await client.fetch(allProduct)
            setCar(fetchedcar )
        }
        fetchcar()
    },[])
    return(
    <div className='flex  min-h-screen bg-slate-200 shadow-lg border border-slate-100'>


<div className="   bg-white p-2 lg:p-5 shadow-md mb-12 rounded">
        {/* Type */}
        <h3 className="text-lg font-semibold mb-3">Type</h3>
        <ul className="space-y-2">
          <li>
            <input type="checkbox"  className="mr-2" defaultChecked /> Sport (10)
          </li>
          <li>
            <input type="checkbox"  className="mr-2" /> SUV (12)
          </li>
          <li>
            <input type="checkbox"  className="mr-2" /> MPV (16)
          </li>
        </ul>

        {/* Capacity */}
        <h3 className="text-lg font-semibold mt-5 mb-3">Capacity</h3>
        <ul className="space-y-2">
          <li>
            <input type="radio" name="capacity" className="mr-2" /> 2 Person
          </li>
          <li>
            <input type="radio" name="capacity" className="mr-2" /> 4 Person
          </li>
          <li>
            <input type="radio" name="capacity" className="mr-2" /> 8 or More
          </li>
        </ul>

        {/* Price */}
        <h3 className="text-lg font-semibold mt-5 mb-3">Price</h3>
        <label className="block text-sm text-gray-600 mb-2">
          Max: $100.00
        </label>
        <input type="range" className="w-full" />
      </div>


      <div>
      <div>
      <div className='flex justify-around  py-2 bg-white p-2 mx-7 mt-5 rounded'>
      <div>
      <div className='py-3 px-2 font-bold'>Pick - Up</div>
      <div className='lg:grid grid-cols-3'>
      <h1><p className='px-2 font-bold'>Location</p>
      <select className='text-slate-500 border border-slate-100 shadow-lg mx-4' >
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
      <select className='text-slate-500 border border-slate-100 shadow-lg ' >
         <option>select time</option>
         <option>07:00 pm</option>
         <option></option>
         </select>
         </h1>
         </div>
</div>
<div className=''>

<div className='py-4 px-2 font-bold '>Drop - Off</div>
      <div className='lg:grid grid-cols-3'>
      <h1><p className='px-2 font-bold'>Location</p>
      <select className='text-slate-500 border border-slate-100 shadow-lg mx-4' >
         <option>slect location</option>
         <option>Kota Semarang</option>
         <option></option>
         </select>
         </h1>

         <h1><p  className='px-4  font-bold'>Date</p>
      <select className='text-slate-500 border border-slate-100 shadow-lg'>
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
         </h1> </div>
         </div>
         </div>
       </div>
        <div className=" bg-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
          min-h-screen   mb-4 px-4 ml-4 mr-4 py-5 mt-4 rounded">
    
    {
        car.map((car)=>(
            <div key={car._id} className="container p-4 mb-4 shadow-2xl  bg-white rounded ">
                <Link href={`/car/${car.slug?.current}`}>
    
    
    
    <br></br>
    <div className='mt-2 font-bold px-4'>
    {car.name}</div>
    <div className='text-sm text-slate-600 px-4'>
    {car.type}
    </div>
    <div className='py-6'>
    {car.image && (
        <Image 
        src={urlFor(car.image).url()}
        alt="image" width={248} height={100}/>
    )}</div>
    <div  className="flex items-center space-x-4 text-gray-600 mb-4 text-sm">
     <div className="flex items-center space-x-1">
     <span>⛽</span>
    
    {car.fuelCapacity}</div>
    
    <div className="flex items-center space-x-1">
              <span>⚙️</span>
    {car.transmission}
    </div>
    <div className="flex items-center space-x-1">
    <span>👥</span>
    {car.seatingCapacity}</div>
    </div>
    <div className='text-blue-700'>
    {car.pricePerDay}
    
    <Link href='/Rentalinfo'> <button className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition ml-16">
              Rent Now
            </button></Link> </div>
    
            </Link> </div>
        )) 
    }
    
        </div></div> 
              </div>
    )
    }
    
    export default Carlist
    