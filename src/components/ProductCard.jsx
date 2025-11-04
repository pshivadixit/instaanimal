import React from 'react'


export default function ProductCard({ product }){
return (
<article className="product-card">
<img src={product.image} alt={product.name} />
<h4>{product.name}</h4>
<p className="short-desc">{product.short}</p>
<a className="btn small" href="#">View details</a>
</article>
)
}