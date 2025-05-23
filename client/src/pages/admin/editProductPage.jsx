import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";
import axios from "axios";

export default function EditProductPage() {
    
    const location = useLocation();//get items location 
    const [productId, setProductId] = useState(location.state.productId); //give productId to current product Id to edit
    const [name, setName] = useState(location.state.name);
    const [altNames, setAltNames] = useState(location.state.altNames.join(","));
    const [description, setDescription] = useState(location.state.description);
    const [images, setImages] = useState([]);
    const [labellePrice, setLabelledPrice] = useState(location.state.labellePrice);
    const [price, setPrice] = useState(location.state.price);
    const [stock, setStock] = useState(location.state.stock);
    const navigate = useNavigate()

    async function AddProduct() {

        const token = localStorage.getItem("token")
        if(token == null){
            toast.error("Please login first")
            return
        }
        
        //get imageUrls in location without change keep it
        let imageUrls = location.state.images;

        const promisesArray = [];

        for (let i = 0; i < images.length; i++) {
            promisesArray[i] = mediaUpload(images[i]);
        }
        try {
            //if image upload then update and change imgeUrls
            if(images.length>0){
                imageUrls = await Promise.all(promisesArray);
            
            }
             console.log(imageUrls);

            const altNamesArray = altNames.split(",")

            const product = {
                productId : productId,
                name : name,
                altNames : altNamesArray,
                description : description,
                images : imageUrls,
                labellePrice : labellePrice,
                price : price,
                stock : stock,
            }
            axios.put(import.meta.env.VITE_BACKEND_URL + "/api/products/"+ productId, product , {
              //send token to server check admin or coustomer
                headers : {
                    "Authorization" : "Bearer "+token
                }
            }).then(() => {
                toast.success("Product updated successfully")
                navigate("/admin/products")
            }).catch((e) => {
                toast.error(e.response.data.message)
            })

        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Edit Product</h2>

        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            disabled
            placeholder="Product ID"
            className="input input-bordered w-full"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Alt Names (comma separated)"
            className="input input-bordered w-full"
            value={altNames}
            onChange={(e) => setAltNames(e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            type="file"
            multiple
            className="file-input file-input-bordered w-full"
            onChange={(e) => setImages(e.target.files)}
          />
          <input
            type="number"
            placeholder="Labelled Price"
            className="input input-bordered w-full"
            value={labellePrice}
            onChange={(e) => setLabelledPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered w-full"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Stock"
            className="input input-bordered w-full"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <div className="flex justify-end mt-6 space-x-4">
          <Link
            to="/admin/products"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-sm transition"
          >
            Cancel
          </Link>
          <button
            onClick={AddProduct}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-sm transition cursor-pointer"
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
    );
}