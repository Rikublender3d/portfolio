import { Routes, Route, Link } from 'react-router-dom';
import Home from './page/Home';
import Work from './page/Work';
import Aboutme from './page/aboutme';
import ScrollToTop from './component/ScrollToTop';
import { useState } from 'react';
function App() {
  const [isOpen, setOpen] = useState(false);
  const handlemenuToggle = () => {
    setOpen(!isOpen);
  };
  return (
      <div className="relative">
        {/* ヘッダーセクション */}
        <button onClick={handlemenuToggle} type="button" aria-label="メニューボタン" className="z-40 space-y-2 fixed top-5 right-5 md:hidden">
            <div className={isOpen ? 'w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out' : 
              'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'} />
            <div className={isOpen ? 'opacity-0 transition duration-500 ease-in-out' : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'} />
            <div className={isOpen ? 'w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out' : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'} />
          </button>
            {isOpen ? (
       <nav
       className={
          isOpen
           ? 'z-30 text-left fixed bg-slate-50 right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-500'
           : 'z-30 fixed right-[-100%] ease-linear duration-500'
       }>
                   <ul className='text-center w-full h-full '>
              <li className='p-3 border-b-2 border-black border-dotted'>
              <Link
                  to="/"
                >
                  Home
                </Link>
                </li>
              <li className='p-3 border-b-2 border-black border-dotted'>
                <Link
                  to="/work"
                >
                Work
                </Link>
                </li>
              <li className='p-3'>
                <Link
                  to="/aboutme"
                >
                  About Me
                </Link>
                </li>
            </ul>
            <div className="flex justify-evenly mb-7">
            <a href="https://www.instagram.com/ma___pocky/" target='_blank' rel="noopener noreferrer" className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white">
                  Instagram
                </a>
                <a href="https://twitter.com/mblender3d" target='_blank' rel="noopener noreferrer" className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white">
                  Twitter
                </a>
              </div>            
            </nav>
      ) : undefined}
        <header className="py-6 hidden md:block">
          <nav className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent"
              >
                Mblender3D
              </Link>
              <div className="space-x-8">
                <Link
                  to="/"
                  className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  Home
                </Link>
                <Link 
                to= "/aboutme"
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
                <a href="https://www.instagram.com/ma___pocky/" target='_blank' rel="noopener noreferrer" className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white">
                  Instagram
                </a>
                <a href="https://twitter.com/mblender3d" target='_blank' rel="noopener noreferrer" className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white">
                  Twitter
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
