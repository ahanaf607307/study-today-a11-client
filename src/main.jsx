import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import routes from './Router/Routes'
import AuthProvider from './Context/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<RouterProvider router={routes}/>
</AuthProvider>
  </StrictMode>,
)
