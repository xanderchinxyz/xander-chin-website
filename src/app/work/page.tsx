import MainWindow from "@/components/MainWindow"
export default function Work() {
    return (
        <MainWindow>
            <h1 className="font-bold text-3xl mb-4">Work</h1>
            <div className="mb-6">
                <h2 className="font-bold text-xl">Undergraduate Researcher @ Free Appropriate Sustainable Technology Lab</h2>
                <p className="italic">Nov 2022 - Present</p>
                <ul className="list-disc pl-8">
                    <li>
                        Currently designing a website to interface with an <a href="https://www.appropedia.org/A_Free_and_open-source_microgrid_optimization_tool:_SAMA_the_Solar_Alone_Multi-Objective_Advisor">
                            open-source microgrid optimization tool
                        </a> for solar energy.
                    </li>
                    <li>
                        Designed a wireless protocol and web user interface aptly named <a href="https://github.com/FHafting/BREAD-Local-Software" className="underline">Butter</a> for an open-source data acquisition and automation device called BREAD.
                    </li>
                    <li>
                        Received a USRI Award for the Summer of 2023. Designed an <a href="https://osf.io/erbyp/" className="underline">open-source packing algorithm</a> to tile 
                        as many building-integrated photovoltaics (BIPV) as possible on any arbitrarily shaped object or building. 
                        This involved the use of complex packing algorithms, computational geometry, Python, and Blender. Culminated in a first author peer reviewed <a href="https://www.mdpi.com/3035648">paper publication in the Designs Journal</a>.
                    </li>
                    <li>
                        Researched and developed a cheaper Recyclebot extruder that converts plastic pellets into 3D printer filament under the supervision of Dr. Joshua Pearce.
                    </li>
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="font-bold text-xl">Machine Learning Consultant @ Condominum Authority of Ontario</h2>
                <p className="italic">May 2024 - Aug 2024</p>
                <ul className="list-disc pl-8">
                    <li>
                        Enhancing categorization of survey responses and qualitative feedback analysis with natural language processing 
                        and text embeddings using Python.
                    </li>
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="font-bold text-xl">Undergraduate Researcher @ Diller Microrobotics Lab</h2>
                <p className="italic">May 2024 - Aug 2024</p>
                <ul className="list-disc pl-8">
                    <li>
                        Received an NSERC Award to do research under the supervision of Prof. Eric Diller where I worked on 
                        designing instruments to enable bimanual magnetic control of microrobotic tools for surgery.
                    </li>
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="font-bold text-xl">Data Analyst Intern @ Condominum Authority of Ontario</h2>
                <p className="italic">Jun 2023 - Aug 2023 | Dec 2023 - Jan 2024</p>
                <ul className="list-disc pl-8">
                    <li>
                        Wrote Python scripts to classify survey responses by modifying the BERT LLM text classifier using TensorFlow.
                    </li>
                    <li>
                        Performed data cleaning and extraction of survey responses using Python and Pandas.
                    </li>
                    <li>
                        Created interactive maps and statistics of all Condominium Corporations in Ontario using Python, Pandas, Matplotlib and Excel.
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