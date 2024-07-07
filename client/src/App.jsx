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
import Profile from './pages/Profile'
import Error from './pages/Error';
import Singlechat from './pages/chatpage/Singlechat';
import AdminDashboard from './pages/dashboard/Admindashboard';
import UserDash from './pages/dashboard/UserDash';
import Subscription from './pages/subscription/Subscription';
import FeedbackForm from './pages/feedback/FeedbackForm';
import OrganizerDash from './pages/dashboard/OrganizerDash';
import AdminRoute from './routes/AdminRoute.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx';
import RecordStats from './pages/records/RecordStats.jsx';
import PerformanceReport from './pages/records/PerformanceReport.jsx';
import EventDetail from './pages/events/EventDetail.jsx';
import EventSingle from './pages/events/EventSingle.jsx';
import AllEvents from './pages/AllEvents.jsx';

function App() {
  return (
    <Router>
      <Suspense fallback={
        <Spinner />
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/stats" element={<RecordStats />} />
          <Route path="/report" element={<PerformanceReport />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<Users />} />
          <Route path="/user/createteam" element={<CreateTeam />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/chat" element={<Singlechat />} />
          {/* <Route path="/chat/:id" element={<Singlechat />} /> */}
          <Route path="/volleyball" element={<AllEvents />} />
          <Route path="/dash" element={<AdminRoute />}>
            <Route index element={<AdminDashboard />} />
          </Route>
          <Route path="/admin" element={<AdminDashboard />} />

          <Route path="/events" element={<EventDetail />} />
          <Route path="/event/:eventId" element={<EventSingle />} />
          <Route path="/events/:eventId/:playerId" element={<Users />} />

          <Route path="/profile" element={<PrivateRoute />}>
            <Route index element={<Profile />} />
          </Route>





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
