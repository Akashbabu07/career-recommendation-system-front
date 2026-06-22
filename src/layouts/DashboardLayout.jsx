import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

            <div className="flex">
                {/* Overlay for mobile */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-20 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Sidebar */}
                <aside className={`
                    fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 z-30
                    bg-white border-r border-slate-200 shadow-sm
                    transform transition-transform duration-200
                    lg:translate-x-0 lg:static lg:h-auto lg:z-auto
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                `}>
                    <Sidebar onClose={() => setSidebarOpen(false)} />
                </aside>

                {/* Main content */}
                <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
                    <div className="max-w-5xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;
