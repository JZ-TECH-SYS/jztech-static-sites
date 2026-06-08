import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HomePage from './components/HomePage';
import LinksPage from './components/LinksPage';
import PalestrasPage from './components/PalestrasPage';
import FeedbacksPage from './components/FeedbacksPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navigation Toggle */}
        <motion.div 
          className="fixed bottom-6 right-6 z-50 flex space-x-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link to="/">
            <Button 
              size="sm" 
              className="bg-pink-600 hover:bg-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-3"
            >
              <Home className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/links">
            <Button 
              size="sm" 
              className="bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-3"
            >
              <LinkIcon className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/palestras" element={<PalestrasPage />} />
          <Route path="/feedbacks" element={<FeedbacksPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

