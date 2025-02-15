'use client';

import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs';

function LoginPage() {
 

  return ( <ClerkProvider>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
     <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg"> <SignedIn>
              <div className='flex justify-center'> <UserButton  /></div>
              </SignedIn>
               <SignedIn> <h2 className="text-2xl font-semibold text-center text-gray-700">Wellcome</h2>  </SignedIn>
               <SignedOut >
      
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
         
        
         <SignInButton mode='modal' />
             <SignedIn  >
             <SignOutButton />
             </SignedIn>
            
          </button>
        
        </SignedOut> </div> 
       </div> </ClerkProvider>
  );
}
export default LoginPage