import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

/**
 * projects on portfolio page - color change?
 * 
 * @todo 08 - [ProfilePage.jsx] Write 'Hospitality' description
 * @todo 09 - [ProfilePage.jsx] Create 'Physical Activity' content
 * @todo 10 - [ProfilePage.jsx] Create 'Problem Solving' content
 * @todo 11 - [ProfilePage.jsx] Create 'Reading and Research' content
 * @todo 12 - [ProfilePage.jsx] Create 'Music' content
 * 
 * ------------------------- website ready
 * 
 * @todo 13 - Create OKauth application and add to projects array
 * @todo 14 - Create OKadmin application and add to projects array
 * @todo 15 - Create OKfinance application and add to projects array
 * @todo 16 - Create OKfitness application and add to projects array
 * @todo 17 - Create OKdiet application and add to projects array
 * @todo 18 - Create OKroutine application and add to projects array
 * @todo 19 - Create OKmedia application and add to projects array
 * @todo 20 - Create OKecom application and add to projects array
 * @todo 21 - Create OKestate application and add to projects array
 * @todo 22 - Create the OKlife application, create OKlife description for [HomePage.jsx], and add /oklife route
 * 
 * ------------------------- portfolio ready
 * 
 * @todo 23 - Update Hero images (current image to be used on about-page)
 * 
 * ------------------------- upload
 * 
 * @todo 24 - Complete Frontend Mentor Challenges
 * @todo 25 - Complete JavaScript 30 Challenges
 */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<HomePage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/portfolio' element={<PortfolioPage />} />
      <Route path='/about' element={<AboutPage />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
