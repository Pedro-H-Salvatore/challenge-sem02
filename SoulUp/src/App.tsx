import { Outlet } from "react-router"
import BarraNavegacao from "./components/BarraNavegacao"
import Footer from "./components/Footer"




const App = ()=> {


  return (
    <div>
      <BarraNavegacao/>
        <Outlet />
        <Footer/>
    </div>
        
      
  )
}

export default App
