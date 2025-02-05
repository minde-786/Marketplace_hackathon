
import React from 'react'
import { Search } from 'lucide-react';
 import { TextSearch } from 'lucide-react';
 import { Heart } from 'lucide-react';
 import { Settings } from 'lucide-react';
 import { Bell } from 'lucide-react';
import Image from 'next/image';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';

function Navbar() {
  return (
    
    
      <div className=' grid grid-cols-4 border border-slate-100 shadow-md ' >
      <h1 className=' text-2xl text-blue-600 mx-7 font-semibold py-4  '> MORENT</h1>
      <h1 className='border border-slate-200 w-64 rounded-2xl mt-4 mb-5 px-3 py-2 flex items-center gap-3 ml-4'>
  <Search />
  <input
    type='text'
    placeholder='Search something here'
    className='w-full focus:outline-none' // Added w-full to make the input take the full width
  />
  <TextSearch />
</h1>

<h2 className='hidden lg:grid grid-cols-4 py-4 mx-5 ml-2 gap-36 '> 
      <Heart 
     className='border border-gray-100 rounded-full py-1 px-1 mt-2 shadow-md'/> 
     <Bell className='border border-gray-100 mt-2 rounded-full py-1 px-1 '/> 
     <Link href='/graph'>  <Settings className='border border-gray-100  mt-2 rounded-full py-1 px-1 shadow-md'/></Link></h2>
<Link href='/graph'>
<Image
 src='/mm.png'
     alt='profile' width={40} height={40}
     className='mb-1 py-4 ml-48 lg:ml-60 '
     /></Link>
     
      </div> 
    
  )
}

export default Navbar