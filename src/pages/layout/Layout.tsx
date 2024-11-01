import { Outlet, useHref, useNavigate } from "react-router-dom";
import NavBar from "../../components/layout/NavBar/NavBar";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";

function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <NextUIProvider navigate={navigate} useHref={useHref}>
        <Toaster theme="light" position="top-center" richColors={true} />
        {/* <NavBar /> */}
        {/* substract header navbar height */}
        <div className="w-full h-screen bg-white">
          <Outlet />
        </div>
      </NextUIProvider>
    </>
  );
}

export default Layout;
