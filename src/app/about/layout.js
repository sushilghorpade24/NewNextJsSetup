import Sidebar from "../component/page";

export default function AboutLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <div className="flex-1 p-6 bg-white">
                {children}
            </div>
        </div>
    );
}   