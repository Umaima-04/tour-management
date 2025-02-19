import Booking from '../models/Booking.js'


//create new booking
export const createBooking=async(req,res)=>{
    console.log("Received Body:", req.body);
    const newBooking=new Booking(req.body)
    try{
        const savedBooking=await newBooking.save();
         res.status(200).json({success:true,
         message:"Your tour is booked"
         ,data:savedBooking})
        }catch(err){
             console.error("Error Saving Booking:", err);
             res.status(500).json({success:false,
             message:"Internal server error"
             });
        }
};

//get single booking
export const getBooking=async(req,res)=>{
    const id=req.params.id
    try{
        const book=await Booking.findById(id);
        res.status(200).json({success:true,
            message:"successful"
            ,data:book});

    }catch(err){
        res.status(404).json({success:false,
            message:"not found"
            });
    }
}

//get all booking
export const geAlltBooking=async(req,res)=>{
    
    try{
         const books=await Booking.find();
         res.status(200).json({success:true,
            message:"successful"
            ,data:books});

    }catch(err){
        res.status(500).json({success:false,
            message:"Internal Server Error"
            });
    }
}