import MainWindow from "@/components/MainWindow"

export default function Projects() {
    return (
        <MainWindow>
            <div>
                <p className="mb-6">Getting back into reading...</p>
                <h1 className="font-bold text-3xl mb-4">Reading:</h1>
                <ul className="list-disc pl-8 mb-8">
                    <li>The Almanack of Naval Ravikant - Eric Jorgenson</li>
                    <li>The War of Art - Steven Pressfield</li>
                    <li>Crypto Confidential - Nathaniel Eliason</li>
                </ul>
            </div>
        </MainWindow>
    )
}