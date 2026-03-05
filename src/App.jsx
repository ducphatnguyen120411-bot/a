import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { BookOpen, Calculator, PenTool, LayoutDashboard, MessageCircle } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import English from './pages/English';
import MathSubject from './pages/MathSubject';
import ChatBot from './components/ChatBot';

const App = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', name: 'Tổng quan', icon: <LayoutDashboard size={20} /> },
    { path: '/english', name: 'Tiếng Anh', icon: <BookOpen size={20} /> },
    { path: '/math', name: 'Toán Học', icon: <Calculator size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-slate-200 p-4 flex flex-col">
        <h1 className="text-2xl font-bold text-indigo-600 mb-8 flex items-center gap-2">
          Target 10th
        </h1>
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                location.pathname === item.path 
                  ? 'bg-indigo-50 text-indigo-600 font-bold' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-8 relative">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/english" element={<English />} />
          <Route path="/math" element={<MathSubject />} />
        </Routes>
        
        {/* Nút gọi AI ChatBot nổi ở góc */}
        <ChatBot />
      </div>
    </div>
  );
}

export default App;
