import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { isAdmin, clearAdminKey } from "../../utils/auth";

const navItems = [
  { to: "/projects", label: "Projects" },
  { to: "/stack", label: "Stack" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAdminKey();
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/40 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto h-20 flex items-center justify-between px-6">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <div className="flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <h2 className="text-xl font-black tracking-tight font-serif uppercase">
            Dev.HYEYEON
          </h2>
        </NavLink>

        {/* 데스크톱 nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "text-sm font-semibold transition-colors tracking-wide",
                  isActive ? "text-primary" : "hover:text-primary",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Profile CTA (데스크톱) */}
          <NavLink
            to="/profile"
            className="hidden md:block bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm"
          >
            Profile
          </NavLink>

          {/* 관리자 로그아웃 (데스크톱) */}
          {isAdmin() && (
            <button
              type="button"
              onClick={handleLogout}
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-rose-500 border border-rose-200 hover:bg-rose-50 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">logout</span>
              로그아웃
            </button>
          )}

          {/* 햄버거 버튼 (모바일) */}
          <button
            type="button"
            className="md:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-all"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="메뉴 열기/닫기"
          >
            <span className="material-symbols-outlined text-xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/20 bg-white/95 backdrop-blur-md">
          <nav className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive ? "text-primary bg-primary/10" : "text-slate-600 hover:bg-slate-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold bg-slate-900 text-white text-center hover:bg-slate-800 transition-all"
            >
              Profile
            </NavLink>
            {isAdmin() && (
              <button
                type="button"
                onClick={handleLogout}
                className="mt-1 px-4 py-3 rounded-xl text-sm font-semibold text-rose-500 border border-rose-200 text-center hover:bg-rose-50 transition-all"
              >
                로그아웃
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
