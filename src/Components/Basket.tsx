import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegTrashCan } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { IState, changeBasket } from "../Store/category";

function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((state:{category:IState}) => state.category.basket);
    // console.log(basket);
    interface Iproduct{
      amount:number
    }
    
    const amountCount = (product:Iproduct, value:string) => {
        let newAmount:number =product.amount;
        if (value === '+') {
            newAmount = product.amount + 1;
        } else if (value === '-') {
            newAmount = product.amount - 1;
        }
        if (newAmount >= 0) {
            dispatch(changeBasket({ ...product, amount: newAmount }));
        }
    };


    const totalPrice = basket.reduce((total, item)=>{
      return total + (item.price * item.amount)
    }, 0);

   
    
  return (
    <div className="container">
      <div className="basket">
        <h2 className="basket__name">Basket</h2>
        <div className="basket__info">
        
          
          <div className="basket__left">
            <div className="basket__box">
            {basket.map((item) => (
                <div className="basket__card" key={item.id}>
                  <div className="basket__item">
                    <img src={item.images[1]} alt="" className="basket__item-img" />
                    <div className="basket__item-details">
                      <h2 className="basket__item-name">{item.title}</h2>
                      <div className="basket__item-btns">
                        <button className="basket__item-btn">
                          <IoIosHeartEmpty />
                          <p>Selected</p>
                        </button>
                        <button className="basket__item-btn" >
                          <FaRegTrashCan />
                          <p>Delete</p>
                        </button>
                      </div>
                      <div className="basket__item-count">
                      <p className="basket__item-price">{`${item.price}$`}</p>
                    <div className="basket__item-icons">
                      <p className="basket__item-minus" onClick={() => amountCount(item, '-')}>-</p>
                      <p className="basket__item-number">{item.amount}</p>
                      <p className="basket__item-plus" onClick={() => amountCount(item, '+')}>
                        +
                      </p>
                    </div>
                      </div>
                    </div>
                  </div>
                  <div className="basket__item-total">
                    <p className="basket__item-price">{`${item.price}$`}</p>
                    <div className="basket__item-icons">
                      <p className="basket__item-minus" onClick={() => amountCount(item, '-')}>-</p>
                      <p className="basket__item-number">{item.amount}</p>
                      <p className="basket__item-plus" onClick={() => amountCount(item, '+')}>
                        +
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="basket__right">
           
              <div className="basket__more">
              <p className="basket__title">Basket</p>
              <p className="basket__items"> {basket.length} items</p>
              <p className="basket__total-price">Total: {totalPrice}$</p>
              </div>
            

            
             
           
         
            <button className="basket__btn">Order</button>
            
          
          </div>
         

        </div>
      </div>
    </div>
  );
}

export default Basket;
