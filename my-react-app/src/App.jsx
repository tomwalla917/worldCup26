import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import logo from '/images/wc26logo.png'
import Dashboard from './pages/Dashboard.jsx'
import Games from './pages/Games.jsx'
import Draft from './pages/Draft.jsx'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [configLoaded, setConfigLoaded] = useState(false)

  useEffect(() => {
    // Wait a bit for the config widget to initialize
    const timer = setTimeout(() => {
      setConfigLoaded(true)
      console.log('Config should be loaded now')
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      {/* Config widget - render it directly in the DOM */}
      <div style={{ display: 'none' }}>
        <api-sports-widget
          data-type="config"
          data-key="17426b7c846ed1d1222b0e36589808d4"
          data-sport="football"
          data-show-logos="true"
          data-theme="white"
        ></api-sports-widget>
      </div>

      <nav className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button 
                type="button" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
                    <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img src={logo} alt="Your Company" className="h-8 w-auto" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                      isActive 
                        ? "rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    }
                  >
                    Dashboard
                  </NavLink>
                  <NavLink 
                    to="/games" 
                    className={({ isActive }) => 
                      isActive 
                        ? "rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    }
                  >
                    Games
                  </NavLink>
                  <NavLink 
                    to="/draft" 
                    className={({ isActive }) => 
                      isActive 
                        ? "rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
                        : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    }
                  >
                    Draft
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <NavLink 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  isActive 
                    ? "block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white"
                    : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                }
              >
                Dashboard
              </NavLink>
              <NavLink 
                to="/games" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  isActive 
                    ? "block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white"
                    : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                }
              >
                Games
              </NavLink>
              <NavLink 
                to="/draft" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  isActive 
                    ? "block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white"
                    : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                }
              >
                Draft
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
        {configLoaded ? (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/games" element={<Games />} />
            <Route path="/draft" element={<Draft />} />
          </Routes>
        ) : (
          <div>Loading configuration...</div>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App