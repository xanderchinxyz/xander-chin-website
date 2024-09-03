import Navbar from "@/components/Navbar"
export default function MainWindow({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) 
  {
    return (
        <main className="min-h-screen md:py-6 md:px-0 px-2 md:pl-0 md:flex flex-col md:flex-row h-screen">
            <Navbar></Navbar>
            <div className="md:overflow-y-auto w-full md:pr-10">
                {children}
            </div>
        </main>
    )
}