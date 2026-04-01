import React from 'react'
import { BrowserRouter as Router, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-yellow-50 to-gray-100 text-slate-900">
      <Router>
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-4">

          {/* Header */}
          <header className="mb-6 rounded-2xl border bg-white px-5 py-4 shadow-md">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              
              {/* Title */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
                  Post Studio
                </p>
                <h1 className="mt-1 text-2xl font-semibold sm:text-3xl">
                  A clean place to share posts
                </h1>
              </div>

              {/* Navbar */}
              <nav className="flex gap-2 rounded-full bg-gray-100 p-1 text-sm font-medium text-gray-600">
                <NavLink to="/" end className={({ isActive }) =>
                    `px-4 py-2 rounded-full transition ${
                      isActive ? 'bg-black text-white' : 'hover:text-black'
                    }`
                  }>
                  Home
                </NavLink>

                <NavLink to="/feed" className={({ isActive }) =>
                    `px-4 py-2 rounded-full transition ${
                      isActive ? 'bg-black text-white' : 'hover:text-black'
                    }`
                  } >
                  Feed
                </NavLink>

                <NavLink to="/create-post" className={({ isActive }) =>
                    `px-4 py-2 rounded-full transition ${
                      isActive ? 'bg-black text-white' : 'hover:text-black'
                    }`
                  } >
                  Create Post
                </NavLink>
              </nav>
            </div>
          </header>

          {/* Routes */}
          <main className="flex-1 pb-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/feed" element={<Feed />} />
            </Routes>
          </main>

        </div>
      </Router>
    </div>
  )
}

export default App