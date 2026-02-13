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
    <footer className="border-t border-white/20 py-16 bg-white/30 backdrop-blur-lg mt-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-md">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
              </div>
              <h2 className="text-lg font-black font-serif uppercase tracking-wider">Dev.Hyeyeon</h2>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed font-medium">
              매일의 기록과 코드로 나만의 브랜드를 쌓아갑니다. 
              <br/>기술로 문제를 해결하고, 더 나은 제품 경험을 만드는 개발자가 되고 싶습니다.
            </p>
            <div className="flex gap-4">
              <a
                className="size-12 rounded-2xl glass-card flex items-center justify-center hover:text-primary hover:border-primary transition-all"
                href="mailto:khy33355@gmail.com"
                aria-label="Email"
                title="Email"
              >
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
              <a
                className="size-12 rounded-2xl glass-card flex items-center justify-center hover:text-primary hover:border-primary transition-all"
                href="https://github.com/Hyeyeon-Ko"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <span className="material-symbols-outlined">hub</span>
              </a>
              <a
                className="size-12 rounded-2xl glass-card flex items-center justify-center hover:text-primary hover:border-primary transition-all"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <span className="material-symbols-outlined">description</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-8 text-slate-800">Navigation</h3>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end ?? false}
                    className={({ isActive }) =>
                      [
                        "transition-colors text-sm font-semibold",
                        isActive ? "text-primary" : "text-slate-500 hover:text-primary",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-8 text-slate-800">Socials</h3>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-slate-500 hover:text-primary transition-colors text-sm font-semibold"
                  href="https://github.com/Hyeyeon-Ko"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-primary transition-colors text-sm font-semibold"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="text-slate-500 hover:text-primary transition-colors text-sm font-semibold" href="#">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-400 font-medium">
            © {new Date().getFullYear()} Dev.Aesthetic. All rights reserved. Designed with passion.
          </p>
          <div className="flex gap-10">
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">
              Privacy
            </a>
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
