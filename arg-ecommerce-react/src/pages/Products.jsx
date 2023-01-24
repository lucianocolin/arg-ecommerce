import React from 'react';
//css
import "../css/Products.css";
//imgs
import categoriesProductsLogo from "../imgs/productos-camisetas-logo.jpg";

const Products = () => {
  return (<>
    <h2 className='products-categories-title'>CATEGORIAS</h2>
    <div className='products-categories-cards-container'>
      <div className='products-categories-card'>
        <img src={categoriesProductsLogo} alt="" />
        <p>CAMISETAS</p>
      </div>
    </div>
    <h2 className='all-products-title'>TODOS LOS PRODUCTOS</h2>
    <div className='all-products-container'>
      <div className='product-card'></div>
    </div>
  </>
  )
}

export default Products