import Image from "next/image";
import {
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="shadow-md bg-white sticky top-0 z-50 w-full h-[4rem] flex items-center justify-evenly px-10 ">
      {/* Left for logo */}
      <div className="relative hidden lg:inline-grid h-24 w-24">
        <Image
          src="https://links.papareact.com/ocw"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="relative h-10 w-10 lg:hidden flex-shrink-0">
        <Image
          src="https://links.papareact.com/jjm"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/*Middle-Search input field*/}
      <div className="max-w-xs flex items-center justify-between">
        <div className="relative p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 block w-full pl-10 sm:text-sm
            border-2 border-gray-500 focus:ring-black focus:border-black 
      rounded-md px-5 py-1"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Right  menu or items*/}
      <div className="flex items-center justify-end space-x-4 ">
        <HomeIcon className="w-7 h-7 navBtn" />
        <MenuIcon className="w-7 md:hidden cursor-pointer  " />

        <div className="relative navBtn">
          <PaperAirplaneIcon className="h-7 w-7 rotate-45" />
          <div className="absolute -top-1 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center animate-pulse">
            3
          </div>
        </div>

        <PlusCircleIcon className="h-7 w-7 navBtn" />
        <UserGroupIcon className="h-7 w-7 navBtn" />
        <HeartIcon className="h-7 w-7 navBtn" />

        <img
          src="https://avatars.githubusercontent.com/u/64247342?v=4"
          alt=""
          className="w-9 rounded-full cursor-pointer mt-1"
        />
      </div>
    </div>
  );
}

export default Header;
