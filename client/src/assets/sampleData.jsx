export const sampleProducts =[
    {
        "_id": "681f478b3a4c359c54ef0fe7",
        "productId": "P1",
        "name": "Wireless Bluetooth ",
        "altNames": [
            "Bluetooth Headphones",
            "Wireless Headset"
        ],
        "description": "High-quality wireless headphones with noise cancellation and long battery life.",
        "images": [
            "https://example.com/images/headphones11.jpg",
            "https://example.com/images/headphones22.jpg"
        ],
        "labellePrice": 200,
        "price": 99.99,
        "stock": 70,
        "isAvailable": true,
        "__v": 0
    },
    {
        "_id": "681f47b23a4c359c54ef0fe9",
        "productId": "P2",
        "name": "Smart LED TV 50 Inch",
        "altNames": [
            "Smart TV",
            "LED Television"
        ],
        "description": "50-inch 4K Smart LED TV with voice control and built-in streaming apps.",
        "images": [
            "https://example.com/images/tv1.jpg"
        ],
        "labellePrice": 600,
        "price": 499.99,
        "stock": 25,
        "isAvailable": true,
        "__v": 0
    }
]


// this is for product page

// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { FaEdit, FaTrash } from "react-icons/fa";

// // SkeletonRow: renders a row of animated gray boxes
// function SkeletonRow() {
//   return (
//     <tr className="animate-pulse">
//       <td className="py-3 px-4 border-b border-gray-200">
//         <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//       </td>
//       <td className="py-3 px-4 border-b border-gray-200">
//         <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//       </td>
//       <td className="py-3 px-4 border-b border-gray-200">
//         <div className="w-[50px] h-[50px] bg-gray-200 rounded"></div>
//       </td>
//       <td className="py-3 px-4 border-b border-gray-200">
//         <div className="h-4 bg-gray-200 rounded w-1/3"></div>
//       </td>
//       <td className="py-3 px-4 border-b border-gray-200">
//         <div className="h-4 bg-gray-200 rounded w-1/3"></div>
//       </td>
//       <td className="py-3 px-4 border-b border-gray-200">
//         <div className="h-4 bg-gray-200 rounded w-1/4"></div>
//       </td>
//       <td className="py-3 px-4 border-b border-gray-200">
//         <div className="flex gap-2">
//           <div className="w-6 h-6 bg-gray-200 rounded"></div>
//           <div className="w-6 h-6 bg-gray-200 rounded"></div>
//         </div>
//       </td>
//     </tr>
//   );
// }

// export default function AdminProductPage() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isLoading) {
//       axios
//         .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
//         .then((res) => {
//           setProducts(res.data);
//           setIsLoading(false);
//         })
//         .catch((err) => {
//           toast.error("Failed to load products");
//           setIsLoading(false);
//         });
//     }
//   }, [isLoading]);

//   async function deleteProduct(productId) {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       toast.error("Please login first");
//       return;
//     }
//     try {
//       await axios.delete(
//         import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId,
//         {
//           headers: { Authorization: "Bearer " + token },
//         }
//       );
//       toast.success("Product deleted successfully");
//       setIsLoading(true);
//     } catch (e) {
//       toast.error(e.response?.data?.message || "Failed to delete product");
//     }
//   }

//   return (
//     <div className="w-full h-full bg-red-50 p-4 overflow-y-auto relative">
//       {/* Add Product Button */}
//       <Link
//         to="/admin/add-product"
//         className="fixed bottom-5 right-5 bg-green-500 text-white font-bold py-2 px-4 rounded-b-md text-2xl shadow-lg hover:bg-green-600"
//       >
//         +
//       </Link>

//       <div className="overflow-x-auto">
//         <table className="w-full text-left border border-gray-300 rounded-lg shadow-md">
//           <thead className="bg-gray-200 sticky top-0 z-10">
//             <tr>
//               <th className="py-3 px-4 border-b border-gray-300">Product ID</th>
//               <th className="py-3 px-4 border-b border-gray-300">Name</th>
//               <th className="py-3 px-4 border-b border-gray-300">Image</th>
//               <th className="py-3 px-4 border-b border-gray-300">Labelled Price</th>
//               <th className="py-3 px-4 border-b border-gray-300">Price</th>
//               <th className="py-3 px-4 border-b border-gray-300">Stock</th>
//               <th className="py-3 px-4 border-b border-gray-300">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {isLoading
//               ? Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)
//               : products.map((item, index) => (
//                   <tr
//                     key={item.productId || index}
//                     className="hover:bg-gray-100 transition duration-200"
//                   >
//                     <td className="py-2 px-4 border-b border-gray-200">
//                       {item.productId}
//                     </td>
//                     <td className="py-2 px-4 border-b border-gray-200">
//                       {item.name}
//                     </td>
//                     <td className="py-2 px-4 border-b border-gray-200">
//                       <img
//                         src={item.images?.[0]}
//                         alt={item.name}
//                         className="w-[50px] h-[50px] object-cover rounded"
//                       />
//                     </td>
//                     <td className="py-2 px-4 border-b border-gray-200">
//                       {item.labellePrice}
//                     </td>
//                     <td className="py-2 px-4 border-b border-gray-200">
//                       {item.price}
//                     </td>
//                     <td className="py-2 px-4 border-b border-gray-200">
//                       {item.stock}
//                     </td>
//                     <td className="py-2 px-4 border-b border-gray-200">
//                       <div className="flex flex-row items-center w-full">
//                         <FaTrash
//                           onClick={() => deleteProduct(item.productId)}
//                           className="text-red-600 mx-2 cursor-pointer"
//                         />
//                         <FaEdit
//                           onClick={() =>
//                             navigate("/admin/edit-product", { state: item })
//                           }
//                           className="text-blue-600 mx-2 cursor-pointer"
//                         />
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


//this is for addProductPage



// import { useState } from "react";
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import mediaUpload from "../../utils/mediaUpload";
// import axios from "axios";
// import {
//   FiArrowLeft,
//   FiUploadCloud,
//   FiDollarSign,
//   FiPackage,
//   FiTag,
// } from "react-icons/fi";

// export default function AddProductPage() {
//   const [productId, setProductId] = useState("");
//   const [name, setName] = useState("");
//   const [altNames, setAltNames] = useState("");
//   const [description, setDescription] = useState("");
//   const [labellePrice, setLabelledPrice] = useState("");
//   const [price, setPrice] = useState("");
//   const [stock, setStock] = useState("");
//   const [images, setImages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleImageChange = (e) => {
//     setImages(Array.from(e.target.files));
//   };

//   const AddProduct = async () => {
//     setIsLoading(true);
//     const token = localStorage.getItem("token");

//     if (!token) {
//       toast.error("Please login first");
//       setIsLoading(false);
//       return;
//     }

//     if (images.length <= 0) {
//       toast.error("Please select at least one image");
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const imageUploadPromises = images.map((img) => mediaUpload(img));
//       const imageUrls = await Promise.all(imageUploadPromises);
//       const altNamesArray = altNames.split(",").map((s) => s.trim());

//       const product = {
//         productId,
//         name,
//         altNames: altNamesArray,
//         description,
//         images: imageUrls,
//         labellePrice,
//         price,
//         stock,
//       };

//       await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/products`, product, {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       });

//       toast.success("Product added successfully");
//       navigate("/admin/products");
//     } catch (e) {
//       console.error(e);
//       toast.error(e?.response?.data?.message || "Something went wrong");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto relative">
//         <div className="flex items-center mb-8">
//           <Link to="/admin/products" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
//             <FiArrowLeft className="mr-2" /> Back to Products
//           </Link>
//         </div>

//         <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 relative">
//           {isLoading && (
//             <div className="absolute inset-0 bg-white bg-opacity-90 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-2xl">
//               <div className="flex flex-col items-center">
//                 <div className="relative w-12 h-12">
//                   <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
//                   <div className="absolute inset-0 bg-green-500 rounded-full"></div>
//                 </div>
//                 <p className="mt-4 text-gray-600 font-medium">Saving Product...</p>
//               </div>
//             </div>
//           )}

//           <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
//             <FiTag className="mr-3 text-green-500" />
//             New Product
//           </h1>

//           <div className="space-y-8">
//             {/* Basic Information */}
//             <section className="space-y-4">
//               <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Basic Information</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-1">
//                   <label className="text-sm font-medium text-gray-700">Product ID *</label>
//                   <input
//                     type="text"
//                     className="input input-bordered w-full"
//                     value={productId}
//                     onChange={(e) => setProductId(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="text-sm font-medium text-gray-700">Product Name *</label>
//                   <input
//                     type="text"
//                     className="input input-bordered w-full"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="space-y-1 col-span-full">
//                   <label className="text-sm font-medium text-gray-700">Alternative Names</label>
//                   <input
//                     type="text"
//                     className="input input-bordered w-full"
//                     value={altNames}
//                     onChange={(e) => setAltNames(e.target.value)}
//                     placeholder="Comma separated values"
//                   />
//                 </div>
//               </div>
//             </section>

//             {/* Images */}
//             <section className="space-y-4">
//               <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Product Images</h3>
//               <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-xl hover:border-green-500 transition-colors cursor-pointer relative">
//                 <FiUploadCloud className="w-12 h-12 text-gray-400 mb-2" />
//                 <span className="text-gray-600">Drag & drop images or click to upload</span>
//                 <input
//                   type="file"
//                   multiple
//                   className="hidden"
//                   onChange={handleImageChange}
//                 />
//                 {images.length > 0 && (
//                   <span className="absolute bottom-2 right-2 text-sm text-gray-500">
//                     {images.length} file{images.length > 1 ? "s" : ""} selected
//                   </span>
//                 )}
//               </label>
//             </section>

//             {/* Price & Stock */}
//             <section className="space-y-4">
//               <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Pricing & Stock</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="space-y-1">
//                   <label className="text-sm font-medium text-gray-700 flex items-center">
//                     <FiDollarSign className="mr-1 text-green-500" /> Market Price
//                   </label>
//                   <input
//                     type="number"
//                     className="input input-bordered w-full"
//                     value={labellePrice}
//                     onChange={(e) => setLabelledPrice(e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="text-sm font-medium text-gray-700 flex items-center">
//                     <FiDollarSign className="mr-1 text-green-500" /> Selling Price *
//                   </label>
//                   <input
//                     type="number"
//                     className="input input-bordered w-full"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="text-sm font-medium text-gray-700 flex items-center">
//                     <FiPackage className="mr-1 text-green-500" /> Stock Quantity *
//                   </label>
//                   <input
//                     type="number"
//                     className="input input-bordered w-full"
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
//             </section>

//             {/* Description */}
//             <section className="space-y-4">
//               <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Product Description</h3>
//               <textarea
//                 className="textarea textarea-bordered w-full h-32"
//                 placeholder="Describe the product features..."
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               ></textarea>
//             </section>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end space-x-4 mt-8 border-t pt-6">
//             <Link
//               to="/admin/products"
//               className="px-6 py-2.5 rounded-lg font-medium text-gray-600 hover:bg-gray-50"
//             >
//               Cancel
//             </Link>
//             <button
//               onClick={AddProduct}
//               disabled={isLoading}
//               className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-sm disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
//             >
//               {isLoading ? (
//                 <>
//                   <span className="animate-spin mr-2">🌀</span> Saving...
//                 </>
//               ) : (
//                 "Publish Product"
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
