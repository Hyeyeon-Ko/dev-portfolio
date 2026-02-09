import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                D
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800 uppercase">
                DEV.PORTFOLIO
              </span>
            </div>

            <p className="text-slate-500 max-w-sm leading-relaxed">
              매일의 기록과 코드로 나만의 브랜드를 쌓아갑니다. 기술로 문제를 해결하고,
              더 나은 제품 경험을 만드는 개발자가 되고 싶습니다.
            </p>

            <div className="flex space-x-4">
              <a
                href="mailto:your.email@example.com"
                className="w-10 h-10 border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors"
                aria-label="Email"
                title="Email"
              >
                @
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors"
                aria-label="Website"
                title="Website"
              >
                🌐
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors"
                aria-label="Resume"
                title="Resume"
              >
                📄
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-slate-800 mb-6 uppercase tracking-wider text-xs">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li>
                <Link to="/" className="hover:text-indigo-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-indigo-600">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/stack" className="hover:text-indigo-600">
                  Stack
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-indigo-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-indigo-600">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold text-slate-800 mb-6 uppercase tracking-wider text-xs">
              Socials
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li>
                <a href="#" className="hover:text-indigo-600">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest gap-4">
          <p>© {new Date().getFullYear()} DEV.PORTFOLIO. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-slate-600">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
