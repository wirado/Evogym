import { useState } from "react"
import {Bars3Icon} from '@heroicons/react/24/solid'
import logo from '../../assets/images/Logo.png'
import Link from "./Link"
import { SelectedPage } from "@/type/types"
import ActionButton from "./ActionButton"


type Props = {
    isTopOfPage: boolean
    selectedPage : SelectedPage,
    setSelectedPage : (value : SelectedPage) => void
}

function Navbar (props : Props) {

    const [showMenu,setShowMenu] = useState(false)
    
    

    return (
        <nav className={`  md:relative flex justify-between items-center  z-10 w-full py-[20px]  px-6`} >
       
        <div>
            <img src={logo} alt='logo' />
            
        </div>

        <Bars3Icon className="block md:hidden w-[24px]" onClick={() : void => setShowMenu(!showMenu)} />
       <div className={`${showMenu ? '' : 'hidden md:block'} md:static absolute z-10 opacity-75 top-[70px] left-0 right-0 bg-white w-full  md:w-3/4 `} >
       <div className={`flex md:flex-row flex-col md:justify-between gap-5`} >

            <div className=" flex md:flex-row flex-col justify-center items-center gap-4 w-100 text-[18px] text-center font-semibold " >
                <Link navClose={setShowMenu} selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} page='Home' />
                <Link navClose={setShowMenu} selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} page='Benefits' />
                <Link navClose={setShowMenu} selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} page='Our Classes' />
                <Link navClose={setShowMenu} selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} page='Contact Us' />
            </div>


            <div className="flex justify-center gap-x-3 mt-2 " > 
                    <button className="px-4 py-2" >
                        Sign In
                    </button>
                    <button className="px-4 py-2 bg-secondary-500 rounded  " >
                       <ActionButton setSelectedPage={props.setSelectedPage} >Become a member</ActionButton>
                    </button>
            </div>
        </div>
        </div>

       
        </nav>
    )
}

export default Navbar