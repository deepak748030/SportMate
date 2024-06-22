import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Sports = lazy(() => import('./pages/Sports'));
const Signup = lazy(() => import('./pages/Auth/SignUp'));
const Login = lazy(() => import('./pages/Auth/Login'));
import Spinner from './components/Spinner';
import Users from './pages/Users';
import CreateTeam from './pages/CreateTeam';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Chat from './pages/chatpage/Chat';
import Profile from './pages/Profile'
import Error from './pages/Error';
import Singlechat from './pages/chatpage/Singlechat';
import AdminDashboard from './pages/dashboard/Admindashboard';
import UserDash from './pages/Auth/UserDash';
import Subscription from './pages/subscription/Subscription';
import FeedbackForm from './pages/feedback/FeedbackForm';
import OrganizerDash from './pages/dashboard/OrganizerDash';

function App() {
  return (
    <Router>
      <Suspense fallback={
        <Spinner />
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<Users />} />
          <Route path="/user/createteam" element={<CreateTeam />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:id" element={<Singlechat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dash" element={<AdminDashboard />} />
          <Route path="/main" element={<UserDash />} />
          <Route path="/sub" element={<Subscription />} />
          <Route path="/feed" element={<FeedbackForm />} />
          <Route path="/org" element={<OrganizerDash />} />
          <Route path="/*" element={<Error />} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
