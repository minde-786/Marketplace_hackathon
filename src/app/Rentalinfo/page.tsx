
import React from 'react'

import Image from 'next/image'
import { Booking } from '../../../type/product'
import BookingCard from '../../components/rent'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Rental info",
  description: "Generated by create next app",
};
import Link from 'next/link'


function Rentalinfo() {
  
    
  const Booking : Booking[] = [
    {
      type:'Location',
      option1:'select city',
      option2:'Karachi',
      option3:'Lahore' ,
      option4: 'Skardu',
      option5:'Islamabad',
      option6: 'Quetta',
      
    },
  
   
    {
     type:'  Time',
    option1:'select Time' ,
     option2:'3:00 pm' ,
     option3:'4:00 am' ,
     option4: '5:00 pm',
     option5 :'6:00 am',
     option6:'7:00 pm',

   },
   




  ]
  return ( 
    <div className='bg-slate-100 mx-1 rounded shadow-md '>
      
<div className='md:flex justify-around mx-2 gap-5  '>
<div className='bg-white mt-3'>
<h1 className='font-bold py-4 px-3'>Billing Info</h1>
<h2 className='flex justify-between'><p className='text-xs text-slate-600 px-3 '>Please enter your billing info</p> <p className='text-slate-400 px-2'>1 of 4</p></h2>
<div className='md:grid grid-cols-2 gap-2'>
  <h1 className='py-5' >
    <p className='font-semibold mx-3'>FullName</p>
    <input
    type='text'
    placeholder='Your name'
    className=' rounded py-2 mt-3  mx-3 md:w-96 px-2 border border-slate-200 bg-slate-100  shadow-lg' />

  </h1>
  <h1>
    <p className='font-semibold py-3'>PhoneNumber</p>
    <input
    type='text'
    placeholder='Phone number'
    className='rounded py-2 mt-3  mx-3 md:w-96 px-2 border border-slate-200  bg-slate-100  shadow-lg'  />
   
  </h1></div>


<div className='md:grid grid-cols-2 gap-5 py-5'>
<h1>
    <p className='font-semibold px-3'>Address</p>
    <input
    type='text'
    placeholder='Address'
    className=' rounded py-2 mt-3  mx-3 md:w-96 px-2 border border-slate-200  bg-slate-100  shadow-lg'/>
  </h1>
  <h1>
    <p className='font-semibold'>Town/City</p>
    <input
    type='text'
    placeholder='city or town'
    className=' rounded py-2 mt-3  mx-3 md:w-96 px-2 border border-slate-200  bg-slate-100  shadow-lg' /></h1>
 </div>





<div className='bg-white rounded'>

     <h1 className='font-bold px-4 py-3'> Rental Info</h1>
     <p className='text-sm text-slate-500 px-4'>Please select your rental date <span className='flex justify-end text-slate-500 '>2 of 4</span></p>
     <Image
     src='/88.png'
     alt="image" width={100} height={20}
     className='py-4 px-3'

     />
<div className='grid grid-cols-2  '>
   <h1 className=''>{Booking.map((Booking) => (

          <BookingCard key={Booking.type} Booking={Booking} />
        ))}</h1> 



<h1><p className='font-semibold px-4 py-3 '> Date</p>
<p className='px-4 '> <select className=" w-full p-2 border rounded-md focus:outline-blue-500 text-gray-700 bg-slate-100  ">
            <option>select Date</option>
              <option>Dec2024</option>
              <option> Jan 2025</option>
              <option> Feb 2025</option>
              <option>March 2025</option>
              <option> April 2025</option>
            </select></p></h1> </div></div>
            
            <div>

            <Image
     src='/hh.png'
     alt="image" width={100} height={20}
     className='py-4 px-3'

     />
<div className='grid grid-cols-2 '>
   <h1>{Booking.map((Booking) => (

          <BookingCard key={Booking.type} Booking={Booking} />
        ))}</h1> 



<h1><p className='font-semibold px-4 py-3 '> Date</p>
<p className='px-4 '> <select className=" w-full p-2 border rounded-md focus:outline-blue-500 text-gray-700 bg-slate-100 ">
            <option>select Date</option>
              <option>Dec2024</option>
              <option> Jan 2025</option>
              <option> Feb 2025</option>
              <option>March 2025</option>
              <option> April 2025</option>
            </select></p></h1> </div></div>
            
            <div>



<div className='bg-white rounded'><h1 className='font-bold px-4 py-4'>payment Method</h1>
<h2 className='flex justify-between'><p className='text-xs text-slate-500 py-2 px-4'>please enter your payment method</p><p className='text-slate-400 px-2'>3 of 4</p></h2>

<div className=' py-3'>
<h1 className='flex justify-between font-semibold pb-5 px-2'> <li>Credit Card</li> 
<Image
src='/Visa.png'
alt='card'width={92} height={20}
/> </h1>
<div className='lg:grid grid-cols-2'>
  
  <h2>
  <p className='font-semibold px-4'>Card Number</p>
   <p> <input
    type='text'
    placeholder='Card Number'
    className=' rounded py-2 mt-3  mx-3 md:w-96 px-2 border border-slate-200 bg-slate-100 shadow-lg' /></p></h2>
<h2>
<p className='font-semibold'>Expration Date</p>
   <p> <input
    type='text'
    placeholder='DD/MM/YY'
    className=' rounded py-2 mt-3  mx-3 md:w-96 px-2 border border-slate-200  bg-slate-100 shadow-lg' /></p>
</h2>
</div>
<div className='lg:grid grid-cols-2  '>

<h2>
  <p className='font-semibold px-4'>CardHolder</p>
   <p> <input
    type='text'
    placeholder='Cardholder'
    className=' rounded py-2 mt-3  mx-3 md:w-96 px-2 border border-slate-200  bg-slate-100 shadow-lg' /></p></h2>
<h2>
<p className='font-semibold'>CVC</p>
   <p> <input
    type='text'
    placeholder='cvc'
    className=' rounded py-2 mt-3  mx-3 md:w-96 px-2 border border-slate-200  bg-slate-100 shadow-lg' /></p>
</h2>
</div>





        {/* Payment Options */}
        <div className=" bg-white mx-3 py-2 mt-3 border border-slate-200 rounded mb-5">
          <h2 className="text-lg font-semibold mb-4 mt-2 px-2 ">Payment Options</h2>
          
          
          <div>

          <div className="lg:grid grid-cols-2 mb-4 bg-slate-100 py-2 border border-slate-200 rounded mx-3 shadow-lg">
            <div><input
              type="radio"
              name="payment"
              id="paypal"
              className="mr-2 w-5 h-5 text-blue-600"
            />
            <span>Paypal</span></div>
            <Image
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="Bitcoin Logo" width={100} height={24}
            className="h-5"
            />
            
          </div>




          <div className="lg:grid grid-cols-2 mb-4 bg-slate-100 py-2 mx-3 border border-slate-200 rounded shadow-lg">
            <div><input
              type="radio"
              name="payment"
              id="paypal"
              className="mr-2 w-5 h-5 text-blue-600"
            />
            <span>Bitcoin</span></div>
            <Image
            src="/Bitcoin.png"
            alt="Bitcoin Logo" width={100} height={24}
            className="h-5"
            />
            
          </div>


         
       </div> 
           </div>
                  </div>

</div>

</div>
<div > 
 <h1 className='flex justify-between'> <p className='font-bold mt-3 px-2'>Confirmation </p><p className='text-slate-400'>4 of 4</p></h1>
<p className='text-xs text-slate-400 py-2 px-2'>We are getting to the end. Just few clicks and your rental is ready!</p>

<h1 className='px-2'><input
              type="checkbox"

               className="mr-2 w-5 h-5 text-blue-600"
            /><span className='text-sm'>I agree with sending an Marketing and newsletter emails. No spam, promissed!</span>
</h1>
<h1 className='px-2'><input
              type="checkbox"
              className="mr-2 w-5 h-5 text-blue-600 "
            /><span className='text-sm'>I agree with our terms and conditions and privacy policy.</span></h1>
          <Link href='/Billing'>  <button className='mt-4 bg-blue-600 py-1 px-2 ml-2 mb-6 rounded-md '>Rent Now</button></Link>
            
</div>
<Image
src='/hhh.png'
alt='image' width={558} height={100}
className='mb-4'
/>
       </div>
            
       
            
             
<h1>
<Image
src='/Rent.png'
alt='rental sumary' width={392} height={560} 
className='mt-3'/></h1></div>



</div>
)


  
}

export default Rentalinfo

function useForm(): { register: any; handleSubmit: any; formState: {}; } {
  throw new Error('Function not implemented.');
}

