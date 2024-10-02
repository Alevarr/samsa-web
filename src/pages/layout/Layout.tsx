import { Outlet, useHref, useNavigate } from "react-router-dom";
import NavBar from "../../components/layout/NavBar/NavBar";
import { NextUIProvider } from "@nextui-org/react";

function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <NextUIProvider navigate={navigate} useHref={useHref}>
        <NavBar />
        {/* substract header navbar height */}
        <div className="w-full h-screen-without-navbar p-5">
          <Outlet />
        </div>
      </NextUIProvider>
    </>
  );
}

export default Layout;
