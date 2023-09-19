import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="flex justify-center gap-8 text-white">
            <NavLink className="hover:bg-slate-400 " to='/'>Home</NavLink>
            <NavLink className="hover:bg-slate-400"  to='/about'>About</NavLink>
            <NavLink className="hover:bg-slate-400"  to='/contact'>Contact</NavLink>
            <NavLink className="hover:bg-slate-400"  to='/users'>Users</NavLink>
        </nav>
    );
};

export default Header;