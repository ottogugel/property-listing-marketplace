import React, { useState } from 'react'
import Modal from './components/Modal/Modal'
import TopBar from './components/topbar/TopBar'
import Home from './pages/homepage/Home'
import Details from './pages/listingdetail/Details'
import CreateListing from './pages/create-listing/CreateListing'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import AboutPage from './pages/aboutpage/AboutPage'
import ContactPage from './pages/contactpage/ContactPage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Router>
    <div>
      <TopBar setModalOpen={setModalOpen} />
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route exact path="/create" element={<CreateListing />} />
        <Route exact path="/aboutus" element={<AboutPage />} />
        <Route exact path='/contactus' element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
