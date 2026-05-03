import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import CartPage from "./pages/Cart/CartPage";
import DetailPage from "./pages/Detail/DetailPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import OrderPage from "./pages/Order/OrderPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "product/:id", element: <DetailPage /> },
            { path: "cart", element: <CartPage /> },
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
            { path: "order", element: <OrderPage /> },
            { path: "*", element: <NotFoundPage /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
