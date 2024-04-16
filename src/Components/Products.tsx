import { PiShoppingCartLight } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { IState, changeBasket, setCurrentPage } from "../Store/category";
import Pagination from "./Pagination";
import { FC, useState } from "react";
import { Idata } from "../Helper/functions";
 export interface Iprops{
  data:Idata[]
}
 export interface Iproduct{
  id:number
 }

const Products:FC<Iprops>=({ data })=> {
  const cardAddActive = useSelector((state:{category:IState}) => state.category.cartAddActive);
  const basket = useSelector((state:{category:IState}) => state.category.basket);
  const category = useSelector((state:{category:IState})=>state.category.category)
  const dispatch = useDispatch();

  const addToBasket = (product:Iproduct) => {
    const index = basket.findIndex((item) => item.id === product.id);
    
    if (index == -1) {
      dispatch(changeBasket({...product, amount: 1}));
    } else {
      const changeItemQuantity = [...basket];
      changeItemQuantity[index] = {
        ...changeItemQuantity[index],
        amount: changeItemQuantity[index].amount + 1,
      };
      dispatch(changeBasket(changeItemQuantity));
    }
  };
const total = useSelector((state:{category:IState})=>state.category.total)
const itemsPerPage = 12;
const pageCount = Math.ceil(total/itemsPerPage)
// console.log(totalPages);
const pages = Array.from({length:pageCount}, (_, index)=>index+1);
// console.log(pages);
const goToPage = (pageNum:number)=>{
  dispatch(setCurrentPage(pageNum))
}
// console.log(data);

const [filter, setFilter] =useState('sortbyprice')
const [sortedProducts, setSortedProducts] = useState(data);

interface Ievent{
  target:{
    value:string
  }
}

const changeFilter = (e:Ievent)=>{
  const value:string = e.target.value;
  // console.log(value);
  
  setFilter(value);
  if (value==='lowtohigh') {
    const sorted = data.slice().sort((a,b)=>a.price - b.price)
    setSortedProducts(sorted)
  } else if (value==='hightolow') {
    const sorted = data.slice().sort((a,b)=>b.price - a.price)
    setSortedProducts(sorted)
  } else if (value==='ratelowtohigh') {
    const sorted = data.slice().sort((a,b)=>a.rating - b.rating)
    setSortedProducts(sorted)
  } else if (value==='sortbyname'){
    const sorted = data.slice().sort((a,b)=>a.title.localeCompare(b.title))
    setSortedProducts(sorted)
  }
  else  {
    const sorted = data.slice().sort((a,b)=>b.rating - a.rating)
    setSortedProducts(sorted)
  } 
}

/* const filterProductByName = (data:Idata, category:string)=>{
  const filterProductName:string[] = []
  data?.forEach(product => {
    if (product.category !==category) {
      filterProductName.push(product.category)
    }

  });
  return filterProductName
}
 */
  return (
    <div className="products">
      {
        
<h1 className="products__title">{category ? 'Products' : 'All'}</h1>
       
      }
      
      <div className="products__sort">
        <select value={filter}  className="products__sort-name" onChange={changeFilter} >
          <option value="" disabled >Sort by name</option>
          <option value="sortbyname">Sort item by name</option>
        </select>
       <select value={filter} className="products__sort-price" onChange={changeFilter}>
        <option disabled value='sortbyprice'  className="products__sort-price">Sort by Price</option>
        <option value="lowtohigh">From low to high</option>
        <option value="hightolow">From high to low</option>
        
       </select>
       <select value={filter} className="products__sort-rate" onChange={changeFilter} >
        
        <option   value='sortbyrate' >Sort by Rate</option>
        <option value="ratelowtohigh">From low to high</option>
        <option value="ratehightolow">From high to low</option>
       
       </select>
      </div>
      <ul className="products__box">
        {sortedProducts.map((product:Idata) => (
          <li key={product.id} className="products__card">
            <Link to={`/products/${product.id}`} className="products__bg">
              <img src={product.images[0]} alt="" className="products__img" />
              <div className="products__selected">
                <IoIosHeartEmpty />
              </div>
            </Link>
            <NavLink to={`/products/${product.id}`} className="products__name">
              {product.title}
            </NavLink>
            <p className="products__rate">{`Rate: ${product.rating} ⭐⭐⭐`}</p>
            <div className="products__buy">
              <p className="products__price">{`${product.price}$`}</p>
              <div className="products__basket">
                
               <PiShoppingCartLight key={product.id} className="products__cart" onClick={() => addToBasket(product)}  /> 
              
        
               </div>
              <div className={`products__cart-add ${cardAddActive ? "" : ""}`}>1</div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination goToPage={goToPage} pages={pages} />
    </div>
  );
}

export default Products;
