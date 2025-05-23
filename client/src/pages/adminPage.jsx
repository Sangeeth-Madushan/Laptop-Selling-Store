

import { Link, Outlet } from "react-router-dom";


export default function AdminPage() {
  return (
    <div className="bg-amber-50 w-full h-screen flex flex-row">
      {/* Left Sidebar */}
      <div className="bg-red-100 w-[300px] h-full p-4">
        <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
        <nav className="flex flex-col space-y-3">
          <Link to="/admin/users" className="hover:underline text-blue-700">Users</Link>
          <Link to="/admin/products" className="hover:underline text-blue-700">Products</Link>
        </nav>
      </div>

      {/* Right Content */}
      <div className="bg-green-200 w-[calc(100%-300px)] h-full  overflow-auto">
        <Outlet/> 
      </div>
    </div>
  );
}
