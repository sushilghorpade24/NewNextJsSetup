import Link from "next/link";

export default function StudentListPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">Student List</h1>
            <p className="text-zinc-700 dark:text-zinc-300">
                This is the student list page. Here you can find a list of all students enrolled in the course. You can click on each student's name to view their profile and details.
            </p>
            <ul className="mt-4 space-y-2 text-zinc-700 dark:text-zinc-300">
                <li><Link href="/studentlist/1" className="text-linked-500 hover:underline">Student-1</Link></li>
                <li><Link href="/studentlist/2" className="text-linked-500 hover:underline ml-4">Student-2</Link></li>

                <li> <Link href="/studentlist/3" className="text-linked-500 hover:underline ml-4">Student-3</Link></li>
                <li><Link href="/studentlist/Ram" className="text-linked-500 hover:underline ml-4">Student-4</Link></li>
            </ul>
        </div >
    );
}   