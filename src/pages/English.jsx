import React, { useState, useEffect } from 'react';

const English = () => {
  const [dailyTask, setDailyTask] = useState('');
  
  // Ngân hàng nhiệm vụ (bạn có thể thêm nhiều hơn)
  const taskBank = [
    "Học 15 từ vựng chủ đề: Environment (Môi trường)",
    "Làm 20 câu trắc nghiệm Thì Hiện Tại Hoàn Thành",
    "Viết một đoạn văn 100 từ về: The benefits of learning English",
    "Luyện nghe đoạn hội thoại Unit 8 sách giáo khoa",
    "Giải đề thi thử vào 10 môn Tiếng Anh năm 2023"
  ];

  useEffect(() => {
    // Tự động chọn bài dựa vào ngày trong năm (đảm bảo mỗi ngày 1 bài cố định)
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const taskIndex = dayOfYear % taskBank.length;
    setDailyTask(taskBank[taskIndex]);
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Lộ trình Tiếng Anh 🇬🇧</h2>
      <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500">
        <h3 className="text-xl font-bold mb-2">Nhiệm vụ hôm nay</h3>
        <p className="text-slate-600 text-lg bg-blue-50 p-4 rounded-xl">{dailyTask}</p>
        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          Đánh dấu đã xong
        </button>
      </div>
    </div>
  );
};

export default English;
