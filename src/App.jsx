import "./styles/index.css";
import "./styles/font.css";
import { ChakraProvider, CircularProgress, Center, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { Suspense, useState, useEffect } from 'react';
import OAuthRedirect from './Components/O-Auth-Redirect/OAuthRedirect.jsx';
import { RedirectToSignIn, OAuthCallback } from '@clerk/clerk-react';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'


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
           
            {/* Public Routes */}
            
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Forgot" element={<Forgot />} />
            <Route path="/Verify" element={<Verify />} />
            <Route path="/WebSignin" element={<Signin2 />} />
            <Route path="/" element={<HomepagePage />} />

            <Route path="/oauth-callback" element={<OAuthCallback } />


              {/* Protected Routes - Only accessible if signed in */}

              <Route path="/Dashboard" element={ <SignedIn><Dashboard /> </SignedIn>}/>
             
              
            <Route path="/Sidebar" element={<SignedIn><Sidebar /></SignedIn>} />
            <Route path="/Explorecourse" element={<SignedIn><Explorecourse /></SignedIn>} />
            <Route path="/Mycourse" element={<SignedIn><MyCourses /></SignedIn>} />
            <Route path="/CreateCourse" element={<SignedIn><CreateCourses /></SignedIn>} />
            <Route path="/course/:id" element={<SignedIn><CourseDetail /></SignedIn>} />
            <Route path="/WebMentor" element={<SignedIn><Mentors /></SignedIn>} />
            <Route path="/MentorCourses/:id" element={<SignedIn><MentorCourses /></SignedIn>} />
            <Route path="/Settings" element={<SignedIn><Settings /></SignedIn>} />
            <Route path="/Notification" element={<SignedIn><Notification /></SignedIn>} />
            <Route path="/Account" element={<SignedIn><Account /></SignedIn>} />
            <Route path="/AccountSetting" element={<SignedIn><Accountsetting /></SignedIn>} />
            <Route path="/AccountNotification" element={<SignedIn><AccountNotification /></SignedIn>} />
            <Route path="/Helpdesk" element={<SignedIn><Helpdesk /></SignedIn>} />
            <Route path="/Message" element={<SignedIn><WebmessagePage /></SignedIn>} />
            <Route path="/MobileHeader" element={<SignedIn><MobileHeader/></SignedIn>}/>
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
