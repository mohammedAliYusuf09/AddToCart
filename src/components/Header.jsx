import SlidingSheet from "./SlidingSheet";

function Header() {
    
    return (
        <div className="mt-20 w-[900px] mx-auto flex justify-between items-center">
            <h1 className="text-2xl ">Shooping Cart</h1>
            <SlidingSheet/>
        </div>
    )
}

export default Header;