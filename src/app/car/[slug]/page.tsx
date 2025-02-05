import { client } from "@/sanity/lib/client";
import { Car } from "../../../../type/product";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface carPageProps {

    params:Promise <{slug:string}>
}
async function getCar(slug:string):Promise<Car> {
  return client.fetch(
   groq`*[_type=="car" && slug.current == $slug][0]{ 
  _id, 
  name, 
  type, 
  _type, 
  image, 
  pricePerDay, 
  originalPrice, 
  seatingCapacity, 
  tags, 
  transmission,
  fuelCapacity ,
}`
,{slug}
  )  
}
export default async function CarPage({params}:carPageProps) {

    const {slug}=await params;
    const car = await getCar (slug)
    return (
    <div className="max-w-7xl mx-auto px-4">
<div className=" grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-28 "> 
<div > <p className="font-extrabold">{car?.tags}</p><br/>{car?.image &&(
    <Image 
            src={urlFor(car.image).url()}
            alt="image" width={248} height={100}
            className="md:w-[700px] md:h-[200] py-8" />

)}<p className="text-2xl font-sans rounded border border-slate-100 px-3 py-5 shadow-2xl"> Id Number =  {car?._id}</p> </div>
<div className="flex flex-col gap-8 ">
<p className="font-extrabold">{car?._type}</p>
<h1 className=" text-4xl font-bold  rounded border border-slate-100 px-3 py-5 shadow-2xl">
{car?.name}
<br/><p className="text-sm">
{car?.transmission}</p>
</h1>
<p className="text-2xl font-sans rounded border border-slate-100 px-3 py-5 shadow-2xl ">
pricePerDay = {car?.pricePerDay}

</p>
<p className="text-2xl font-sans rounded border border-slate-100 px-3 py-5 shadow-2xl"> fuelCapacity = {car?.fuelCapacity}</p>
<p className="text-2xl font-sans rounded border border-slate-100 px-3 py-5 shadow-2xl"> seatingCapacity = {car?.seatingCapacity}</p>




</div>
</div>
    </div>)
}