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
    path: "/four_wheelers",
    element: <FourWheelerPage />,
  },
  {
    path: "/brands",
    element: <BrandsPage />,
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
    path: "*",
    element: "not found",
  },
];
