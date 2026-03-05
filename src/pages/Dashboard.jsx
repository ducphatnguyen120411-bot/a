import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  // Giả lập dữ liệu fetch từ localStorage hoặc file JSON
  const [todayTasks, setTodayTasks] = useState([
    { id: 1, subject: 'Tiếng Anh', title: 'Hoàn thành 20 từ vựng chủ đề Environment', type: 'vocab', status: 'pending', color: 'bg-blue-100 text-blue-700' },
    { id: 2, subject: 'Toán', title: 'Giải 3 bài hệ phương trình bậc nhất hai ẩn', type: 'practice', status: 'pending', color: 'bg-red-100 text-red-700' },
    { id: 3, subject: 'Ngữ Văn', title: 'Đọc và tóm tắt ý chính tác phẩm "Đồng chí"', type: 'reading', status: 'completed', color: 'bg-green-100 text-green-700' },
  ]);

  const [progress, setProgress] = useState(33); // Tiến độ hoàn thành (%)

  const toggleTask = (id) => {
    const updatedTasks = todayTasks.map(task => 
      task.id === id ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' } : task
    );
    setTodayTasks(updatedTasks);
    
    // Tính lại phần trăm
    const completed = updatedTasks.filter(t => t.status === 'completed').length;
    setProgress(Math.round((completed / updatedTasks.length) * 100));
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Tổng quan học tập</h1>
          <p className="text-slate-500 mt-1">Hôm nay là một ngày tuyệt vời để bứt phá! 🚀</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
          <p className="text-sm text-slate-500 font-semibold">Đếm ngược kỳ thi</p>
          <p className="text-2xl font-bold text-indigo-600">95 Ngày</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cột trái: Lịch trình & Nhiệm vụ */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-slate-800">Smart Scheduler: Nhiệm vụ hôm nay</h2>
              <span className="text-sm font-medium text-indigo-600">{progress}% Hoàn thành</span>
            </div>
            
            {/* Thanh tiến độ */}
            <div className="w-full bg-slate-100 rounded-full h-2.5 mb-6">
              <div className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>

            {/* Danh sách công việc */}
            <div className="space-y-4">
              {todayTasks.map(task => (
                <div key={task.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:shadow-md transition cursor-pointer" onClick={() => toggleTask(task.id)}>
                  <div className="flex items-center gap-4">
                    <input 
                      type="checkbox" 
                      checked={task.status === 'completed'}
                      onChange={() => toggleTask(task.id)}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <div>
                      <span className={`text-xs font-bold px-2 py-1 rounded-md ${task.color}`}>{task.subject}</span>
                      <p className={`mt-2 font-medium ${task.status === 'completed' ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                        {task.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cột phải: AI Assistant Snippet */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-indigo-900 to-slate-800 rounded-2xl p-6 text-white shadow-lg h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-xl">AI</div>
              <h2 className="text-xl font-bold">Trợ lý ôn thi</h2>
            </div>
            
            <div className="flex-1 bg-white/10 rounded-xl p-4 mb-4 overflow-y-auto">
              <p className="text-sm text-indigo-100 bg-white/5 p-3 rounded-lg rounded-tl-none inline-block">
                Chào bạn! Dựa trên tiến độ, hôm nay bạn có môn Toán. Bạn có cần mình nhắc lại định lý Vi-ét hay công thức nghiệm $$ \Delta = b^2 - 4ac $$ không?
              </p>
            </div>

            <div className="flex gap-2">
              <input type="text" placeholder="Hỏi AI..." className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-white placeholder-indigo-200 outline-none focus:border-indigo-400" />
              <button className="bg-indigo-500 hover:bg-indigo-400 px-4 py-2 rounded-lg font-medium transition">Gửi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
