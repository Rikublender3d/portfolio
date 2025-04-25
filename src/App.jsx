import { Routes, Route, Link } from 'react-router-dom';
import Home from './page/Home';
import Work from './page/Work';
import Aboutme from './page/aboutme';
import ScrollToTop from './component/ScrollToTop';
import { useState } from 'react';
import { FaFacebook, FaInstagram,FaTwitter} from 'react-icons/fa';
function App() {
  const [isOpen, setOpen] = useState(false);
  const handlemenuToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="relative">
      {/* ヘッダーセクション */}
      <button onClick={handlemenuToggle} type="button" aria-label="メニューボタン" className="z-40 space-y-2 fixed top-5 right-5 md:hidden">
        <div className={isOpen ? 'w-8 h-0.5 bg-gray-400 translate-y-2.5 rotate-45 transition duration-500 ease-in-out' :
          'w-8 h-0.5 bg-gray-400 transition duration-500 ease-in-out'} />
        <div className={isOpen ? 'opacity-0 transition duration-400 ease-in-out' : 'w-8 h-0.5 bg-gray-400 transition duration-500 ease-in-out'} />
        <div className={isOpen ? 'w-8 h-0.5 bg-gray-400 -rotate-45 transition duration-500 ease-in-out' : 'w-8 h-0.5 bg-gray-400 transition duration-500 ease-in-out'} />
      </button>
      {isOpen ? (
        <nav
          className={`z-30 fixed right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3 bg-black/70 backdrop-blur-lg  transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <ul className="mt-7 text-center w-full h-full space-y-5">
            <li className="p-3 py-5 border-b-2 border-gray-600 border-dotted text-lg font-semibold text-gray-300 hover:text-opacity-50 transition">
              <Link to="/">Home</Link>
            </li>
            <li className="p-3 py-5 border-b-2 border-gray-600 border-dotted text-lg font-semibold text-gray-300 hover:text-opacity-50 transition">
              <Link to="/work">Work</Link>
            </li>
            <li className="p-3 py-5 text-lg font-semibold text-gray-300 hover:text-opacity-50 transition">
              <Link to="/aboutme">About Me</Link>
            </li>
          </ul>
          <div className="flex justify-evenly mb-7">
            <a
              href="https://www.instagram.com/ma___pocky/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-400 transition duration-200 hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100078989904621"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-400 transition duration-200 hover:text-white"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/mblender3d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-400 transition duration-200 hover:text-white"
            >
              Twitter
            </a>

          </div>
        </nav>
      ) : undefined}
      <header className="py-6 hidden md:block">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between whitespace-wrap">
            <Link
              to="/"
              className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent"
            >
              Mblender3D
            </Link>
            <div className="flex items-center gap-8 justify-between">
  <Link
    to="/"
    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
  >
    Home
  </Link>
  <Link
    to="/aboutme"
    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
  >
    About Me
  </Link>
  <Link
    to="/work"
    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
  >
    Work
  </Link>
  <a
    href="https://www.instagram.com/ma___pocky/"
    target='_blank'
    rel="noopener noreferrer"
    className="text-slate-400 transition-colors duration-200 hover:text-white"
  >
    <FaInstagram alt="instagram" className="w-6 h-6"/>
  </a>
  <a
    href='https://www.facebook.com/profile.php?id=100078989904621'
    target='_blank'
    rel="noopener noreferrer"
    className="text-slate-400 transition-colors duration-200 hover:text-white"
  >
    <FaFacebook alt="facebook" className="w-6 h-6"/>
  </a>
  <a
    href="https://twitter.com/mblender3d"
    target='_blank'
    rel="noopener noreferrer"
    className="text-slate-400 transition-colors duration-200 hover:text-white"
  >
    <FaTwitter alt="twitter" className="w-6 h-6"/>
  </a>
</div>

          </div>
        </nav>
      </header>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/aboutme' element={<Aboutme />} />
      </Routes>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">©2025 Mblender3D. All rights reserved.</p>
          <p className="text-sm">Created by Mblender3D</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
