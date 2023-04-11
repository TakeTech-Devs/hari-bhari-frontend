import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { useGetCartQuery } from './features/cart/cartApiSlice';
import { useGetUserQuery } from './features/userInfo/userApiSlice';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Orders from './pages/Orders';
import ProductsDetails from './pages/ProductsDetails';
import Shop from './pages/Shop';
import TrackOrder from './pages/TrackOrder';
function App() {
  const token = JSON.parse(localStorage.getItem("token"));




const {data:userData,isLoading,error,isSuccess}=useGetUserQuery(undefined,{ skip: !token });

const {data:cartInfo,isLoading:cartLoading}=useGetCartQuery(undefined,{ skip: !userData?.info
?.email});


  return (
    <>
     <Toaster />
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" key={1} element={<Shop/>} />
      <Route path="/shop/:id"  key={2}  element={<Shop/>} />
      <Route path="/order" element={<Orders/>} />
      <Route path="/order/:id" element={<TrackOrder/>} />
      <Route path="/products/:id" element={<ProductsDetails/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    <Footer/>
     {/* <Layout/> */}
    </>
  );
}

export default App;
