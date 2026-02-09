
import React from 'react';
import { PROJECTS } from '../../constants';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 mb-32">
      <div className="flex items-end justify-between mb-12">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">Projects</h2>
          <p className="text-slate-500">어제보다 더 나은 가치를 전달하기 위해 고민한 흔적들입니다.</p>
        </div>
        <a href="#" className="text-indigo-600 font-bold flex items-center hover:translate-x-1 transition-transform">
          전체 프로젝트 
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group bg-white rounded-[40px] border border-slate-100 card-shadow overflow-hidden hover:-translate-y-2 transition-all duration-300">
            <div className="h-72 overflow-hidden relative">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold tracking-wider rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-50 flex items-center space-x-6 text-sm font-bold">
                <a href="#" className="text-indigo-600 flex items-center hover:underline">
                  Case Study
                  <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </a>
                <a href="#" className="text-purple-600 flex items-center hover:underline">
                  View App
                  <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
