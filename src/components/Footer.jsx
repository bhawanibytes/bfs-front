

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-green-500">Sabjiwala</h2>
          <p className="mt-2 text-sm text-gray-400">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="mt-4">
            <p>(219) 555-0114 <span className="mx-2">or</span> 
              <a href="mailto:Proxy@gmail.com" className="text-green-500 underline">
                Proxy@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* My Account Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">My Account</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">My Account</a></li>
            <li><a href="#" className="hover:text-white">Order History</a></li>
            <li><a href="#" className="hover:text-white">Shopping Cart</a></li>
            <li><a href="#" className="hover:text-white">Wishlist</a></li>
          </ul>
        </div>

        {/* Helps Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Helps</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Terms & Condition</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Categories Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Fruit & Vegetables</a></li>
            <li><a href="#" className="hover:text-white">Meat & Fish</a></li>
            <li><a href="#" className="hover:text-white">Bread & Bakery</a></li>
            <li><a href="#" className="hover:text-white">Beauty & Health</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>Sabjiwala-BFS © 2021. All Rights Reserved</p>
          <div className="flex items-center mt-4 md:mt-0 space-x-4">
            <img src="/apple-pay-logo.png" alt="Apple Pay" className="h-6" />
            <img src="/visa-logo.png" alt="Visa" className="h-6" />
            <img src="/discover-logo.png" alt="Discover" className="h-6" />
            <img src="/mastercard-logo.png" alt="Mastercard" className="h-6" />
            <span className="ml-2">Secure Payment</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;