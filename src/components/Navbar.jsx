import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import userImg from '../assets/user.png'
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";

const Navbar = () => {
    
    const {user , logOut} = useContext(AuthContext)
    const handleLogOut=()=>{
        
        logOut()
        .then(() => {
            alert('sign out successfull')
          // Sign-out successful.
        }).catch((error) => {
            alert(error)
          // An error happened.
        });
    }
    return (
        <div className="flex justify-between items-center py-5"> 
            <div> {user && user.name}</div>
            <div className="flex gap-3">
                <Link className="font-semibold" to='/'>Home</Link>
                <Link className="font-semibold" to='/about'>About</Link>
                <Link className="font-semibold" to='/career'>Career</Link>
            </div>
            <div className="flex gap-3 items-center">
                {
                    user && user?.email ? <div>
                        <img src={user?.photoURL} alt="" />
                        <p>{user?.displayName}</p>
                    </div>: <img src={userImg} alt="" />
                }
                
                {
                    user ?  <Link to='' onClick={handleLogOut}  className="btn btn-error text-white rounded-none px-5">Log Out</Link> 
                    : 
                    <Link to='/auth/login' className="btn btn-neutral text-white rounded-none px-5">Login</Link>
                }
                
               

            </div>
        </div>
    );
};

export default Navbar;