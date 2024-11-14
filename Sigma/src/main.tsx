import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Import for routingimport App from './App.tsx'
import App from './App.tsx';
import Friends from './Friends.tsx';
import Wallet from './Wallet.tsx';
import './index.css';
import Navbar from './Navbar.tsx'
import Invitation from './invitation.tsx'
import Earn from './Earn.tsx';
import {PointsProvider} from './PointsContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <PointsProvider>
        <Routes>
          {/*Define Routes here*/}
          <Route path="/" element={<Navbar />}>
            <Route path ="/app" index element={<App />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/invitation" element={<Invitation/>} />
            <Route path="/earn" element={<Earn/>}/>
          </Route>
        </Routes>
      </PointsProvider>
    </React.StrictMode>,
  </BrowserRouter>
)
