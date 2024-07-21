import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spinner from './components/Spinner';
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from './routes/PrivateRoute';
import JoinTeam from './pages/JoinTeam';
import Chats from './pages/chatpage/Chats';
import IndividualChat from './pages/chatpage/IndividualChat';

const Stats = lazy(() => import('./pages/stats/Stats'));
const EventTeamStats = lazy(() => import('./pages/eventsperfomance/EventTeamStats'));
const UserTeams = lazy(() => import('./pages/eventsperfomance/UserTeams'));
const ResetPassword = lazy(() => import('./pages/Auth/ResetPassword'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Leagues = lazy(() => import('./pages/leages/Leagues'));
const Home = lazy(() => import('./pages/Home'));
const Sports = lazy(() => import('./pages/Sports'));
const Signup = lazy(() => import('./pages/Auth/SignUp'));
const Login = lazy(() => import('./pages/Auth/Login'));
const ForgotPassword = lazy(() => import('./pages/Auth/ForgotPassword'));
const MyTeams = lazy(() => import('./pages/MyTeams'));
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
const AdminStats = lazy(() => import('./pages/stats/AdminStats'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const AboutUs = lazy(() => import('./pages/AboutUs'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/chat/:id" element={<IndividualChat />} />


          {/* Protected Routes */}
          <Route path="/join-team/:teamId" element={<PrivateRoute />}>
            <Route index element={<JoinTeam />} />
          </Route>

          <Route path="/stats/:playerId/:eventId" element={<PrivateRoute />}>
            <Route index element={<Stats />} />
          </Route>
          <Route path="/events" element={<PrivateRoute />}>
            <Route index element={<AllEvents />} />
          </Route>
          <Route path="/events/detail" element={<PrivateRoute />}>
            <Route index element={<EventDetail />} />
          </Route>
          <Route path="/event/:eventId" element={<PrivateRoute />}>
            <Route index element={<EventSingle />} />
          </Route>
          <Route path="/team-stats/:eventId" element={<PrivateRoute />}>
            <Route index element={<EventTeamStats />} />
          </Route>
          <Route path="/user/team-stats/:eventId" element={<PrivateRoute />}>
            <Route index element={<UserTeams />} />
          </Route>
          <Route path="/myteams" element={<PrivateRoute />}>
            <Route index element={<MyTeams />} />
          </Route>
          <Route path="/create-team" element={<PrivateRoute />}>
            <Route index element={<CreateTeam />} />
          </Route>
          <Route path="/chat" element={<PrivateRoute />}>
            <Route index element={<Singlechat />} />
          </Route>
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
          <Route path="/admin-stats" element={<AdminRoute />}>
            <Route index element={<AdminStats />} />
          </Route>
          <Route path="/leagues" element={<AdminRoute />}>
            <Route index element={<Leagues />} />
          </Route>

          {/* Catch-all Route */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
