import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { WorksPage } from './pages/WorksPage';
import { SkillsPage } from './pages/SkillsPage';
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </AnimatePresence>);

}
export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white selection:bg-cyan-200 selection:text-cyan-900">
        <Navigation />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>);

}