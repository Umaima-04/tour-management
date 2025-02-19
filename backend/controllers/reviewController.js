import Tour from "../models/Tour.js"
import Review from "../models/Review.js"

export const createReview=async(req,res)=>{

    const tourId= req.params.tourId;
    const newReview=new Review({...req.body});

    try{
        const savedReview=await newReview.save();

        //after create new review and update the reviews arrayof tour
        const tour = await Tour.findById(tourId);
        if (!tour) {
            return res.status(404).json({ success: false, 
                message: "Tour not found" });
        }

        // Update the tour with the new review ID
        await Tour.findByIdAndUpdate(tourId,
             { $push: { reviews: savedReview._id } });

      res.status(200).json({
      success: true,
      message: "Review Submitted",
      data: savedReview,
     });
    } catch (err) {
      console.error("Error creating review:", err);
      res.status(500).json({
      success: false,
      message: "Failed to Submit",
      error: err.message,
    });
  }
};