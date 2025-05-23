import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import ImageSlider from "../../components/imageSlider";
import Loading from "../../components/loading";
import { addToCart, getCart } from "../../utils/cart";

export default function ProductOverviewPage() {
  const params = useParams(); //to read product id
  const productId = params.id; // get that id to productId varivale
  const [status, setStatus] = useState("loading"); // loading, success, error
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
        setStatus("success");
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
        toast.error("Error fetching product details");
      });
  }, []);

  return (
    <>
      {status == "success" && (
        <div className="w-full h-screen flex pt-[80px]">
          <div className="w-[50%] h-full flex justify-center items-center">
            <ImageSlider images={product.images} />
          </div>

          
          {/* Details */}
          <div className="w-full md:w-1/3 pt-[80px]">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-6">
              {/* Title */}
              <div className="space-y-2 text-center border-b pb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{product.name}</h1>
                {product.altNames.length > 0 && (
                  <div className="text-gray-500 flex flex-wrap justify-center text-sm gap-2">
                    {product.altNames.map((altName, index) => (
                      <span key={index} className="after:content-['|'] last:after:content-[''] after:mx-2">
                        {altName}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Product ID */}
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
                <span>Product ID: {product.productId}</span>
              </div>

              {/* Description */}
              <div className="text-gray-700 bg-gray-50 p-4 rounded-lg leading-relaxed">
                {product.description}
              </div>

              {/* Price */}
              <div className="text-center space-y-2">
                {product.labellePrice > product.price ? (
                  <>
                    <div className="text-lg text-gray-400 line-through">
                      LKR {product.labellePrice.toFixed(2)}
                    </div>
                    <div className="text-3xl font-bold text-blue-600">
                      LKR {product.price.toFixed(2)}
                      <span className="ml-3 text-sm px-2 py-1 bg-red-100 text-red-600 rounded font-medium">
                        {Math.round((1 - product.price / product.labellePrice) * 100)}% OFF
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="text-3xl font-bold text-blue-600">
                    LKR {product.price.toFixed(2)}
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    addToCart(product, 1);
                    toast.success(`${product.name} added to cart`);
                  }}
                  className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition"
                >
                  Add to Cart
                </button>
                <button className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow transition">
                  Buy Now
                </button>
              </div>

              {/* Extra Info */}
              <div className="pt-4 border-t text-gray-500 text-sm flex flex-col sm:flex-row gap-4 justify-between">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  Free Shipping
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  30-Day Return
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {status == "loading" && <Loading />}
    </>
  );
}
