import { Link } from "react-router-dom";

import user from '../assets/user.png'
const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-5"> 
            <div></div>
            <div className="flex gap-3">
                <Link className="font-semibold" to='/'>Home</Link>
                <Link className="font-semibold" to='/about'>About</Link>
                <Link className="font-semibold" to='/career'>Career</Link>
            </div>
            <div className="flex gap-3 items-center">
                <img src={user} alt="" />
                <Link to='/auth/login' className="btn btn-neutral rounded-none px-5">Login</Link>

            </div>
        </div>
    );
};

export default Navbar;