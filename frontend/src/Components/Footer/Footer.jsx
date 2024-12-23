import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-50 py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Top Category */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Top Category</h4>
            <ul className="text-gray-600">
              <li className="mb-2">Suit Sets</li>
              <li className="mb-2">Kurta Sets</li>
              <li className="mb-2">Dresses</li>
              <li className="mb-2">Co-ord Sets</li>
              <li className="mb-2">Sarees</li>
              <li className="mb-2">Lehenga</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Information</h4>
            <ul className="text-gray-600">
              <li className="mb-2">About Us</li>
              <li className="mb-2">Customer Reviews</li>
              <li className="mb-2">Exchange, Cancellation and Refund Policy</li>
              <li className="mb-2">Blogs</li>
              <li className="mb-2">Bulk Order / Wholesale</li>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms of Service</li>
              <li className="mb-2">Size Chart</li>
              <li>Sitemap</li>
            </ul>
          </div>

          {/* Get Support */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Get Support</h4>
            <ul className="text-gray-600">
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Submit for Returns & Exchanges</li>
              <li className="mb-2">Media Query</li>
              <li className="mb-2">Track Your Orders</li>
              <li>Your Addresses</li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h4>
            <form>
              <label htmlFor="email" className="text-gray-600 block mb-2">Enter Your Email</label>
              <div className="flex items-center">
                <input
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                  className="w-full border border-gray-300 rounded-l-md p-2"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-r-md"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; 2024 Mytalorzone By Sahiba. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-sm">
            123 Fashion Street, Style City, Fashionland 56789
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
