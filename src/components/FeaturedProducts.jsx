import React, { useEffect, useState } from "react";
import "./FeaturedProducts.css";

const products = [
  {
    id: 1,
    name: "Felicott",
    description: "Relieves itch | Soothes | Cleanses",
    image: "/images/pf1.jpg",
  },
  {
    id: 2,
    name: "ZooLac",
    description: "Restores the Eubiosis and Intestinal Health",
    image: "/images/pf2.jpg",
  },
  {
    id: 3,
    name: "BOVIHeal",
    description: "Nourish Wound - Flourish Healing",
    image: "/images/pf3.jpg",
  },
    {
    id: 4,
    name: "BOVIHeal",
    description: "Nourish Wound - Flourish Healing",
    image: "/images/pf4.jpg",
  },
    {
    id: 5,
    name: "BOVIHeal",
    description: "Nourish Wound - Flourish Healing",
    image: "/images/pf5.jpg",
  },
    {
    id: 6,
    name: "BOVIHeal",
    description: "Nourish Wound - Flourish Healing",
    image: "/images/pf6.jpg",
  },
    {
    id: 7,
    name: "BOVIHeal",
    description: "Nourish Wound - Flourish Healing",
    image: "/images/pf7.jpg",
  },
    {
    id: 8,
    name: "BOVIHeal",
    description: "Nourish Wound - Flourish Healing",
    image: "/images/pf8.jpg",
  },
    {
    id: 9,
    name: "BOVIHeal",
    description: "Nourish Wound - Flourish Healing",
    image: "/images/pf9.jpg",
  },
];

export default function FeaturedProducts() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="featured-section">
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="slider">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {products.map((product) => (
              <div className="slide" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="dots">
          {products.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
