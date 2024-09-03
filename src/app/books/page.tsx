import Navbar from "@/components/Navbar"

export default function Projects() {
    return (
        <main className="min-h-screen md:py-10 md:px-0 px-4 md:flex flex-col md:flex-row h-screen">
            <Navbar></Navbar>
            <div>
                <p className="mb-6">Getting back into reading...</p>
                <h1 className="font-bold text-3xl mb-4">Reading:</h1>
                <ul className="list-disc pl-8 mb-8">
                    <li>The Almanack of Naval Ravikant</li>
                </ul>
            </div>
        </main>
    )
}