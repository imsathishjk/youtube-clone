import { HomeTile } from "./Hometile"
import { Subscription } from "./Subscription"
import { UserTile } from "./UserTile"

export const Sidebar = ({ showMenu, setShowMenu }) => {
    return (
        <div className={showMenu ? "lg:hidden fixed z-50 top-12 h-[100%] left-0 bg-white translate-x-0 transition duration-500 ease-in-out px-3 overflow-y-scroll" : 'fixed z-50 top-12 left bg-white h-[100vh] -translate-x-56  duration-500 ease-in-out px-3  overflow-y-scroll'}>
            <HomeTile setShowMenu={setShowMenu} />
            <UserTile setShowMenu={setShowMenu} />
            <Subscription setShowMenu={setShowMenu} />
        </div>
    )
}