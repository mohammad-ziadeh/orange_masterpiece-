import React from "react";
import "./styles/footer.css";
import { colors, styled } from "@mui/material";

export default function Footer() {
  return (
    <section className="mainBody">
      <br />
      <br />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>LMC</h3>
            <p>
              Join our growing community of learners and educators. Share
              insights, celebrate progress, and challenge yourself daily!
            </p>
          </div>

          <div className="footer-section">
            <h4>Navigate</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Why us</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
              <li>
                <a href="#">Link 4</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="social-media">
          <a href="#" className="fac">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="X">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-google"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </footer>
      <div className="copyright">
        &copy; 2025 Copyright: <a href="#">LMC</a>
      </div>
    </section>
  );
}
