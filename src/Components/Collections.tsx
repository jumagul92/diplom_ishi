import { Outlet } from "react-router-dom";
import Products, {  } from "./Products";

import Sidebar from "./Sidebar";
import { FC } from "react";
import { Idata } from "../Helper/functions";

interface Iprops{
  data:Idata[],
  getProductCategory:(category:string)=>void
}

const Collections:FC<Iprops>=({ data, getProductCategory  })=> {

  return (
    <div className="container">
      <div className="collections">
        <Sidebar getProductCategory={getProductCategory}  />
        <Outlet/>
        <Products data={data} />
      </div>
    </div>
  );
}

export default Collections;
