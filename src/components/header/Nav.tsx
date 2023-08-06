import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/shopping-cart-logo.png';
import cartImage from '../../assets/shopping-cart.png';

const Nav = () => {
  return (
    <nav className='h-20 flex flex-col sm:flex-row justify-between items-center bg-white fixed left-0 right-0 top-0 border-solid shadow-sm border-b-2 border-gray-200 px-6 sm:px-8'>
      <ul className='w-1/2 list-none flex items-center font-bold'>
        <li>
          <Link to='/' className='flex justify-center items-center'>
            <img src={logo} alt='logo' className='w-14 mr-10' />
          </Link>
        </li>
        <li className='mx-2 sm:mx-4'>
          <NavLink to='/'>
            <h3 className='text-sm sm:text-lg font-medium'>Home</h3>
          </NavLink>
        </li>
        <li className='mx-2 sm:mx-4'>
          <NavLink to='/store'>
            <h3 className='text-sm sm:text-lg font-medium'>Store</h3>
          </NavLink>
        </li>
        <li className='mx-2 sm:mx-4'>
          <NavLink to='/about'>
            <h3 className='text-sm sm:text-lg font-medium'>About</h3>
          </NavLink>
        </li>
      </ul>

      <button className='relative'>
        <img src={cartImage} alt='cart' className='w-10' />
        <span
          className='flex justify-center items-center w-6 h-6 text-white bg-red-500 rounded-full absolute bottom-0 right-0'
          style={{ transform: 'translate(25%, 25%)' }}
        >
          3
        </span>
      </button>
    </nav>
  );
};

export default Nav;
