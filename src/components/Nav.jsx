
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Nav({ showSideBar, setShowSideBar }) {


    return (
        <nav>
            <div className='wrapper'>

                <Link to="/" className='link'>
                    <div className="logo_container">
                        <h1 className="logoh1">Clothify </h1>
                        <img src="logo.png" className="logo" alt="Clothify Logo" />
                    </div>
                </Link>


                <ul className='nav_ul'>
                    <Link to="/User" className='link'>
                        <li className='nav_li'>
                            <FaUserCircle className="icon" />
                            <span>User</span>
                        </li>
                    </Link>

                    <Link to="/Products" className='link'>
                        <li className='nav_li'>
                            <FaUserCircle className="icon" />
                            <span>Product</span>
                        </li>
                    </Link>

                    <Link to="/Orders" className='link'>
                        <li className='nav_li'>
                            <FaUserCircle className="icon" />
                            <span>Orders</span>
                        </li>
                    </Link>




                    <div className='nav_extra_icons'>
                        <FaUserCircle className="icon" />
                        <FaUserCircle className="icon" />
                    </div>
                </ul>

            </div>
        </nav>
    );
}
