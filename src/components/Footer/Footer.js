import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="text-center">
      <div className="container pt-3">
        <section className="mb-3">
          <a href="https://ar.linkedin.com/in/coderman/" className="btn btn-link btn-floating btn-lg text-dark m-1" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin" />
          </a>

          <a href="https://github.com/Javier-Olivieri/" className="btn btn-link btn-floating btn-lg text-dark m-1" target="_blank" rel="noreferrer">
            <i className="fab fa-github" />
          </a>
        </section>
      </div>
      <div className="text-center p-3">Design by Javier Olivieri - 2022</div>
    </footer>
  );
};

export default Footer;