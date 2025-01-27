import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Dashboard from "../Page/Dashboard/Dashboard";
import AllProducts from "../Page/Dashboard/DashboardPages/Product/AllProducts";
import Brands from "../Page/Dashboard/DashboardPages/Product/Brands/Brands";
import Category from "../Page/Dashboard/DashboardPages/Product/Category/Category";
import Orders from "../Page/Dashboard/DashboardPages/Orders/CustomersList/CustomersList";
import About from "../Page/Dashboard/DashboardPages/About/About";
import Faq from "../Page/Dashboard/DashboardPages/Faq/Faq";
import Privacy from "../Page/Dashboard/DashboardPages/Privacy/Privacy";
import Terms from "../Page/Dashboard/DashboardPages/Terms/Terms";
import Return from "../Page/Dashboard/DashboardPages/Return/Return";
import CustomersList from "../Page/Dashboard/DashboardPages/Orders/CustomersList/CustomersList";
import AddCustomer from "../Page/Dashboard/DashboardPages/Orders/AddCustomer/AddCustomer";
import ContactMessages from "../Page/Dashboard/DashboardPages/ContactMessages/ContactMessages";
import NewsLetter from "../Page/Dashboard/DashboardPages/NewsLetter/NewsLetter";
import RoleManagement from "../Page/Dashboard/DashboardPages/UserRole/RoleManagement";
import RolePermission from "../Page/Dashboard/DashboardPages/UserRole/RolePermission";
import SiteSetup from "../Page/Dashboard/DashboardPages/SiteSetting/SiteSetup";
import BrandCreate from "../Page/Dashboard/DashboardPages/Product/Brands/BrandCreate";
import BrandEdit from "../Page/Dashboard/DashboardPages/Product/Brands/BrandEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main layout with Header, Footer, and Outlet
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "admin/",
        element: <Dashboard />,
      },
      {
        path: "admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "admin/allproduct",
        element: <AllProducts />,
      },
      {
        path: "admin/brand",
        element: <Brands />,
      },
      {
        path: "admin/category",
        element: <Category />,
      },
      {
        path: "admin/orders",
        element: <Orders />,
      },
      {
        path: "admin/about",
        element: <About />,
      },
      {
        path: "admin/faq",
        element: <Faq />,
      },
      {
        path: "admin/privacy",
        element: <Privacy />,
      },
      {
        path: "admin/terms",
        element: <Terms />,
      },
      {
        path: "admin/return",
        element: <Return />,
      },
      {
        path: "admin/customer-list",
        element: <CustomersList />,
      },
      {
        path: "admin/add-customer",
        element: <AddCustomer />,
      },
      {
        path: "admin/contact-message",
        element: <ContactMessages />,
      },
      {
        path: "admin/newsletter",
        element: <NewsLetter />,
      },
      {
        path: "admin/role-management",
        element: <RoleManagement />,
      },
      {
        path: "admin/role-permission",
        element: <RolePermission />,
      },
      {
        path: "admin/site-setup",
        element: <SiteSetup />,
      },
      {
        path: "admin/site-database",
        element: <SiteSetup />,
      },
      {
        path: "admin/brand/create",
        element: <BrandCreate />,
      },
      {
        path: "admin/brand/edit",
        element: <BrandEdit />,
      },
      // Add more routes as needed
    ],
  },
]);

export default router;
