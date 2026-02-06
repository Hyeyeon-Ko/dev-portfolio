import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/projects", label: "Projects" },
  { to: "/stack", label: "Stack" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <NavLink to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            D
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800 uppercase">
            DEV.PORTFOLIO
          </span>
        </NavLink>

        {/* Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "transition-colors",
                  isActive ? "text-indigo-600" : "hover:text-indigo-600",
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
