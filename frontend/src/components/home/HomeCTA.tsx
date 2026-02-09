
import React from 'react';

const HomeCTA: React.FC = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 mb-20">
      <div className="relative bg-slate-900 rounded-[60px] p-12 md:p-24 text-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            함께 성장할 동료를<br />찾고 계신가요?
          </h2>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            새로운 프로젝트, 기술적인 논의, 혹은 가벼운 커피챗 모두 환영합니다.<br className="hidden md:block" />
            언제든 편하게 연락해 주세요.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold flex items-center justify-center hover:bg-slate-50 transition-all group">
              <span>메일 보내기</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white rounded-2xl font-bold flex items-center justify-center hover:bg-slate-700 transition-all">
              LinkedIn 메시지
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
