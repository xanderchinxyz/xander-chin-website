import Image from "next/image";
import Link from "next/link";
import MainWindow from "@/components/MainWindow";

export default function Home() {
  return (
    <MainWindow>
      <h1 className="font-bold text-3xl mb-4">Hi I'm Xander Chin</h1>
      <p className="mb-2">I'm passionate about building things and sharing them on the internet using hardware, software, art and design.</p>
      {/* <p>Currently working on:</p>
      <ul className="list-disc pl-8 mb-4">
        <li>A Pepper's Ghost Display that you can talk to</li>
      </ul> */}
      <h2>Currently:</h2>
      <ul className="list-disc pl-8 mb-4">
        <li>In my third year @ Western University studying Mechatronics and AI Engineering</li>
        <li>Playing Jazz Guitar - I'm big fan of Joe Pass and Pat Metheney!</li>
        <li>Rock climbing (working towards that V4), doing Calisthenics and Parkour</li>
        <li>Posting my builds and progress on <a className="text-[#0000EE] underline" href="https://www.youtube.com/@xanderchinxyz" target="_blank">YouTube</a> and <a className="text-[#0000EE] underline" href="https://x.com/XanderChin" target="_blank">Twitter</a></li>
      </ul>

      <h2>I've previously:</h2>
      <ul className="list-disc pl-8 mb-4">
        <li>Won a 100k scholarship to study Engineering @ Western University</li>
        <li>Written a <a className="text-[#0000EE] underline" href="/DER.pdf" target="_blank">250+ page portfolio</a> of my projects</li>
      </ul>

      <p className="mb-8">Reach out to me at: xanderchin@gmail.com !</p>

      <div className="flex space-x-10 md:justify-start">
        <a href="https://www.youtube.com/@xanderchinxyz" target="_blank">
          <svg className="text-gray-300 transition hover:text-black fill-current w-8 h-8" viewBox="0 -3 20 20"><path d="M7.988 9.586V3.974c1.993.938 3.536 1.843 5.36 2.82-1.505.834-3.367 1.77-5.36 2.792m11.103-8.403c-.344-.453-.93-.805-1.553-.922-1.833-.348-13.267-.349-15.099 0-.5.094-.945.32-1.328.673C-.5 2.429.005 10.452.393 11.75c.164.562.375.968.64 1.235.343.352.812.594 1.351.703 1.51.312 9.284.486 15.122.047a2.62 2.62 0 0 0 1.39-.712c1.49-1.49 1.388-9.962.195-11.841"/></svg>
        </a>
        <a href="https://x.com/XanderChin" target="_blank">
          <svg className="text-gray-300 transition hover:text-black fill-current w-8 h-8" viewBox="0 -40 510 510"><path d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/></svg>
        </a>
        <a href="https://github.com/xanderchinxyz" target="_blank">
          <svg className="text-gray-300 transition hover:text-black fill-current w-8 h-8" viewBox="0 0 20 20"><path d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/xanderchinxyz/" target="_blank">
          <svg className="text-gray-300 transition hover:text-black fill-current w-8 h-8" viewBox="0 0 32 32"><path d="M28.778 1.004H3.191a2.185 2.185 0 0 0-2.186 2.159v25.672a2.186 2.186 0 0 0 2.186 2.161h25.612c1.2 0 2.175-.963 2.194-2.159V3.165a2.195 2.195 0 0 0-2.195-2.161h-.029.001zM9.9 26.562H5.446V12.251H9.9zM7.674 10.293a2.579 2.579 0 1 1 2.579-2.58v.004a2.577 2.577 0 0 1-2.577 2.577h-.003zm18.882 16.269h-4.441v-6.959c0-1.66-.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441V12.252h4.266v1.951h.058a4.686 4.686 0 0 1 4.22-2.312h-.009c4.5 0 5.332 2.962 5.332 6.817v7.855z"/></svg>
        </a>
        <a href="https://devpost.com/xander-chin" target="_blank">
          <svg className="text-gray-300 transition hover:text-black fill-current w-8 h-8" viewBox="0 0 24 24"><path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"/></svg>
        </a>
      </div>
    </MainWindow>
  );
}
