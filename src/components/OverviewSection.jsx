import React from "react";
import "./OverviewSection.css";

const items = [
  {
    title: "Overview",
    icon: "https://cdn-icons-png.flaticon.com/512/64/64673.png",
    text: "INTAS is a leading, vertically integrated global pharmaceutical formulation development, manufacturing, and marketing company.",
    link: "#overview"
  },
  {
    title: "Vision",
    icon: "https://cdn-icons-png.flaticon.com/512/709/709612.png",
    text: "To continually set new benchmarks in global animal healthcare with the power of human expertise, innovative research and advanced technology.",
    link: "#vision"
  },
  {
    title: "Mission",
    icon: "https://cdn-icons-png.flaticon.com/512/1373/1373029.png",
    text: "Deliver a better way for owners to help their animals live the best life through access to innovations in preventive, therapeutic, and nutritional solutions.",
    link: "#mission"
  },
  {
    title: "Values",
    icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    text: "Create an environment that fosters creativity and openness to new ideas leading to advancement in skills, technology and processes.",
    link: "#values"
  },
];

export default function OverviewSection() {
  return (
    <section className="overview-section">
      <div className="container">
        <div className="overview-grid">
          {items.map((item, i) => (
            <div className="overview-card" key={i}>
              <img src={item.icon} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href={item.link} className="read-more">Read More &gt;&gt;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
