import Contacts from "./Components/Contacts";

import Loading from "./Components/Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./Components/HomeLayout";
import Payment from "./Components/Payment";
import Delivery from "./Components/Delivery";
import ExchangeRefund from "./Components/ExchangeRefund";
import AboutUs from "./Components/AboutUs";
import News from "./Components/News";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Basket from "./Components/Basket";
import Collections from "./Components/Collections";

import axios from "axios";
import { Idata } from "./Helper/functions";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { IState,  setCategory } from "./Store/category";



function App() {
    const getProduct:(currentPage:number, category:string)=>Promise<Idata[]> =async()=>{
    try {
        let response = await axios.get(`${category ? `https://dummyjson.com/products/category/${category}` : `https://dummyjson.com/products?limit=12&skip=${(currentPage-1)*12}&${total}`}`)
        return response.data.products
        
    } catch (error) {
        throw new Error("Failed to catch data");
    }
}
 const currentPage = useSelector((state:{category:IState})=>state.category.currentPage);
const total = useSelector((state:{category:IState})=>state.category.total);
const category = useSelector((state:{category:IState})=>state.category.category)
const dispatch = useDispatch();


 const getProductByCategory = (category:string)=>{
  dispatch(setCategory(category))
getProduct(1, category)
}


  const { data, isLoading, isError } = useQuery(['users', currentPage, category], () => getProduct(currentPage, category));
  // console.log(data);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <h1>Error fetching users</h1>;
  }

  // console.log(data);
  
  if (data) {
   
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} >
          <Route path="/" element={<Collections data={data} getProductCategory ={getProductByCategory}/>}/>
        <Route path="/payment" element={<Payment />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/exchangerefund" element={<ExchangeRefund />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products" element={<Products data={data} />} />
     
        <Route path="/products/:id" element={<Product data={data} />} />
        
        <Route path="/basket" element={<Basket />} />
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}
}

export default App;
