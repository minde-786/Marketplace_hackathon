import React from 'react'
import { Booking } from '../../type/product';
interface BookingCardProps {
  Booking: Booking;}
const BookingCard : React.FC<BookingCardProps> = ({ Booking }) => {
  return (
    <div>
    <div> <p className='font-semibold px-4 py-3 '>{Booking.type}</p>
<h1 className='px-4 '> <select className=" w-full p-2 mb-4 border rounded-md focus:outline-blue-500 bg-slate-100 text-gray-700 ">
            <option>{Booking.option1}</option>
              <option>{Booking.option2}</option>
              <option>{Booking.option3}</option>
              <option>{Booking.option4}</option>
              <option>{Booking.option5}</option>
              <option>{Booking.option6}</option>
            </select></h1>

          
           
            </div> 

    </div>
  )
}

export default BookingCard