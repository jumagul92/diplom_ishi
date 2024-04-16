import { FC } from "react"



interface Iprops{
  pages: number[],
  goToPage:(pageNum:number)=>void
}
const Pagination:FC<Iprops>=({ pages, goToPage })=> {
  



    
  return (
   <div className="pagination__list">
  {pages.map(page=>(
    // console.log(page)
    <button key={page} className="pagination__link" onClick={()=>goToPage(page)}>{page}</button>
  ))
  }

   </div>
  )
}

export default Pagination