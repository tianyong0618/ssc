import { NavLink, Outlet } from "react-router";
import { CreditCard, Building2, UserCircle, Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "社会劳动者", icon: UserCircle },
    { to: "/employer", label: "用人单位", icon: Building2 },
    { to: "/archive", label: "个人电子档案", icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center text-white">
                <CreditCard size={20} />
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                就业社保一卡通
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-t-md"
                    }`
                  }
                >
                  <link.icon size={18} />
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-500 hover:text-slate-700 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`
                  }
                >
                  <link.icon size={20} />
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
          <p>依托社保卡全业务应用服务体系，构建一体化、集约化的就业社保综合服务体系。</p>
          <p className="mt-2">© 2026 大连市人力资源和社会保障局 版权所有</p>
        </div>
      </footer>
    </div>
  );
}
