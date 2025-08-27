
import {  Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import MyQrcode from "./pages/MyQrcode/MyQrcode"

const App = () =>{
  return(
    
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/qrcode" element={<MyQrcode/>}/>
      </Routes>
  

  )
}

export default App