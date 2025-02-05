"use client"
import { HelpCircle } from 'lucide-react'
import { Car } from "./../../../type/product";
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import { client } from '@/sanity/lib/client';
import { allProduct, sixProduct, someProduct } from './../../sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image';

import React from 'react'
import Image from 'next/image'
function Graph() {
    const [transactions,setCar]=useState<Car[]>([])
        useEffect(()=>{
            async function fetchcar() {
                const fetchedcar:Car[]=await client.fetch(sixProduct)
                setCar(fetchedcar )
            }
            fetchcar()
        },[])
    return (
        <div className=" flex  bg-gray-100">
            <span><hr></hr></span>
          <aside className='bg-white  border border-slate-100'>
    <h1 className='text-slate-400 text-sm py-4 px-6'>MAIN MENU</h1>
    <ul>
        <li>
    <button className='bg-blue-500 rounded-md py-2 px-6 mx-6'> 🏠  Dashboard </button>
    </li>
    <li className='text-slate-500 text-sm  py-4 px-6'>
       <Link href="/carlist"> 🚘 Car Rent</Link></li>
       <li className='text-slate-500 text-sm py-4 px-6'>
       <Link href="/graph">  📶 insight</Link></li>
       <li className='text-slate-500 text-sm py-4 px-6'>
       <Link href="/graph"> 💸 Reimburse</Link></li>
        
    
       <li className='text-slate-500 text-sm py-4 px-6'>
       <Link href="/graph"> 📩  Inbox</Link></li>
       <li className='text-slate-500 text-sm py-4 px-6'>
       <Link href="">📅 Calender</Link>
                </li>
          </ul>
    
          <h1 className='text-slate-400 text-sm py-4 px-6'>PREFERENCES</h1>
    <ul>
    <li className='text-slate-500 text-sm py-4 px-6'>
       <Link href="/graph">⚙️ setting</Link>
                </li>
                <li className='text-slate-500 text-sm py-4 px-6 flex gap-1'>
       <HelpCircle/> <Link href=""> <span> Help & Center</span> </Link>
                </li>
                <li className='text-slate-500 text-sm py-4 px-6'>
       <Link href="">Dark Mode</Link>
                </li>
    <Link href=""><li className='text-slate-500 text-sm py-4 px-6'>Logout</li></Link>
    </ul>
    </aside>
    <div className='bg-white w-[500px] mx-6 mt-4 rounded mb-12  border border-slate-200   shadow-md py-6 '>
    <div className='px-4 py-4 mt-3'>Details Rental</div>
    <div className="h-48 bg-blue-100 rounded-md mb-4 flex justify-center items-center">
                <p className="text-sm text-gray-600"> 
                   <Link
            href="https://www.google.com/maps/place/Karakoram+Rent+a+Car+Services/@29.7214381,60.7031733,5z/data=!4m10!1m2!2m1!1srental+car!3m6!1s0x38e4638cf908db21:0x3ccb8987ddf4432e!8m2!3d35.2892539!4d75.623296!15sCgpyZW50YWwgY2FykgERY2FyX3JlbnRhbF9hZ2VuY3ngAQA!16s%2Fg%2F11g6mj1fgc?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D" // Replace this with your Instagram profile link
            target="_blank"
            rel="noopener noreferrer"> <Image 
            src='/Maps.png'
            alt='map review' width={486} height={20} className='py-4 border border-gray-100 mt-16 mb-10 h-72'></Image> </Link></p>
              </div>
    
    
    <div className='px-2 flex mt-20'> 
      <Image
      src="/Look.png"
     alt='car image' width={132} height={72} />
     <div className='flex justify-between'><h1><p className='text-2xl font-semibold px-2'>Nissan GT - R</p>
     <p className='px-2 text-slate-600'>Sport car</p>
                   </h1>
                   <h2 className='pl-28 text-slate-600'>#9761</h2>
             </div>
        </div>
        <div className='py-4 mt-4'>
          <div className='py-3 px-2 font-bold'>Pick - Up</div>
          <div className='lg:grid grid-cols-3'>
          <h1><p className='px-2 font-bold'>Location</p>
          <select className='text-slate-500  border-slate-100  shadow-lg' >
             <option>Kota Semarang</option>
             <option></option>
             <option></option>
             </select>
             </h1>
    
             <h1><p  className='px-2 font-bold'>Date</p>
          <select className='text-slate-500  border-slate-100  shadow-lg'>
             <option>20 july 2023</option>
             <option></option>
             <option></option>
             </select>
             </h1>
    
    
             <h1><p  className='px-2 font-bold'>Time</p>
          <select className='text-slate-500 border border-slate-100  shadow-lg' >
             <option>07:00 pm</option>
             <option></option>
             <option></option>
             </select>
             </h1>
             </div>
    </div>
    
    
    <div className='py-4 px-2 font-bold '>Drop - Off</div>
          <div className='lg:grid grid-cols-3'>
          <h1><p className='px-2 font-bold'>Location</p>
          <select className='text-slate-500  border-slate-100  shadow-lg' >
             <option>select Location</option>
             <option></option>
             <option></option>
             </select>
             </h1>
    
             <h1><p  className='px-2 font-bold'>Date</p>
          <select className='text-slate-500  border-slate-100  shadow-lg'>
             <option>select date</option>
             <option></option>
             <option></option>
             </select>
             </h1>
    
    
             <h1><p  className='px-2 font-bold'>Time</p>
          <select className='text-slate-500 border border-slate-100  shadow-lg' >
             <option>select Time</option>
             <option></option>
             <option></option>
             </select>
             </h1>
             </div>
    
    <div className='flex  justify-between py-4 mt-4 px-2'>
        <div>
           
           <h1 className='font-bold px-2'>Total Rent Price</h1><p className='text-xs text-slate-400'>Overall price and includes rental discount</p>
              
            </div>
            <p className='font-bold text-lg'>$80.00</p>
        </div>
    </div>
    
    <div className='mb-10'>
    <div  className='bg-white w-[500px] mx-6 mt-4 rounded mb-4 h-64'>
    
    <Image
      src="/kk.png"
     alt='car image' width={524} height={324} />
    
    
    </div>
    <div  className='bg-white w-[500px] mx-6 mt-5 rounded  h-50  '>
    
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="bg-white rounded shadow-md w-full max-w-2xl   ">
            <div className="flex justify-between items-center p-4 border-b ">
              <h2 className="text-lg font-semibold text-gray-700 mt-8">Recent Transactions</h2>
              <Link href="#" className="text-blue-500 text-sm hover:underline">
                View All
              </Link>
            </div>
            <div>
              {transactions.map((transaction) => (
                <div
                  key={transaction._id}
                  className="flex items-center justify-between p-4 border-b last:border-none"
                >
                  <div className="flex items-center ">
                     {transaction.image && (
                            <Image 
                            src={urlFor(transaction.image).url()}
                            alt="image" width={100} height={100} className="h-16 w-24 rounded-md object-cover"/>
                        )} 
                     
                    
                    <div className="ml-4">
                      <h3 className="text-md font-semibold text-gray-800">
                        {transaction.name}
                      </h3>
                      <p className="text-sm text-gray-500">{transaction.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                    <p className="text-md font-semibold text-gray-800">
                      {transaction.pricePerDay}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    
    
              </div>
         </div> 
      </div>
      )
    }
    
    export default Graph
    
    