import "./styles/index.css";
import "./styles/font.css";
import { ChakraProvider, CircularProgress, Center, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { Suspense, useState, useEffect } from 'react';
const CourseDetail = React.lazy(()=> import('./Pages/Courses/CourseDetail/CourseDetail.jsx'));
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
import theme from "./theme";
import Mentors from "./Pages/WebMentor/Mentors/Mentors.jsx";
import MentorCourses from "./Pages/WebMentor/MentorCourses/MentorCourses.jsx";
import Settings from "./Pages/Settings/SidebarSettings/Settings.jsx";
import Notification from "./Pages/Notification/Notification.jsx";
import Account from "./Pages/Account/Account.jsx";
import Accountsetting from "./Pages/AccountSettings/Accountsetting.jsx";
import { AccountNotification } from "./Pages/AccountNotifications/AccountNotification.jsx";
import Helpdesk from "./Pages/AccHelpdesk/Helpdesk.jsx";
import WebmessagePage from "./Pages/Webmessage/index.jsx";

const LoadingSpinner = () => (
  <>
  <Box ml="93px">
  <Center height="100vh">
    <CircularProgress ml="274px" isIndeterminate color='green.300' />
  </Center>
  </Box>

  </>
);

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
    <ChakraProvider theme={theme}>
      {loading && <LoadingSpinner />}
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
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
          <Route path="/" element={<HomepagePage />} />
          <Route path="/CourseDetail" element={<CourseDetail />} />
          <Route path="/WebMentor" element={<Mentors />} />
          <Route path="/MentorCourses" element={<MentorCourses />} />
          <Route path="/Settings" element={<Settings/>}/>
          <Route path="/Notification" element={<Notification/>}/>
          <Route path="/Account" element={<Account/>}/>
          <Route path="/AccountSetting" element={<Accountsetting/>}/>
          <Route path="/AccountNotification" element={<AccountNotification/>}/>
          <Route path="/Helpdesk" element={<Helpdesk/>}/>
          <Route path="/Message" element={<WebmessagePage/>}/>

        </Routes>
      </Suspense>
    </ChakraProvider>
  );
};

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
