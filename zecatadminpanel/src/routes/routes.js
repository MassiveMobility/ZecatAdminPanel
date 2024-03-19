import TwoWheelerPage from "../pages/TwoWheelerPage/TwoWheelerPage";
import FourWheelerPage from "../pages/FourWheelerPage/FourWheelerPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import BrandsPage from "../pages/BrandsPage/BrandsPage";
import PostPage from "../pages/PostPage/PostPage";
import UserListPage from "../pages/UserListPage/UserListPage";
import EnquiryPage from "../pages/EnquiryPage/EnquiryPage";
import LoanApplicationPage from "../pages/LoanApplicationPage/LoanApplicationPage";
import LeaseApplicationPage from "../pages/LeaseApplicationPage/LeaseApplicationPage";
import Settings from "../pages/Settings/Settings";
import AddTwoWheeler from "../pages/TwoWheelerPage/AddTwoWheeler";
import AddVariant from "../pages/AddVariant/AddVariant";
import AddBrand from "../pages/AddBrand/AddBrand";
import AllPosts from "../pages/AllPosts/AllPosts";

export const allRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/two_wheelers",
    element: <TwoWheelerPage />,
  },
  {
    path: "/two_wheelers/:id",
    element: <AddTwoWheeler />,
  },
  {
    path: "/two_wheelers/:id/:id",
    element: <AddVariant />,
  },
  {
    path: "/four_wheelers",
    element: <FourWheelerPage />,
  },
  {
    path: "/brands",
    element: <BrandsPage />,
  },
  {
    path: "/brands/:id",
    element: <AddBrand />,
  },
  {
    path: "/posts",
    element: <PostPage />,
  },
  {
    path: "/user_list",
    element: <UserListPage />,
  },
  {
    path: "/enquiry",
    element: <EnquiryPage />,
  },
  {
    path: "/loan_application",
    element: <LoanApplicationPage />,
  },
  {
    path: "/lease_application",
    element: <LeaseApplicationPage />,
  },
  {
    path: "/setting",
    element: <Settings />,
  },
  {
    path: "/all_posts",
    element: <AllPosts />,
  },
  {
    path: "*",
    element: "not found",
  },
];
