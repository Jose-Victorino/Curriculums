import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GlobalProvider } from '/src/context/globalContext';

import App from './App.jsx'
import MutualCourses from '/src/components/MutualCourses/MutualCourses.jsx'
import Dashboard from '/src/components/Dashboard/Dashboard.jsx'
import NotFoundPage from '/src/components/NotFoundPage/NotFoundPage.jsx'

import '/src/library/vars.scss'
import '/src/library/reset.scss'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/Mutual-Courses" replace />}/>
          <Route path='/Mutual-Courses' element={<MutualCourses />}/>
          <Route path='/c/:name/*' element={<Dashboard />}/>
        </Route>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </GlobalProvider>
  </BrowserRouter>
)