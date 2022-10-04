import {HashRouter,Routes, Route} from "react-router-dom";
import './App.css';
import MyNavBar from './components/MyNavBar';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Purchases from "./pages/Purchases";
import ProductsItems from "./pages/ProductsItems";
import IsLoading from "./components/IsLoading";
import { useSelector } from "react-redux";

function App() {  
const isLoading=useSelector(state=> state.isLoading)
  return (
  
   <HashRouter>
    <MyNavBar/>
    {isLoading && <IsLoading/>}
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/purchases" element={<Purchases/>}/>
      <Route path="/products/:id" element={<ProductsItems/>}/>
    </Routes>
   
   </HashRouter>
  )
}

export default App
