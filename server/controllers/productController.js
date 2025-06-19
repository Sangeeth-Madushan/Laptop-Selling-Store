import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export async function saveProduct(req, res) {
  if (!isAdmin) {
    res.json({
      message: "You need to be an admin",
    });
    return;
  }

  // if admin alow to do task
  const product = new Product(req.body);

  // async-await usage for asyncrous operations(get long time but do not harm others)
  try {
    const saveProduct = await product.save();
    res.json({
      message: "product added successful",
      saveProduct: saveProduct,
    });
  } catch (error) {
    res.json({
      error: error,
      message: "product added failed",
    });
  }
}

// with async and await
export async function getProduct(req, res) {
  try {
    if (isAdmin(req)) {
      const data = await Product.find(); // only admin can see all product even that product is not availbale in the stock
      res.json(data);
    } else {
      const data = await Product.find({ isAvailable: true }); // coustomers can not see product that are not avaiable
      res.json(data);
    }
  } catch (error) {
    res.json({
      message: "error to run",
      error: error,
    });
  }
}

export async function deleteProduct(req, res) {
  if (!isAdmin) {
    res.status(403).json({
      message: "You do not have authorize to delete product",
    });
    return;
  }

  try {
    await Product.deleteOne({ productId: req.params.productId });
    res.json({
      message: "peoduct is deleted successfull",
    });
  } catch (error) {
    res.status(500).json({
      message: "failed to delete",
      error: error,
    });
  }
}

export async function updateProduct(req, res) {
  if (!isAdmin) {
    res.json({
      message: " you do not have access to update",
    });
    return;
  }

  const productId = req.params.productId;
  const updated = req.body;

  try {
    await Product.updateOne({ productId: productId }, updated);

    res.json({
      message: "updated successfull",
    });
  } catch (error) {
    res.status(500).json({
      message: "update failed",
      error: error,
    });
  }
}

export async function getProductById(req, res) {
  const getProduct = req.params.productId;

  try {
    const product = await Product.findOne({ productId: getProduct });

    if (product == null) {
       res.status(404).json({
        message: "Product not found",
      });
      return
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: "can not find product",
      error: error,
    });
  }
}

export async function searchProduct(req, res) {
	const search = req.params.query;
	try {
		const products = await Product.find({
			$or: [
				{ name: { $regex: search, $options: "i" } },
				{ altNames: { $elemMatch: { $regex: search, $options: "i" } } },
			],

      isAvailable : true
		});
		res.json(products)
    
	} catch (err) {
		res.status(500).json({
			message: "Error in searching product",
		});
		return;
	}
}