import { Sidebar } from "./components/shared/Sidebar"
import { useState } from "react";
import { RiMenu2Line, RiUserSharedLine, RiAddFill, RiPieChartLine, RiCloseLine } from "react-icons/ri";

function App() {

  const [showMenu, setShowMenu] = useState(false)
  //const [showOrder, setShowOrder] = useState(false)


  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className="bg-[#262837] w-full min-h-screen">
    <Sidebar showMenu={showMenu} />
    {/* Menu movil*/}
    <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-xl text-gray-400 py-2 px-8 flex items-center justify-between
    rounded-tl-xl rounded-tr-xl">
      <button className="p-2">
        <RiUserSharedLine />
      </button>
      <button className="p-2">
        <RiAddFill/>
      </button>
      <button className="p-2">
        <RiPieChartLine/>
      </button>
      <button onClick={toggleMenu} className="text-white p-2">
        {showMenu ? <RiCloseLine/> : <RiMenu2Line/>}
      </button>
    </nav>
    </div>
  )
}

export default App
