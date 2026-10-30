import React from 'react'
import './ProductCard.css'

function ProductCard({ title, image, rate }) {
return ( <div className="product-card"> 
<div className="product-image-box"> 
  <img src={image} alt={title} className="product-image" /> 
  </div>

  <h5>{title}</h5>

  <div className="product-rating">
    <span>★</span>
    <span>{rate}</span>
  </div>

  <button>View Details</button>
</div>

)
}

export default ProductCard
