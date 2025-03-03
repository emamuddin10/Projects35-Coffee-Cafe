import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h1 className="font-semibold">Login With in</h1>
            <div className="*:w-full space-y-3">
                <button className=' btn btn-info'><FaGoogle /> Login With Google</button>
                <button className="btn btn-neutral"> <FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;