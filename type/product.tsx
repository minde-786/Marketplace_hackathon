export interface Car {
      fuel: number;
      transmission: string;
      capacity: number; 
    _id:string;
    name:string;
    _type:"car";
    image?:{
      asset :{
        _ref :string;
        _type : "image";
      }
    };
  
  price: number;
  
  type:string;
  date:number;
  fuelCapacity:string;
  seatingCapacity:string;
  pricePerDay:string;
  originalPrice:string;
  tags:string;
  slug?:{
    _type:"slug";
    current:string;
  }
  
  
    }
  
    export interface Booking {
  type:string;
  option1:string;
  option2:string;
  option3:string;
  option4:string;
  option5:string;
  option6:string;
    }