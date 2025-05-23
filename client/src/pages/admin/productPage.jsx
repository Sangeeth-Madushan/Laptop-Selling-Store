
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading == true) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
        .then((res) => {
          console.log(res.data);
          setProducts(res.data);
          setIsLoading(false);
        });
    }
  }, [isLoading]);

  async function deleteProduct(productId) {
    const token = localStorage.getItem("token");
    if (token == null) {
      toast.error("please login first");
      return;
    }

    try {
      await axios.delete(
        import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      toast.success("Product deleted successfully");
      setIsLoading(true); // inform to useEffect to work(now isLoading = true)
    } catch (e) {
      toast.error(e.response?.data?.message || "Failed to delete product");
    }
  }

  return (
    <div className="w-full h-full bg-red-50 p-4 overflow-y-auto relative">
      {/* Add Product Button */}
      <Link
        to="/admin/add-product"
        className="fixed bottom-5 right-5 bg-green-500 text-white font-bold py-2 px-4 rounded-b-md text-2xl shadow-lg hover:bg-green-600"
      >
        +
      </Link>

      <div className="overflow-x-auto">
        {isLoading ? (
          <div className="w-full flex h-screen items-center justify-center">
            <div className="w-[60px] h-[60px] border-t-blue-700 border-gray-400 border-[5px] rounded-full animate-spin"></div>
          </div>
        ) : (
          <table className="w-full text-left border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-200 sticky top-0 z-10">
              <tr>
                <th className="py-3 px-4 border-b border-gray-300">
                  Product ID
                </th>
                <th className="py-3 px-4 border-b border-gray-300">Name</th>
                <th className="py-3 px-4 border-b border-gray-300">Image</th>
                <th className="py-3 px-4 border-b border-gray-300">
                  Labelled Price
                </th>
                <th className="py-3 px-4 border-b border-gray-300">Price</th>
                <th className="py-3 px-4 border-b border-gray-300">Stock</th>
                <th className="py-3 px-4 border-b border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 transition duration-200"
                >
                  <td className="py-2 px-4 border-b border-gray-200">
                    {item.productId}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {item.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-[50px] h-[50px] object-cover rounded"
                    />
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {item.labellePrice}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {item.price}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {item.stock}
                  </td>
                  
                  <td className="py-2 px-4 border-b border-gray-200">
                    <div className="flex flex-row  items-center w-full">
                      <FaTrash
                        onClick={() => {
                          deleteProduct(item.productId);
                        }}
                        className="text-red-600 mx-2 cursor-pointer"
                      />
                      <FaEdit
                        onClick={() => {
                          navigate("/admin/edit-product", { state: item });
                        }} // { state: index} take data /edit-product
                        className="text-blue-600 mx-2 cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
