import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-full w-full flex justify-center bg-bg-green text-white">
      <div className="w-[1200px] h-full over">
        <Outlet />
      </div>
    </div>
  );
}
