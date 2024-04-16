import { PiShoppingCartLight } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Slider from "./Slider";
import { FC } from "react";
import { Idata } from "../Helper/functions";


interface Iprops{
  data:Idata[]
}

const Product:FC<Iprops>=({ data })=> {
  const params = useParams();
  /* const getProduct= () => {
    return data.find((product) => product.id == params.id);
  }; */

  const paramsId = params.id ? parseInt(params.id) : undefined;
const getProduct = () => {
  if (paramsId !== undefined) {
    return data.find((product) => product.id === paramsId);
  } else {
    return undefined; 
  }
};

/* console.log(getProduct().images.map(element => {
  console.log(element);
  
})) */
  


  return (
    <div className="container">
    <div className="product">
      <div className="product__category">
        <Sidebar getProductCategory={()=>{}}/>
      </div>
      <div className="product__info">
        <div className="product__left">
          <div className="product__img">
          <Slider images = {getProduct()?.images || []}/>
          </div>
        </div>
        <div className="product__right">
          <div className="product__amount">
            <h2 className="product__name">{getProduct()?.title}</h2>
            <p className="product__price">{`${getProduct()?.price} $`}</p>
            <div className="product__addCart">
              <button className="product__cart">
                <PiShoppingCartLight className="product__icon" />
                <p className="product__addToBasket">Add to basket</p>
              </button>
              <p className="product__selected">
                <IoIosHeartEmpty className="product__heart" />
              </p>
            </div>
          </div>
          <div className="product__description">
            <h3 className="product__title">Description</h3>
            <p className="product__desc">{getProduct()?.description} </p>
            <a href="" className="product__link">
              Show more
            </a>
          </div>
          <div className="product__characteristics">
            <h3 className="product__title">Characteristics</h3>
            <div className="product__box">
              <div className="product__card">
                <p className="product__char">Rating</p>
                <p className="product__details">{`${getProduct()?.rating} ⭐⭐⭐ `}</p>
              </div>
              <div className="product__card">
                <p className="product__char">Stock</p>
                <p className="product__details">{`${getProduct()?.stock} pieces  `}</p>
              </div>
            </div>
          </div>
          <div className="product__reviews">
            <h3 className="product__title">Comments</h3>
            <p className="product__review">There are no comments yet</p>
            <a href="" className="product__link">
              Write comment
            </a>
          </div>
        </div>
      </div>
    </div>
   
    </div>
  );
}


export default Product;
