import {HashRouter,Routes, Route} from "react-router-dom";
import './App.css';
import IsLoadingScreen from "./components/IsLoadingScreen";
import MyNavBar from './components/MyNavBar';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Purchases from "./pages/Purchases";
import {useDispatch, useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ProductsItems from "./pages/ProductsItems";
import { useEffect } from "react";
import { getProductThunk } from "./store/slice/products.slice";



function App() {  

const isLoading = useSelector((state) => state.isLoading);
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductThunk());
  }, []);

  return (
  
   <HashRouter>
    <MyNavBar/>
    {isLoading && <IsLoadingScreen />}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productsItems/:id" element={<ProductsItems/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/purchases" element={<Purchases/>}/>
      
      <Route element={<ProtectedRoutes />}>
      
      </Route>
    </Routes>
   
   </HashRouter>
  );
}

export default App
