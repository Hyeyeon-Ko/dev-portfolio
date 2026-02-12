
import React from 'react';
import { PROJECTS } from '../../constants';
import { Link } from "react-router-dom";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 mb-32">
      <div className="flex items-end justify-between mb-12">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">Projects</h2>
          <p className="text-slate-500">어제보다 더 나은 가치를 전달하기 위해 고민한 흔적들입니다.</p>
        </div>
        <Link to="/projects" className="text-indigo-600 font-bold flex items-center hover:translate-x-1 transition-transform">
          전체 프로젝트 
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
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
              <div className="pt-4 border-t border-slate-50 flex items-center">
                <Link to="/projects" className="text-indigo-600 flex items-center hover:underline text-sm font-bold">
                  프로젝트 보러가기
                  <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
