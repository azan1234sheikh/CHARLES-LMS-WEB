import "./styles/index.css";
import "./styles/font.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Signup from "./Pages/Auth/Signup/Signup.jsx";
import Signin from "./Pages/Auth/Signin/Signin.jsx";
import Forgot from "./Pages/Auth/Forgot/Forgot.jsx";
import Verify from "./Pages/Auth/VerifyIdentity/Verify.jsx";
import Signin2 from "./Pages/Auth/Web-signin2/Signin2.jsx";
import Sidebar from "./Components/Sidebar/sidebar.jsx";
import Explorecourse from "./Pages/Courses/ExploreCourses/Explorecourse.jsx";
import MyCourses from "./Pages/Courses/MyCourses/MyCourses.jsx";
import CreateCourses from "./Pages/Courses/CreateCourses/CreateCourses.jsx";
import HomepagePage from "./Pages/Homepage/index.jsx";
import theme from "./theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/SignUp",
    element: <Signup />,
  },
  {
    path: "/Signin",
    element: <Signin />,
  },
  {
    path: "/Forgot",
    element: <Forgot />,
  },

  {
    path: "/Verify",
    element: <Verify />,
  },
  {
    path: "/WebSignin",
    element: <Signin2 />,
  },
  {
    path: "/Sidebar",
    element: <Sidebar />,
  },
  {
    path: "/Explorecourse",
    element: <Explorecourse />,
  },
  {
    path: "/Mycourse",
    element: <MyCourses />,
  },
  {
    path: "/CreateCourse",
    element: <CreateCourses />,
  },
  {
    path: "/Homepage",
    element: <HomepagePage />,
  },
]);

const App = () => {
  return (
    <>
      <ToastContainer />
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  );
};

export default App;
