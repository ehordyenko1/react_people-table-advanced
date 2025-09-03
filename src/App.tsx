import Navbar from './MyComponents/MyNavbar';
import HomePage from './Pages/HomePage';
import { PeoplePage } from './Pages/PeoplePage';
import PageNotFound from './Pages/NotFoundPage';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <div data-cy="app">
      <Navbar />
      <main className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/people/:slug" element={<PeoplePage />} />
            <Route path="*" element={<PageNotFound />} />
            <Navigate to="/" replace />
          </Routes>
        </div>
      </main>
    </div>
  );
};
