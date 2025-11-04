import { useState, useEffect } from "react";
import "./HeroSlider.css";

const slides = [
  {
    id: 1,
    image: "/instaanimal/images/smallruminant.jpg",
    title: "Nurturing Healthier Possibilities, Every Day",
    category: "Small Ruminant",
  },
  {
    id: 2,
    image: "/instaanimal/images/ruminant.jpg",
    title: "Enhancing Dairy & Livestock Wellness",
    category: "Ruminant",
  },
  {
    id: 3,
    image: "/instaanimal/images/pet.jpg",
    title: "Caring for Pets with Innovation",
    category: "Pet",
  },
  {
    id: 4,
    image: "/instaanimal/images/poultry.jpg",
    title: "Improving Poultry Productivity",
    category: "Poultry",
  },
  {
    id: 5,
    image: "/instaanimal/images/aquatic.jpg",
    title: "Supporting Sustainable Aquaculture",
    category: "Aquatic",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (index) => setCurrent(index);

  return (
    <section className="hero-slider">
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className="overlay">
          <h2 className="slide-title">{slides[current].title}</h2>
        </div>
      </div>

      <div className="categories">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`category ${current === index ? "active" : ""}`}
            onClick={() => handleSelect(index)}
          >
            <div className="icon-box">
              <img
                src={slide.image}
                alt={slide.category}
                className="category-img"
              />
            </div>
            <p>{slide.category.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
