import MainWindow from "@/components/MainWindow"
import LazyVideo from "@/components/LazyVideo"
export default function Blog() {
    return (
        <MainWindow>
            <div className="mb-6">
                <div className="mb-2">
                    <a href="https://tinytpu.com" target="_blank" className="underline">
                        <h2 className="font-bold text-xl">tinytpu.com</h2>
                    </a>
                    <p className="italic">August 17th, 2025</p>
                    <p>
                        Nobody really understands how TPUs work…and neither do we! So we wanted to make this because we wanted to take a shot and try to guess how it works from the perspective of complete novices!
                        Created alongside Evan Lin, Surya Sure, and Kenny Guo.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <LazyVideo className="w-[500px]" src="tinytpu/dataflow.mp4" />
                    <p>Dataflow visualization of our TPU</p>
                </div>
            </div>
        </MainWindow>
    )
}