import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/projects", label: "Projects" },
  { to: "/stack", label: "Stack" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            D
          </div>
          <span className="font-black text-[20px] tracking-tight text-slate-900 uppercase">
            DEV.PORTFOLIO
          </span>
        </NavLink>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-2 text-[15px] font-semibold text-slate-700">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "px-3 py-1.5 rounded-full transition-colors",
                  isActive
                    ? "text-slate-900 bg-slate-900/5"
                    : "hover:text-slate-900 hover:bg-slate-900/5",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <NavLink
          to="/profile"
          className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm"
        >
          Profile
        </NavLink>
      </div>
    </header>
  );
}
