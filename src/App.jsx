import { Routes, Route, Link } from 'react-router-dom';
import Home from './page/Home';
import Work from './page/Work';
import Aboutme from './page/aboutme';
import ScrollToTop from './component/ScrollToTop';
function App() {
  return (
      <div className="relative">
        {/* ヘッダーセクション */}
        <header className="py-6">
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
      </div>
  );
}

export default App;
