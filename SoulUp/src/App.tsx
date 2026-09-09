import { Outlet } from "react-router"
import BarraNavegacao from "./components/BarraNavegacao"
import Footer from "./components/Footer"
import ScrollToHash from "./components/ScrollToHash"




const App = ()=> {


  return (
    <div>
      <ScrollToHash />
      <BarraNavegacao/>
        <Outlet />
        <Footer/>
    </div>
        
      
  )
}

export default App
