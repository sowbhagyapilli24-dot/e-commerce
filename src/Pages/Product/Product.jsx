import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Product.css'

function Product() {
let [products, setProducts] = useState([])

function fetchData() {
fetch('https://fakestoreapi.com/products')
.then((res) => {
return res.json()
})
.then((data) => {
setProducts(data)
})
}

useEffect(() => {
fetchData()
}, [])

return ( <div className="product-page"> <div className="product-heading"> <p>OUR COLLECTION</p> <h1>All Products</h1> <span>Explore our collection of quality products.</span> </div>

  <div className="product">
    {
      products.map((prod) => {
        return (
          <ProductCard
            key={prod.id}
            title={prod.title}
            image={prod.image}
            rate={prod.rating.rate}
          />
        )
      })
    }
  </div>
</div>

)
}

export default Product
