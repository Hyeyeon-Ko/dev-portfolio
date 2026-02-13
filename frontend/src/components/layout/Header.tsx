import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/projects", label: "Projects" },
  { to: "/stack", label: "Stack" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/40 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
          <h2 className="text-xl font-black tracking-tight font-serif uppercase">
            Dev.HYEYEON
          </h2>
        </NavLink>

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
