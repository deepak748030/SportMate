import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Sports = lazy(() => import('./pages/Sports'));
const Signup = lazy(() => import('./pages/SignUp'));
const Login = lazy(() => import('./pages/Login'));
import Spinner from './components/Spinner';
import Users from './pages/Users';
import CreateTeam from './pages/CreateTeam';
import ForgotPassword from './pages/ForgotPassword';
import Chat from './pages/Chat';
import Profile from './pages/Profile'
import Error from './pages/Error';

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Error />} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
