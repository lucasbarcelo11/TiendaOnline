import { Sidebar } from "./components/shared/Sidebar";
import { useState } from "react";
import {
  RiMenu2Line,
  RiUserSharedLine,
  RiAddFill,
  RiPieChartLine,
  RiCloseLine,
  RiSearch2Line,
  RiArrowDownSLine,
  RiDeleteBin6Line,
} from "react-icons/ri";
import Card from "./components/shared/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false)
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder)
    setShowMenu(false)
  }

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Card showOrder={showOrder} setShowOrder={setShowOrder}/>
      {/* Menu movil*/}
      <nav
        className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-xl text-gray-400 py-2 px-8 flex items-center justify-between
    rounded-tl-xl rounded-tr-xl"
      >
        <button className="p-2">
          <RiUserSharedLine />
        </button>
        <button className="p-2">
          <RiAddFill />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-[#ec7c6a] p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu2Line />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-[360px]  pb-20">
        <div className="md:p-8 p-4">
          {/* Header*/}
          <header className="">
            {/* Title and Search*/}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-xl text-gray-300">Jeager Resto</h1>
                <p className="text-gray-500">10 abril 2025</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a
                href="#"
                className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a]
                 before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
              >
                Hot dishes
              </a>
              <a href="#" className=" py-2 pr-4">
                Cold dishes
              </a>
              <a href="#" className=" py-2 pr-4">
                Soup
              </a>
              <a href="#" className=" py-2">
                Grill
              </a>
            </nav>
          </header>
          {/* Title content*/}
          <div className="flex items-center justify-between mb-12 ">
            <h2 className="text-xl text-gray-300">Chosose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-5 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-16">
            {/* card */}
            <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-gray-300 text-center">
              <img
                src="hamb.png"
                alt="-"
                className="w-40 h-40 object-cover -mt-20
              shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles </p>
              <span className="text-gray-400">$2.59</span>
              <p className="text-gray-600">20 Bowls available </p>
            </div>
            {/* card */}
            <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-gray-300 text-center">
              <img
                src="hamb.png"
                alt="-"
                className="w-40 h-40 object-cover -mt-20
              shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles </p>
              <span className="text-gray-400">$2.59</span>
              <p className="text-gray-600">20 Bowls available </p>
            </div>
            {/* card */}
            <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-gray-300 text-center">
              <img
                src="hamb.png"
                alt="-"
                className="w-40 h-40 object-cover -mt-20
              shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles </p>
              <span className="text-gray-400">$2.59</span>
              <p className="text-gray-600">20 Bowls available </p>
            </div>
            {/* card */}
            <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-gray-300 text-center">
              <img
                src="hamb.png"
                alt="-"
                className="w-40 h-40 object-cover -mt-20
              shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles </p>
              <span className="text-gray-400">$2.59</span>
              <p className="text-gray-600">20 Bowls available </p>
            </div>
            {/* card */}
            <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-gray-300 text-center">
              <img
                src="hamb.png"
                alt="-"
                className="w-40 h-40 object-cover -mt-20
              shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles </p>
              <span className="text-gray-400">$2.59</span>
              <p className="text-gray-600">20 Bowls available </p>
            </div>
            {/* card */}
            <div className="bg-[#1F1D2B] p-8  rounded-xl gap-2 flex flex-col items-center text-gray-300 text-center">
              <img
                src="hamb.png"
                alt="-"
                className="w-40 h-40 object-cover -mt-20
              shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafood nodles </p>
              <span className="text-gray-400">$2.59</span>
              <p className="text-gray-600">20 Bowls available </p>
            </div>
          </div>
        </div>
       
      </main>
    </div>
  );
}

export default App;
