'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
   console.log("Current Pathname:", pathname);

  const menu = [
    { title: "About College", path: "/about/aboutCollege" },
    { title: "About Student", path: "/about/aboutStudent" },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col">
      
      {/* Logo / Title */}
      <div className="px-6 py-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">
          About Section
        </h1>
        <p className="text-xs text-gray-500 mt-1">Information Pages</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        {menu.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-indigo-600 text-white shadow"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }
              `}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-5 border-t border-gray-200 text-xs text-gray-500">
        © 2025 MyApp
      </div>
    </aside>
  );
}
