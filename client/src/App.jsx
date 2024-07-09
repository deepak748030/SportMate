import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spinner from './components/Spinner';
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from './routes/PrivateRoute';
import Stats from '../stats/Stats';

const Home = lazy(() => import('./pages/Home'));
const Sports = lazy(() => import('./pages/Sports'));
const Signup = lazy(() => import('./pages/Auth/SignUp'));
const Login = lazy(() => import('./pages/Auth/Login'));
const ForgotPassword = lazy(() => import('./pages/Auth/ForgotPassword'));
const Users = lazy(() => import('./pages/Users'));
const CreateTeam = lazy(() => import('./pages/CreateTeam'));
const Profile = lazy(() => import('./pages/Profile'));
const Singlechat = lazy(() => import('./pages/chatpage/Singlechat'));
const AdminDashboard = lazy(() => import('./pages/dashboard/Admindashboard'));
const UserDash = lazy(() => import('./pages/dashboard/UserDash'));
const Subscription = lazy(() => import('./pages/subscription/Subscription'));
const FeedbackForm = lazy(() => import('./pages/feedback/FeedbackForm'));
const OrganizerDash = lazy(() => import('./pages/dashboard/OrganizerDash'));
const RecordStats = lazy(() => import('./pages/records/RecordStats'));
const PerformanceReport = lazy(() => import('./pages/records/PerformanceReport'));
const EventDetail = lazy(() => import('./pages/eventsperfomance/EventDetail'));
const EventSingle = lazy(() => import('./pages/eventsperfomance/EventSingle'));
const AllEvents = lazy(() => import('./pages/AllEvents'));
const ErrorPage = lazy(() => import('./pages/Error'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/stats/:playerId/:eventId" element={<Stats />} />
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/events" element={<AllEvents />} />

          <Route path="/events/detail" element={<EventDetail />} />
          <Route path="/event/:eventId" element={<EventSingle />} />

          <Route path="/users" element={<Users />} />
          <Route path="/create-team" element={<CreateTeam />} />
          <Route path="/chat" element={<Singlechat />} />
          {/* <Route path="/chat/:id" element={<Singlechat />} /> */}

          {/* Private Routes */}
          <Route path="/profile" element={<PrivateRoute />}>
            <Route index element={<Profile />} />
          </Route>
          <Route path="/user-dashboard" element={<PrivateRoute />}>
            <Route index element={<UserDash />} />
          </Route>
          <Route path="/subscription" element={<PrivateRoute />}>
            <Route index element={<Subscription />} />
          </Route>
          <Route path="/feedback" element={<PrivateRoute />}>
            <Route index element={<FeedbackForm />} />
          </Route>
          <Route path="/organizer-dashboard" element={<PrivateRoute />}>
            <Route index element={<OrganizerDash />} />
          </Route>
          <Route path="/record-stats" element={<PrivateRoute />}>
            <Route index element={<RecordStats />} />
          </Route>
          <Route path="/performance-report" element={<PrivateRoute />}>
            <Route index element={<PerformanceReport />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin-dashboard" element={<AdminRoute />}>
            <Route index element={<AdminDashboard />} />
          </Route>

          {/* Catch-all Route */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
