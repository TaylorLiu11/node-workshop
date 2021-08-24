import { Link } from 'react-router-dom';
import Logo from '../img/fish.png';

const Navbar = () => {
    return (
        <nav className="bg-indigo-100 px-10 py-3 flex justify-between items-center sticky">

            <div className="flex items-center cursor-pointer">
                <img src={Logo} width="50" alt="Logo" className="mr-2" />
                <span className="text-2xl text-gray-700 text-opacity-70">魚股市</span>
            </div>

            <div className="flex items-center ">
                <Link to="/" className="text-xl text-gray-700 text-opacity-70 mx-6 hover:text-opacity-90">股票</Link>
                <Link to="/about" className="text-xl text-gray-700 text-opacity-70 mx-6 hover:text-opacity-90">關於</Link>
                <button className="text-xl text-gray-700 text-opacity-70 mx-6 hover:text-opacity-90">登入</button>
            </div>

        </nav>
    );
};

export default Navbar;
