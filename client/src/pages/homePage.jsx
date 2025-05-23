
import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="w-full h-[calc(100vh-80px)] flex-col items-center">
        <Outlet />
      </div>
    </div>
  );
}
