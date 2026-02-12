
import React from 'react';
import { Link } from "react-router-dom";

const HomeHero: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
          <span>현재 새로운 도전을 준비 중입니다</span>
        </div>
        
        <h1 className="text-5xl md:text-5xl font-serif font-black text-slate-900 break-keep">
            <span className="block leading-[1.10]">
                기술과 감성을 <span className="gradient-text">연결하며,</span>
            </span>
            <span className="block mt-3 leading-[1.10]">
                매일 한 걸음씩 <span className="gradient-text">성장합니다.</span>
            </span>
        </h1>
        
        <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
          복잡한 문제를 코드로 풀어내는 것을 즐깁니다. 
          <br/>단순한 구현을 넘어, 사용자의 일상에 녹아드는 견고한 서비스를 만듭니다.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all"
          >
            Projects 보기 →
          </Link>
          <Link
            to="/blog"
            className="px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 hover:-translate-y-1 transition-all"
          >
            Dev-Log 읽기
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
        <div className="relative glass-card rounded-[40px] p-8 card-shadow overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="space-y-4">
            <div className="h-4 bg-slate-100 rounded-full w-3/4"></div>
            <div className="h-4 bg-slate-100 rounded-full w-full"></div>
            <div className="h-4 bg-slate-100 rounded-full w-5/6"></div>
            <div className="h-32 bg-indigo-50 rounded-2xl flex items-center justify-center">
               <div className="text-indigo-400 opacity-50">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
               </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-100 rounded-3xl -rotate-12 flex items-center justify-center">
            <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        
        <div className="absolute top-10 -left-10 w-16 h-16 bg-white rounded-2xl card-shadow flex items-center justify-center animate-bounce">
            <span className="text-2xl">🔥</span>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
