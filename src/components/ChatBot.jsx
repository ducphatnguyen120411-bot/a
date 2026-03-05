import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// KHAI BÁO KEY API TẠI ĐÂY (Lưu ý bảo mật khi đẩy lên GitHub)
const API_KEY = "AIzaSyDHF4W_oVfZ3IzSd6qE_guPq4X9zgr31IA"; 
const genAI = new GoogleGenerativeAI(API_KEY);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Chào bạn! Mình là AI hỗ trợ ôn thi vào 10. Bạn cần hỏi bài Toán hay Văn nào?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || !API_KEY.includes("AIza")) {
        setMessages(prev => [...prev, { text: input, isBot: false }, { text: "Vui lòng nhập API Key hợp lệ vào code nhé!", isBot: true }]);
        setInput('');
        return;
    }

    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput('');
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Bạn là một gia sư cực kỳ giỏi cho học sinh lớp 9 ôn thi lên lớp 10 tại Việt Nam. Trả lời ngắn gọn, thân thiện, dễ hiểu. Câu hỏi: ${userMsg}`;
      const result = await model.generateContent(prompt);
      
      setMessages(prev => [...prev, { text: result.response.text(), isBot: true }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Xin lỗi, có lỗi kết nối với AI rồi.", isBot: true }]);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Khung Chat */}
      {isOpen && (
        <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl flex flex-col mb-4 border border-slate-200 overflow-hidden">
          <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">Gia sư AI 🤖</h3>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`p-3 rounded-xl max-w-[85%] text-sm ${msg.isBot ? 'bg-white border border-slate-200 text-slate-700 self-start' : 'bg-indigo-500 text-white ml-auto'}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && <div className="text-slate-500 text-xs italic">AI đang suy nghĩ...</div>}
          </div>

          <div className="p-3 bg-white border-t flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              type="text" 
              placeholder="Nhập câu hỏi..." 
              className="flex-1 bg-slate-100 rounded-lg px-3 py-2 text-sm outline-none"
            />
            <button onClick={handleSend} className="bg-indigo-600 text-white p-2 rounded-lg"><Send size={16} /></button>
          </div>
        </div>
      )}

      {/* Nút bật/tắt Chat */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-indigo-600 text-white p-4 rounded-full shadow-xl hover:bg-indigo-700 transition float-right"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default ChatBot;
