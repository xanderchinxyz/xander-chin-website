import MainWindow from "@/components/MainWindow"
export default function Work() {
    return (
        <MainWindow>
            <h1 className="font-bold text-3xl mb-4">Work</h1>
            <div className="mb-6">
                <h2 className="font-bold text-xl">Distributed Systems Intern @ Groq</h2>
                <p className="italic">Sep 2025 – Jan 2026</p>
                <ul className="list-disc pl-8">
                    <li>
                        Headhunted based on open-source work at <a href="https://tinytpu.com" target="_blank" className="underline">tinytpu.com</a>
                    </li>
                    <li>
                        Optimized and deployed large-scale LLM inference pipelines using the compiler stack, focusing on throughput, latency,
                        and KV-cache efficiency.
                    </li>
                    <li>
                        Engineered a load-balancing algorithm to maximize KV-cache hit rates and reduce hotspots, resulting in measurable API
                        throughput gains under production workloads.
                    </li>
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="font-bold text-xl">R&D Engineer @ Opal Camera</h2>
                <p className="italic">Mar 2025 – Jun 2025</p>
                <ul className="list-disc pl-8">
                    <li>
                        Headhunted based on open-source work on <a href="https://github.com/xanderchinxyz/OpenGhost" target="_blank" className="underline">OpenGhost</a>, an aesthetic Pepper’s Ghost Display.
                    </li>
                    <li>
                        Engineered low-latency computer vision and integrated multiple sensors to enable real-time multimodal interaction with
                        custom AI models on edge devices.
                    </li>
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="font-bold text-xl">Machine Learning Consultant @ Condominium Authority of Ontario</h2>
                <p className="flex gap-2">
                    <span className="italic">Jun 2023 - Aug 2023</span> | <span className="italic">Dec 2023 - Jan 2024</span> | <span className="italic">May 2024 - Aug 2024</span>
                </p>
                <ul className="list-disc pl-8">
                    <li>
                        Enhancing categorization of survey responses and qualitative feedback analysis with natural language processing 
                        and text embeddings using Python.
                    </li>
                    <li>
                        Wrote Python scripts to classify survey responses by modifying the BERT LLM text classifier using TensorFlow.
                    </li>
                    <li>
                        Performed data cleaning and extraction of survey responses using Python and Pandas.
                    </li>
                    <li>
                        Created interactive maps and statistics of all Condominium Corporations in Ontario using Python, Pandas, Matplotlib, and Excel.
                    </li>
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="font-bold text-xl">Undergraduate Researcher @ Diller Microrobotics Lab</h2>
                <p className="italic">May 2024 - Aug 2024</p>
                <ul className="list-disc pl-8">
                    <li>
                        Received an <a href="https://nserc-crsng.canada.ca/en" className="underline" target="_blank">NSERC Award</a> to do research under the supervision of Prof. Eric Diller where I worked on 
                        designing instruments to enable bimanual magnetic control of microrobotic tools for surgery.
                    </li>
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="font-bold text-xl">Undergraduate Researcher @ Free Appropriate Sustainable Technology Lab</h2>
                <p className="italic">Nov 2022 - May 2024</p>
                <ul className="list-disc pl-8">
                    <li>
                        Created a website to interface with an <a href="https://www.appropedia.org/A_Free_and_open-source_microgrid_optimization_tool:_SAMA_the_Solar_Alone_Multi-Objective_Advisor">
                            open-source microgrid optimization tool
                        </a> for solar energy.
                    </li>
                    <li>
                        Designed a wireless protocol and web user interface aptly named <a href="https://github.com/FHafting/BREAD-Local-Software" className="underline">Butter</a> for an open-source data acquisition and automation device 
                        called <a href="https://www.appropedia.org/Open_Source_Framework_for_a_Broadly_Expandable_and_Reconfigurable_Data_Acquisition_and_Automation_Device_(BREAD)" target="_blank" className="underline">BREAD</a>, 
                        leading to a peer-reviewed <a href="https://www.mdpi.com/2227-7080/13/4/125" target="_blank" className="underline">paper publication in the Techologies Journal</a>.
                    </li>
                    <li>
                        Received a <a href="https://www.uwo.ca/research/funding/students-trainees/usri.html" className="underline" target="_blank">USRI Award</a> for the Summer of 2023. Designed an <a href="https://osf.io/erbyp/" className="underline">open-source packing algorithm</a> to tile 
                        as many building-integrated photovoltaics (BIPV) as possible on any arbitrarily shaped object or building. 
                        This involved the use of complex packing algorithms, computational geometry, Python, and Blender. Culminated in a first author peer-reviewed <a href="https://www.mdpi.com/3035648">paper publication in the Designs Journal</a>.
                    </li>
                    <li>
                        Researched and developed a cheaper Recyclebot extruder that converts plastic pellets into 3D printer filament under the supervision of Dr. Joshua Pearce.
                    </li>
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="font-bold text-xl">Research Assistant @ University Health Network</h2>
                <p className="italic">Jun 2021 - Sep 2022</p>
                <ul className="list-disc pl-8">
                    <li>
                        Designed and built a <a href="https://youtu.be/I03g0Dz7DDU" target="_blank" className="underline">wireless voice-controlled 3D-printed syringe pump</a> for developing 
                        countries in collaboration with an anesthesiologist.
                    </li>
                    <li>
                        Made the hardware, coded the microprocessor controller, and developed the mobile app with React Native
                    </li>
                </ul>
            </div>
        </MainWindow>
    )
}