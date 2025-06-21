"use client"

import { useState, useEffect } from "react"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <i className="fas fa-balance-scale"></i>
            </div>
            <div className="logo-text">
              <h2>Sanjana Bisht</h2>
              <span>Legal Advocate</span>
            </div>
          </div>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul>
              <li>
                <a href="#home" onClick={() => scrollToSection("home")}>
                  <i className="fas fa-home"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection("about")}>
                  <i className="fas fa-user"></i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => scrollToSection("services")}>
                  <i className="fas fa-briefcase"></i>
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#experience" onClick={() => scrollToSection("experience")}>
                  <i className="fas fa-trophy"></i>
                  <span>Experience</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={() => scrollToSection("testimonials")}>
                  <i className="fas fa-star"></i>
                  <span>Testimonials</span>
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection("contact")}>
                  <i className="fas fa-envelope"></i>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="#contact" className="contact-btn" onClick={() => scrollToSection("contact")}>
              <i className="fas fa-phone"></i>
              <span>Free Consultation</span>
            </a>
            <button
              className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
