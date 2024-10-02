import { useNavigate, useHref, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import router from "./routes";

function App() {
  const navigate = useNavigate();

  return (
    // <NextUIProvider navigate={navigate} useHref={useHref}>
    <RouterProvider router={router} />
    // </NextUIProvider>
  );
}

export default App;
