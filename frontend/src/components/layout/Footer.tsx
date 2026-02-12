import { NavLink } from "react-router-dom";

type NavItem = { to: string; label: string; end?: boolean };

const navItems: NavItem[] = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/stack", label: "Stack" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
  { to: "/profile", label: "Profile" },
];

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-slate-200/60 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                D
              </div>
              <span className="font-black text-[20px] tracking-tight text-slate-900 uppercase">
                DEV.PORTFOLIO
              </span>
            </div>

            <p className="text-slate-500 max-w-sm leading-relaxed">
              매일의 기록과 코드로 나만의 브랜드를 쌓아갑니다. 
              <br/>기술로 문제를 해결하고, 더 나은 제품 경험을 만드는 개발자가 되고 싶습니다.
            </p>

            <div className="flex space-x-4">
              <a
                href="mailto:khy33355@gmail.com"
                className="w-10 h-10 border border-slate-200/70 rounded-xl flex items-center justify-center text-slate-400 hover:bg-white/60 transition-colors"
                aria-label="Email"
                title="Email"
              >
                @
              </a>
              <a
                href="https://github.com/Hyeyeon-Ko"
                className="w-10 h-10 border border-slate-200/70 rounded-xl flex items-center justify-center text-slate-400 hover:bg-white/60 transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                🌐
              </a>
              <a
                href="https://linkedin.com"
                className="w-10 h-10 border border-slate-200/70 rounded-xl flex items-center justify-center text-slate-400 hover:bg-white/60 transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                📄
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-slate-900 mb-6 text-sm font-bold">
              Navigation
            </h4>
            <ul className="space-y-4 text-[15px] font-medium text-slate-600">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end ?? false}
                    className={({ isActive }) =>
                      [
                        "transition-colors",
                        isActive ? "text-slate-900" : "hover:text-slate-900",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-slate-900 mb-6 text-sm font-bold">
              Socials
            </h4>
            <ul className="space-y-4 text-[15px] font-medium text-slate-600">
              <li>
                <a
                  href="https://github.com/Hyeyeon-Ko"
                  className="hover:text-slate-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="hover:text-slate-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900">
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
