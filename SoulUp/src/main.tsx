import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider, } from 'react-router'
import Inicio from "./routes/Inicio/Inicio.tsx"
import Ranking from "./routes/Ranking/Ranking.tsx"
import Faq from "./routes/Faq/Faq.tsx"
import Contato from "./routes/Contato/Contato.tsx"
import Dashboard from "./routes/Dashboard/Dashboard.tsx"
import Error from './routes/Error/index.tsx'
import ComoFunciona from './routes/ComoFunciona/index.tsx'



const router = createBrowserRouter([
  {path:'/', element:<App/>, errorElement:<Error/>,children:[
    {path:"/", element:<Inicio/>},
    {path:"/ranking", element:<Ranking />},
    {path:"/faq", element:<Faq />},
    {path:"/contato", element:<Contato />},
    {path:"/dashboard", element:<Dashboard />},
    {path:"/como-funciona", element:<ComoFunciona/>}
  ]}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
