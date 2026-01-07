import MainWindow from "@/components/MainWindow"
import AutoScrollCarousel from "@/components/AutoScrollCarousel"
import Image from "next/image"

export default function Projects() {
    return (
        <MainWindow>
            <div className="mb-6">
                <div className="mb-2">
                    <h2 className="font-bold text-xl">OpenGhost - An Open-Source and Aesthetic Display</h2>
                    <p className="italic">September 2024</p>
                    <a href="https://github.com/xanderchinxyz/OpenGhost" target="_blank">GitHub Repo</a>
                    <ul className="list-disc pl-8">
                        <li>
                            Built an aesthetic, open-source, and interactive display. Uses the Pepper's Ghost technique to project the screen onto 
                            a transparent surface, creating the illusion of a hologram. 
                        </li>
                        <li>
                            First built a V1 prototype on a breadboard which includes an avatar that you can talk to. Then I designed a 2-layer PCB which includes two ESP32 S3s that handle 50 fps video display, microphone input, and speaker output.
                        </li>
                        <li>
                            Made a much larger version over the summer of 2025 using a Raspberry Pi 5, Raspberry Pi camera, and a custom 3D printed enclosure. I'm continually making cool effects and interactive programs on it!
                        </li>
                        <li>
                            Got a $1000 USD <a href="https://www.1517fund.com/medici-project">1517 Medici Project</a> grant to develop the idea further (Thank you Danielle!).
                        </li>
                        <li>
                            Inspired by the holographic displays in Bladerunner 2049 and Iron Man.
                        </li>
                    </ul>
                </div>
                <div className="flex gap-x-2 mb-2">
                    <div className="landscape-container flex-shrink-0">
                        <iframe className="landscape-media" src="https://youtube.com/embed/dC20uYRpbl4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <p>V1 prototype of OpenGhost (previously called Hollo)</p>
                    </div>
                </div>
                <AutoScrollCarousel speed={30}>
                    <div className="portrait-container flex-shrink-0">
                        <a href="https://x.com/XanderChin/status/1988660086416548014" target="_blank">
                            <video className="portrait-media" autoPlay muted loop><source src="PeppersGhost/hand_controlled_boids.mp4" type="video/mp4"/></video>
                            <p>Boids controlled using hand gestures that went viral on Twitter</p>
                        </a>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <video className="landscape-media" autoPlay muted loop><source src="PeppersGhost/touchdesigner.mp4" type="video/mp4"/></video>
                        <p>Streaming TouchDesigner effects over Wi-Fi</p>
                    </div>
                    <div className="portrait-container flex-shrink-0">
                        <video className="portrait-media" autoPlay muted loop><source src="PeppersGhost/lorenz_attractor.mp4" type="video/mp4"/></video>
                        <p>Lorenz Attractor</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <a href="https://x.com/XanderChin/status/1896306516044710024" target="_blank">
                            <video className="landscape-media" autoPlay muted loop><source src="PeppersGhost/typing.mp4" type="video/mp4"/></video>
                            <p>A cool typing effect I posted on Twitter that went viral</p>
                        </a>
                    </div>
                    <div className="portrait-container flex-shrink-0">
                        <video className="portrait-media" autoPlay muted loop><source src="PeppersGhost/without_enclosure.mp4" type="video/mp4"/></video>
                        <p>OpenGhost without the enclosure</p>
                    </div>
                </AutoScrollCarousel>
            </div>
            <div className="mb-6">
                <div className="mb-2">
                    <h2 className="font-bold text-xl">Voice Assistant Camera Wearable</h2>
                    <p className="italic">June 2024</p>
                    <a href="https://github.com/xanderchinxyz/ESP32-CAM-Semantic-Search" target="_blank">Part 1 GitHub Repo</a> | <a href="https://github.com/xanderchinxyz/Voice-Assistant-Camera-Wearable" target="_blank">Part 2 GitHub Repo</a>
                    <ul className="list-disc pl-8">
                        <li>Built a clip-on device to turn any pair of glasses into smart glasses with a voice assistant built with a XIAO ESP32 S3 Sense board. Originally started out as a separate device built with an ESP32-CAM and Muse 2 headset.</li>
                        <li>Used a local multimodal large language model, Groq with RAG, and VOSK speech recognition model. First part only used text and image embeddings.</li>
                        <li>Inspired by Meta Raybans and <a href="https://github.com/BasedHardware/OpenGlass" target="_blank">OpenGlass</a>.</li>
                    </ul>
                </div>
                <AutoScrollCarousel speed={30}>
                <div className="portrait-container flex-shrink-0">
                        <iframe className="portrait-media"
                            src="https://www.youtube.com/embed/QoPYoWWtxFI"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                        <p>Part 1 Video</p>
                    </div>
                    <div className="portrait-container flex-shrink-0">
                        <iframe className="portrait-media"
                            src="https://www.youtube.com/embed/sPIqjVPMnrE"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                        <p>Part 2 Video</p>
                    </div>
                    <div className="portrait-container flex-shrink-0">
                        <img src="/Voice_Assistant_Camera_Wearable/first-version.jpg" className="portrait-media" alt=""/>
                        <p>Wearing the first version</p>
                    </div>
                </AutoScrollCarousel>
            </div>

            <div className="mb-6">
                <div className="mb-2">
                    <h2 className="font-bold text-xl">Ping Pong LED Walls</h2>
                    <p className="italic">March 2024</p>
                    <a href="/DER.pdf#page=231" target="_blank">Part 1 Writeup</a> | <a href="/DER.pdf#page=275" target="_blank">Part 2 Writeup</a>
                    <ul className="list-disc pl-8">
                        <li>
                            Part 1 (Feb 2022): Built a lightweight LED Wall with 24 by 32 resolution. I designed the PCBs to be as modular, lightweight, and cheap
                            as possible where I then painfully soldered them all. I also created a custom register-level parallel bit-banging protocol for the necessary speed to run it
                            with an ATmega328P MCU without using a library. Made use of the Flash storage to display pictures, GIFs, and cool patterns. 
                        </li>
                        <li>
                            Part 2 (May 2022): Optimized my custom protocol by transitioning from register level code to assembly which can now display the camera output from a computer 
                            and allow screen sharing and drawing. This is also facilitated through several Processing sketches and UART communication at 2
                            million bits per second. I also stuck ping pong balls on top as diffusers!
                        </li>
                        <li>
                            V2 (Mar 2024): Updated the previous Ping Pong LED Wall design to be a smaller and more modular IoT version with 3D printed clip-on pieces, solderable connector PCBs, 
                            and cool effects that can be controlled over Wi-Fi using the <a href="https://kno.wled.ge/" target="_blank">WLED app</a>.
                        </li>
                        <li>Inspired by <a href="https://youtu.be/EZEMK-C-nSo" target="_blank">Bitluni's Ping Pong LED Wall</a>.</li>
                    </ul>
                </div>
                <div className="flex gap-x-2 mb-2 overflow-x-auto pb-2">
                    <div className="portrait-container flex-shrink-0">
                        <iframe className="portrait-media"
                            src="https://www.youtube.com/embed/KHpbzdd8Qas"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                        <p className="leading-none">V2 Video</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <iframe className="landscape-media" src="https://www.youtube.com/embed/1C1XGq-2Q_g" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <p>Part 2 Video</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <iframe className="landscape-media" src="https://www.youtube.com/embed/KatHkq3PDNg?&vq=hd1080" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <p>Part 1 Video</p>
                    </div>
                </div>
                <AutoScrollCarousel speed={30}>
                    <div className="portrait-container flex-shrink-0">
                        <video className="portrait-media" autoPlay muted loop><source src="PingPongLEDWall/v2-WLED.mp4" type="video/mp4"/></video>
                        <p>V2 with WLED effects</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <video className="landscape-media" autoPlay muted loop><source src="PingPongLEDWall/rick-roll.mp4" type="video/mp4"/></video>
                        <p>LED Wall screen sharing</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <video className="landscape-media" autoPlay muted loop><source src="PingPongLEDWall/camera-output.mp4" type="video/mp4"/></video>
                        <p>LED Wall camera output 👋</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <img src="/PingPongLEDWall/nyan-cat.gif" className="landscape-media" alt=""/>
                        <p>Nyan Cat GIF</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <video autoPlay muted loop className="landscape-media"><source src="PingPongLEDWall/lots-of-soldering.mp4" type="video/mp4"/></video>
                        <p className="">Soldering each PCB and testing them (took forever)</p>
                    </div>
                </AutoScrollCarousel>
            </div>

            <div className="mb-6">
                <div className="mb-2">
                    <h2 className="font-bold text-xl">EEG + EMG Measurement Device</h2>
                    <p className="italic">December 2021</p>
                    <a href="/DER.pdf#page=199" target="_blank">Writeup</a>
                    <ul className="list-disc pl-8">
                        <li>
                            Built a 2 channel electroencephalography (EEG) and electromyography (EMG) reader to "mind control" devices.
                        </li>
                        <li>
                            Designed a PCB to amplify cognitive signals and attenuate noise, soldered SMT components, and wrote a Processing sketch to further filter the signal with an FFT algorithm and display the output.
                        </li>
                        <li>
                            One channel was located by the pre-frontal lobe (Fp2) while the other channel was located by the occipital lobe (O1). 
                            The reference channel was also located at the pre-frontal lobe (Fp1).
                        </li>
                    </ul>
                </div>
                <div className="flex gap-x-2 mb-2">
                    <div className="landscape-container flex-shrink-0">
                        <iframe className="landscape-media" src="https://www.youtube.com/embed/Dr2lxEIa05U" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <p>YouTube video demonstration + explanation</p>
                    </div>
                </div>
                <AutoScrollCarousel speed={30}>
                    <div className="landscape-container flex-shrink-0">
                        <video className="landscape-media" autoPlay muted loop><source src="EEG_EMG/alpha-waves.mp4" type="video/mp4"/></video>
                        <p>Generating alpha waves when closing my eyes with a spike in the FFT spectrum at 8-14 Hz</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <img src="/EEG_EMG/eeg-device.jpg" className="landscape-media" alt=""/>
                        <p>The PCB Board (first time using SMT components!)</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <img src="/EEG_EMG/reflow-oven.png" className="landscape-media" alt=""/>
                        <p>Baking the SMT components with a toaster oven repurposed as a reflow oven</p>
                    </div>
                    <div className="md:w-[450px] w-[300px] flex-shrink-0">
                        <img src="/EEG_EMG/eeg-circuit-diagram.jpg" className="md:w-[450px] w-[300px]" alt=""/>
                        <p>The circuit block diagram</p>
                    </div>
                    <div className="w-[250px] flex-shrink-0">
                        <img src="/EEG_EMG/10-20-system.png" className="w-[250px]" alt=""/>
                        <p>The 10-20 system for placing scalp electrodes to measure EEG</p>
                    </div>
                </AutoScrollCarousel>
            </div>

            <div className="mb-6">
                <div className="mb-2">
                    <h2 className="font-bold text-xl">Custom 4-Bit Computer (CHUMP)</h2>
                    <p className="italic">November 2021</p>
                    <a href="/DER.pdf#page=164" target="_blank">Part 1 Writeup</a> | <a href="/DER.pdf#page=175" target="_blank">Part 2 Writeup</a>
                    <ul className="list-disc pl-8">
                        <li>
                            Part 1: The beginning of a 4-bit breadboard computer called CHUMP (Cheap Homemade Understandable Minimal Processor). The first part goes over the custom "Chumpanese" code to
                            program the computer, the adjustable clock circuit, and the counter circuit to keep track of and execute the 
                            current instruction.
                        </li>
                        <li>
                            Part 2: The final custom 4-bit computer built from 1980's era TTL Integrated Circuits, coded in specific machine language. It executes 16 
                            lines of code, capable of loading, adding, subtracting, storing, and reading memory, as well as
                            a go-to command and conditional if zero commands.
                        </li>
                    </ul>
                </div>
                <div className="flex gap-x-2 mb-2 overflow-x-auto pb-2">
                    <div className="landscape-container flex-shrink-0">
                        <iframe className="landscape-media" src="https://www.youtube.com/embed/b5qDwCN9Q2c" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <p>Part 1 Video</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <iframe className="landscape-media" src="https://www.youtube.com/embed/fg3poC2dT2o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <p>Part 2 Video</p>
                    </div>
                </div>
                <AutoScrollCarousel speed={30}>
                    <div className="landscape-container flex-shrink-0">
                        <img src="/CHUMP/code-clock-counter.jpg" alt="" className="w-[400px] mb-[1px]"></img>
                        <p>The Code (stored in the EEPROM Program), Clock (555 timers) and Program Counter (PC) sections</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <img src="/CHUMP/complete-chump.jpg" alt="" className="w-[400px] mb-[1px]"></img>
                        <p>The Completed CHUMP 4-bit Computer</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <img src="/CHUMP/chump-diagram.jpg" alt="" className="w-[250px] mb-[1px]"></img>
                        <p>The CHUMP block diagram</p>
                    </div>
                </AutoScrollCarousel>
            </div>

            <div className="mb-6">
                <div className="mb-2">
                    <h2 className="font-bold text-xl">IR Nixie Clock</h2>
                    <p className="italic">May 2021</p>
                    <a href="/DER.pdf#page=132" target="_blank">Writeup</a>
                    <ul className="list-disc pl-8">
                        <li>
                            A 4-digit Nixie tube clock with alarm, timer, date, and temperature features controlled with an infrared remote.
                        </li>
                        <li>
                            Programmed in C++ on a standalone ATmega328 IC. Designed a custom PCB in EAGLE and laser-cut acrylic in Adobe Illustrator.
                        </li>
                        <li>
                            Designed a custom boost converter from 5V to 170V to drive the Nixie tubes.
                        </li>
                        <li>
                            Inspired by Steins Gate.
                        </li>
                    </ul>
                </div>
                <div className="flex gap-x-2 mb-2">
                    <div className="landscape-container flex-shrink-0">
                        <iframe className="landscape-media" src="https://www.youtube.com/embed/nEOyhyJHx2M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <p>YouTube video demonstration + explanation</p>
                    </div>
                </div>
                <AutoScrollCarousel speed={30}>
                    <div className="landscape-container flex-shrink-0">
                        <video className="landscape-media" autoPlay muted loop><source src="Nixie_Clock/cycling.mp4" type="video/mp4"/></video>
                        <p>Periodically cycling the digits to prevent cathode poisoning (flicker is from driving the tubes with Persistence of Vision)</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <img src="/Nixie_Clock/back-pcb.jpg" alt="" className="landscape-media"></img>
                        <p>The back PCB containing all the circuitry and sensors</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <img src="/Nixie_Clock/pcb-sandwich.jpg" alt="" className="landscape-media"></img>
                        <p>PCB sandwich connecting the display PCB to the back PCB</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <img src="/Nixie_Clock/boost-converters.jpg" alt="" className="landscape-media"></img>
                        <p>My custom boost converter using the MAX1771 IC (left) and the commercially available Taylor 1364 Nixie power supply (right)</p>
                    </div>
                </AutoScrollCarousel>
            </div>

            <div className="mb-6">
                <div className="mb-2">
                    <h2 className="font-bold text-xl">LiDAR Measurement and Mapping Device</h2>
                    <p className="italic">March 2021</p>
                    <a href="/DER.pdf#page=90" target="_blank">Writeup</a>
                    <ul className="list-disc pl-8">
                        <li>
                            A device that measures distance and models the surrounding room using LiDAR, servo motors, and an ESP32 programmed in C++.
                        </li>
                        <li>
                            Coded a Processing program in Java to display a 3D point cloud, perform measurements, and control the ESP32 with Bluetooth.
                        </li>
                    </ul>
                </div>
                <div className="flex gap-x-2 mb-2">
                    <div className="landscape-container flex-shrink-0">
                        <iframe className="landscape-media" src="https://www.youtube.com/embed/frzUmAhQT3E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <p>YouTube video demonstration + explanation</p>
                    </div>
                </div>
                <AutoScrollCarousel speed={30}>
                    <div className="landscape-container flex-shrink-0">
                        <video className="landscape-media" autoPlay muted loop><source src="LiDAR/point-cloud.mp4" type="video/mp4"/></video>
                        <p>Generated 3D point cloud of some objects with some distance measurements</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <video className="landscape-media" autoPlay muted loop><source src="LiDAR/t-pose.mp4" type="video/mp4"/></video>
                        <p>Generated a 3D point cloud of myself!</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <video className="landscape-media" autoPlay muted loop><source src="LiDAR/using-device.mp4" type="video/mp4"/></video>
                        <p>Starting a real-time scan to create a 3D point cloud</p>
                    </div>
                    <div className="landscape-container flex-shrink-0">
                        <img src="LiDAR/device.jpg" alt="" className="w-[400px] mb-[1px]"></img>
                        <p>The LiDAR Measurement Device consisting of the control unit and LiDAR unit</p>
                    </div>
                </AutoScrollCarousel>
            </div>

            {/* <h1 className="font-bold text-3xl mb-4">Other Projects</h1>
            <p>(Have a bento grid of projects)</p> */}
        </MainWindow>
    )
}