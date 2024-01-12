import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo.png'
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    selectedPage : SelectedPage;
    setSelectedPage : (value : SelectedPage) => void;
    isTopOfPage : boolean;
};

const Navbar = ({selectedPage,setSelectedPage,isTopOfPage} : Props) => {
const flexBetween = " flex items-center justify-between";
const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
  return (
    <nav>
      <div className={`${flexBetween} ${navbarBackground} fixed top-0 z-30 w-full py-6`} >
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`} >
                {/* Left side */}
                <img src={Logo} alt="logo" />
                {/* Right side */}
                {
                    (isAboveMediumScreens) ?
                    (<div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <Link
                         page="Home"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage} />
                        <Link 
                         page="Benifits"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage} />
                        <Link
                         page="Our Classes"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage} />
                        <Link
                         page="Contact Us"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage} />
                    </div>
                    <div className={`${flexBetween} gap-8`}>
                    <button>
                    Sign In
                        </button>
                        <ActionButton setSelectedPage={
                            setSelectedPage
                        }>Become a Member</ActionButton>
                    </div>
                </div> ): 
                    (<button className=" rounded-full bg-secondary-500 p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <Bars3Icon className="h-6 w-6 text-white"/>
                    </button>)
                }
            </div>
        </div>
      </div>
      {/* Mobile menu modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
            {/* Close icon */}
            <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-gray-400"/>
                </button>
            </div>
            {/* Menu items */}
            <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
                        <Link
                         page="Home"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage} />
                        <Link 
                         page="Benifits"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage} />
                        <Link
                         page="Our Classes"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage} />
                        <Link
                         page="Contact Us"
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage} />
                    </div>
                    <div className={`${flexBetween} gap-8`}></div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
