import { Routes, Route, Link } from 'react-router-dom';
import Home from './page/home';
import Work from './page/Work';
function App() {
  const CurrenURL ="portfolio"
  return (
      <div className="relative">
        {/* ヘッダーセクション */}
        <header className="py-6">
          <nav className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link
                to=""
                className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent"
              >
                Mblender3D
              </Link>
              <div className="space-x-8">
                <Link
                  to=""
                  className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  Home
                </Link>
                <a href='#about' className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white">
                  About
                </a>
                <a href='#skills' className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white">
                  Skills
                </a>
                <Link
                  to="/work"
                  className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path={CurrenURL + ''}element={<Home />} />
          <Route path={CurrenURL + '/work'} element={<Work />} />
        </Routes>
      </div>
  );
}

export default App;
