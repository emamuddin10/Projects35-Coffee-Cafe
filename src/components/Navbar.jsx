import { Link } from "react-router-dom";

import user from '../assets/user.png'
const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-5">
            <div></div>
            <div className="flex gap-3">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className="flex gap-3 items-center">
                <img src={user} alt="" />
                <button className="btn btn-neutral rounded-none px-5">Login</button>

            </div>
        </div>
    );
};

export default Navbar;