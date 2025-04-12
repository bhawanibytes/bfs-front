import Searchbar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className=''>
      <ul className='flex justify-around items-center py-6 px-40'>
        <li className='flex'>
          <img src='/Logo.svg' alt='logo' className='w-8 h-8' />
          <p className='font-medium text-2xl'>Sabjiwala</p>
        </li>
        <li>
          {/* search bar */}
          <Searchbar />
        </li>
        <li>
          <ul className='flex space-x-4'>
            <li>
              <img src='/User.svg' alt='user-icon' className='h-8 w-8' />
            </li>
            <li>
              <img src='/Cart.svg' alt='cart-icon' className='h-8 w-8' />
            </li>
          </ul>
        </li>
      </ul>
      <hr />
    </nav>
  );
};

export default Navbar;
