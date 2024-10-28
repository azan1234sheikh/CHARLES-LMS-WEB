import "./styles/index.css";
import "./styles/font.css";
import { ChakraProvider, CircularProgress, Center, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { Suspense, useState, useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy-loaded components
const CourseDetail = React.lazy(() => import('./Pages/Courses/CourseDetail/CourseDetail.jsx'));
const Dashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard.jsx'));
const Signup = React.lazy(() => import('./Pages/Auth/Signup/Signup.jsx'));
const Signin = React.lazy(() => import('./Pages/Auth/Signin/Signin.jsx'));
const Forgot = React.lazy(() => import('./Pages/Auth/Forgot/Forgot.jsx'));
const Verify = React.lazy(() => import('./Pages/Auth/VerifyIdentity/Verify.jsx'));
const Signin2 = React.lazy(() => import('./Pages/Auth/Web-signin2/Signin2.jsx'));
const Sidebar = React.lazy(() => import('./Components/Sidebar/sidebar.jsx'));
const Explorecourse = React.lazy(() => import('./Pages/Courses/ExploreCourses/Explorecourse.jsx'));
const MyCourses = React.lazy(() => import('./Pages/Courses/MyCourses/MyCourses.jsx'));
const CreateCourses = React.lazy(() => import('./Pages/Courses/CreateCourses/CreateCourses.jsx'));
const HomepagePage = React.lazy(() => import('./Pages/Homepage/index.jsx'));
const Mentors = React.lazy(() => import('./Pages/WebMentor/Mentors/Mentors.jsx'));
const MentorCourses = React.lazy(() => import('./Pages/WebMentor/MentorCourses/MentorCourses.jsx'));
const Settings = React.lazy(() => import('./Pages/Settings/SidebarSettings/Settings.jsx'));
const Notification = React.lazy(() => import('./Pages/Notification/Notification.jsx'));
const Account = React.lazy(() => import('./Pages/Account/Account.jsx'));
const Accountsetting = React.lazy(() => import('./Pages/AccountSettings/Accountsetting.jsx'));
const AccountNotification = React.lazy(() => import('./Pages/AccountNotifications/AccountNotification.jsx'));
const Helpdesk = React.lazy(() => import('./Pages/AccHelpdesk/Helpdesk.jsx'));
const WebmessagePage = React.lazy(() => import('./Pages/Webmessage/index.jsx'));
const MobileHeader = React.lazy(() => import("./Components/MobileHeader/MobileHeader.jsx"));
import theme from "./theme";

// Loading Spinner component
const LoadingSpinner = () => (
  <Box ml={{base:"-53px",md:"5px",lg:"10px"}}>
    <Center height="100vh">
      <CircularProgress ml="274px" isIndeterminate color="green.300" />
    </Center>
  </Box>
);
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}




const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set loading state when the location changes
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Simulate loading delay for demo
    return () => clearTimeout(timer); // Cleanup timeout if the component unmounts
  }, [location]);

  return (
    <>
      <ToastContainer />
      <ChakraProvider theme={theme}>
      <ErrorBoundary>
        {loading && <LoadingSpinner />}
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomepagePage />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Forgot" element={<Forgot />} />
            <Route path="/Verify" element={<Verify />} />
            <Route path="/WebSignin" element={<Signin2 />} />
            <Route path="/Sidebar" element={<Sidebar />} />
            <Route path="/Explorecourse" element={<Explorecourse />} />
            <Route path="/Mycourse" element={<MyCourses />} />
            <Route path="/CreateCourse" element={<CreateCourses />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/WebMentor" element={<Mentors />} />
            <Route path="/MentorCourses/:id" element={<MentorCourses />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Notification" element={<Notification />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/AccountSetting" element={<Accountsetting />} />
            <Route path="/AccountNotification" element={<AccountNotification />} />
            <Route path="/Helpdesk" element={<Helpdesk />} />
            <Route path="/Message" element={<WebmessagePage />} />
            <Route path="/MobileHeader" element={<MobileHeader/>}/>
          </Routes>
        </Suspense>
        </ErrorBoundary>
      </ChakraProvider>
    </>
  );
};



export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
