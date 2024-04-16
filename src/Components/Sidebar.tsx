import axios from "axios";
import { useQuery } from "react-query";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { setCategoryName } from "../Store/category";
import { Idata } from "../Helper/functions";
import { FC } from "react";

interface Iprops{
  getProductCategory:(category:string)=>void
}
 const Sidebar:FC<Iprops>=({  getProductCategory })=> {
 
 const getCategoryName:()=>Promise<Idata> = async()=>{
  try {
    let response = await axios.get('https://dummyjson.com/products/categories')
    return response.data
  } catch (error) {
    throw new Error("Failed to catch data");
    
  }
}
// console.log(getCategoryName());
const {data, isError, isLoading} = useQuery('categoryName', () => getCategoryName())
// console.log(data);
if (isLoading) {
  return <Loading />;
}
if (isError) {
  return <h1>Error fetching users</h1>;
}

const dispatch = useDispatch();
const obj = dispatch(setCategoryName(data))
// console.log(obj.payload);
const categories:string[] = obj.payload 

  return (
    <ul className="sidebar__list">
      {
        categories.map(category=>(
          <li className="sidebar__link" key={category} onClick={()=>getProductCategory(category)}>{category}</li>
        ))
      }
    </ul>
  );
}

export default Sidebar;
