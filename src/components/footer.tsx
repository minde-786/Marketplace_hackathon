import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
     <div  className='md:grid grid-cols-2 '>
      <div className='py-12 px-6'>  <h1 className='text-blue-700 text-xl font-bold'>MORENT </h1>
            <p className='text-xs py-2'>Our vision is to provide convenience <br></br>and help increase your sales business.</p></div>
        
<div className='py-12 px-6 grid grid-cols-2 md:flex justify-around'>
   <h1> 
    <p>About</p>
<ul className='text-slate-400'>
<li>How it works</li>
<li>Featured</li>
<li>Partnership</li>
<li>Bussiness Relation</li>
    </ul>
   
   
   </h1> 
   <h1  >
    <p>Community</p>
   <ul className='text-slate-400'>
    <li><Link href='/'>Discord</Link></li>
    <li><Link  href='/https://www.linkedin.com/in/muntazir-mehdi-5aa2462ba/'>Instagram</Link></li>
    <li><Link  href='/'>Twitter</Link></li>
    <li><Link  href='/https://www.facebook.com/profile.php?id=100064101377890'>Facebook</Link></li>
    </ul>
   
   
   </h1> 
   <h1>
    
    <p>socials</p>
   
    <ul  className='text-slate-400'>
    <li>Events</li>
    <li>Blug</li>
    <li>Podcast</li>
    <li>Invite Friends</li>
    </ul>
   </h1> 
    
</div></div>
<span><hr/></span>
      <div className='grid grid-cols-2 mt-4 mb-8'>
        <h1 className='text-pretty font-semibold'>©2022 MORENT. All rights reserved</h1>
        <h1 className='flex justify-around text-pretty font-semibold'>
        <p>Privacy&Policy</p>
        <p>Terms&Condition</p>
        </h1>
      </div>
    </div>
  )
} 

export default Footer