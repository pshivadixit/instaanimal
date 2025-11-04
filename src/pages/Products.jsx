import React from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'


export default function Products(){
return (
<div className="container section">
<h2>All Products</h2>
<div className="products-grid">
{products.map(p => <ProductCard key={p.id} product={p} />)}
</div>
</div>
)
}