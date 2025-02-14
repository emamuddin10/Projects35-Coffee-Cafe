import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center'>
            <div className="logo">
                <img className='mx-auto' src={logo} alt="" />
            </div>
            <p>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;