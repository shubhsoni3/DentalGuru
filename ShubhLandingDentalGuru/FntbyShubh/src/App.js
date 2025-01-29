import React, { useState, useEffect } from 'react';
import { Route, Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/style.scss';
import './assets/css/materialdesignicons.min.css';
import IndexSaas from './pages/index-saas';
import Error from './pages/page-error';
import ContactOne from './pages/page-contact-one';
import Refund from './componants/footer/Refund.jsx';
import Privacy from './componants/footer/Privacy.jsx';
import AdminLogin from './componants/AdminDashBoard/AdminLogin.jsx';
import CareerAdmin from './componants/AdminDashBoard/CareerAdmin.jsx';
import ContactAdmin from './componants/AdminDashBoard/ContactAdmin.jsx';
import UserSign from './componants/AdminDashBoard/UserSign.jsx';
import Hippa from './componants/footer/hippa.js';
import MiniDentalguru from './pages/miniDentalguru.js';
import Home from '../src/pages/home.js'
import PaymentPage from './pages/PaymentPage.js';
import Contactus from './pages/contact.js';
import Blog from './componants/blog.js';
import Blog2 from './componants/blog2.js';
import Blog3 from './componants/blog3.js';

function App() {

  return (
    <>

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Best-Dental-Practice-Management-Software" element={<IndexSaas />} />
        <Route path="/Best-Dental-Clinic-Management-Software" element={<MiniDentalguru />} />
        <Route path="/page-error" element={<Error />} />
        <Route path="*" element={<Error />} />
        <Route path="/page-contact-one" element={<ContactOne />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/contectus" element={<Contactus />} />
        <Route path="/Refund" element={<Refund />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/hippa" element={<Hippa />} />
        
        {/* Admin DashBoard Routing Start */}
        <Route path="/Admin-Login" element={<AdminLogin />} />
        <Route path="/Admin-Page-Career" element={<CareerAdmin />} />
        <Route path="/Admin-Page-Contact" element={<ContactAdmin />} />
        <Route path="/Admin-Page-UserSign" element={<UserSign />} />
        <Route path="/payment" element={<PaymentPage/>} />
        {/* Admin DashBoard Routing End */}
      </Routes>
    </>
  );
}

export default App;
