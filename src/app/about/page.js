'use client'
import { useRouter } from 'next/navigation';


export default function About() {

    const router = useRouter();
    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold">About Section</h1>
                <p>Select a page from the sidebar.</p>
            </div>
            <button onClick={() => router.push("/")}>Back Home</button>
        </div>
    );
};

