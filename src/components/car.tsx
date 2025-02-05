"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'

import { Car } from "../../type/product";
import Link from 'next/link';
import { useState } from 'react';
import { client } from '@/sanity/lib/client';
import { someProduct } from './../sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
const Cars=() =>{
    const [car,setCar]=useState<Car[]>([])
    useEffect(()=>{
        async function fetchcar() {
            const fetchedcar:Car[]=await client.fetch(someProduct)
            setCar(fetchedcar )
        }
        fetchcar()
    },[])
    return(
    
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
          min-h-screen   mb-4 px-4 ml-4 mr-4 ">
    
    {
        car.map((car)=>(
            <div key={car._id} className="container p-4 mb-4 shadow-lg  bg-white rounded ">

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
            </button></Link></div>
            </Link>
            </div>
             )) 
    }
    
        </div>
    )
    }
    
    export default Cars
    