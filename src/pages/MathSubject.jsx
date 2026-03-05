import React from 'react';

const MathSubject = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Phòng Lab Toán Học 📐</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold text-red-600 mb-4">Chuyên đề: Phương trình bậc 2</h3>
          <p className="text-slate-600 mb-2">Đừng quên định lý Vi-ét cho phương trình $ax^2+bx+c=0$:</p>
          <div className="bg-slate-50 p-4 rounded-xl font-mono text-center">
            $$x_1+x_2=-\frac{b}{a}$$
            $$x_1 \cdot x_2=\frac{c}{a}$$
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-bold text-red-600 mb-4">Bài tập cần giải hôm nay</h3>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5 rounded text-red-500" />
              <span>Giải phương trình: $x^2-5x+6=0$</span>
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5 rounded text-red-500" />
              <span>Tìm m để phương trình có nghiệm kép.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MathSubject;
