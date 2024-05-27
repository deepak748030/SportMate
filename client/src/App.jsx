import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Sports = lazy(() => import('./pages/Sports'));
const Signup = lazy(() => import('./pages/SignUp'));
const Login = lazy(() => import('./pages/Login'));
import Spinner from './components/Spinner';
import Users from './pages/Users';
import CreateTeam from './pages/CreateTeam';

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
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
