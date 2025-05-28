import Review from "../models/review.js";
import Product from "../models/product.js";

// Create a new review
export async function addReview(req, res) {
  if (!req.user) {
     res.status(401).json({ message: "Login required to post a review" });
     return
  }

  const { productId, rating, comment } = req.body;

  if (!productId || !rating || !comment) {
     res.status(400).json({ message: "Missing required fields" });
     return
  }

   //RVE00001
      let reviewId = "RVE00001"
  
      const lastReview = await Review.find().sort({date : -1}).limit(1)
      
      if(lastReview.length > 0){
          const lastReviewId = lastReview[0].reviewId //"RVE00551"
          const lastReviewNumberString = lastReviewId.replace("RVE","")//"00551"
          const lastReviewNumber = parseInt(lastReviewNumberString)//551
          const newReviewNumber = lastReviewNumber + 1 //552
          const newReviewNumberString = String(newReviewNumber).padStart(5, '0');
          reviewId = "RVE"+newReviewNumberString//"RVE00552"
      } 

  // Check if product exists
  const product = await Product.findOne({ productId });
  if (!product) {
     res.status(404).json({ message: "Product not found" });
     return
  }

  try {
    const review = new Review({
      reviewId: reviewId,
      productId,
      userEmail: req.user.email,
      userName: req.user.firstName + " " + req.user.lastName,
      rating,
      comment
    });

    const savedReview = await review.save();

    res.json({
      message: "Review added successfully",
      review: savedReview
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to add review", error: err });
  }
}

// Get reviews for a product
export async function getReviews(req, res) {
  const { productId } = req.params;
  // const productId = req.body.productId

  try {
    const reviews = await Review.find({ productId }).sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reviews", error: err });
  }
}

// Get all reviews for products
export async function getAllReviews(req, res) {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reviews", error: err });
  }
}
