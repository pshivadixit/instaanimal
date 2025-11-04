import React from "react";
import "./CompanyInfoSection.css";

export default function CompanyInfoSection() {
  return (
    <section className="company-info">
      <div className="container company-grid">
        <div className="company-block">
          <h3>Corporate office</h3>
          <p>
            Corporate House, Near Sola Bridge,<br />
            S.G. Highway, Thaltej, Ahmedabad - 380054.<br />
            Gujarat, India.
          </p>
          <p>
            +91 796157 7000<br />
            <a href="mailto:iah@intaspharma.com">iah@intaspharma.com</a>
          </p>
        </div>

        <div className="company-block">
          <h3>Quick links</h3>
          <ul>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Manufacturing</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Knowledge hub</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="company-block">
          <h3>Useful links</h3>
          <ul>
            <li><a href="#">Mission</a></li>
            <li><a href="#">Vision</a></li>
            <li><a href="#">Values</a></li>
            <li><a href="#">Scientific Initiative</a></li>
            <li><a href="#">Our Presence</a></li>
            <li><a href="#">Award & Accolades</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        <div className="company-block">
          <h3>Follow us</h3>
          <div className="socials">
            <button><i className="fab fa-apple"></i></button>
            <button><i className="fab fa-android"></i></button>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright © Intas Pharmaceuticals</p>
      </div>
    </section>
  );
}
