import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  px-36 py-10">
      <div className="flex items-center justify-between gap-6">
        <div className="">Logo</div>
        <div className="">
          <ul className="flex gap-5">
            <li className="">Home</li>
            <li className="">About</li>
            <li className="">Portfolio</li>
          </ul>
        </div>
        <div className="">contact</div>
      </div>
      <div className="py-24 flex gap-10 items-center justify-between" id="home">
        <div className="w-1/3">
          <div className="pt-10">------Web Developer</div>
          <div className="pt-5 text-6xl text-wrap font-extrabold leading-tight">
            Hello, I Have Web Development Experince
          </div>
          <p className="pt-3 pb-5">
            Hi, I'm Nabila Azzahra a web developer crafting robust and
            innovative websites for companies, ensuring high performance,
            user-friendly experiences, and seamless functionality across all
            devices.
          </p>
          <div className="flex gap-8 items-center">
            <div className="px-1 py-2 bg-amber-200 w-44 flex items-center justify-center rounded-xl hover:font-bold hover:bg-amber-300 hover:shadow-md">
              <div className="border border-2 p-2 rounded-xl border-black">
                Let's talk with me
              </div>
            </div>
            <div className="flex gap-2 p-4 rounded-xl group hover:bg-black hover:text-white hover:font-extrabold hover:shadow-md">
              Portfolio
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                className="w-5 text-amber-100 bg-black p-1 rounded-md group-hover:bg-white group-hover:text-black"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="m-10 mr-[200px]">
          <div className="hexagon shadow-md"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
