"use client"

import { useState } from "react"
import "./Testimonials.css"

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Khanna",
      position: "Managing Director, Khanna Exports",
      image:
        "https://upgnorthamerica.com/wp-content/uploads/2023/06/Indian-Hindis-in-Greater-Houston.jpg",
      stars: 5,
      text: "Sanjana's expertise in corporate law and her strategic insights have been invaluable for Khanna Exports. She handled our complex merger with utmost professionalism and ensured all compliance hurdles were cleared efficiently. Her attention to detail is truly commendable.",
      case: "Corporate Advisory",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Entrepreneur",
      image:
        "https://upgnorthamerica.com/wp-content/uploads/2023/04/INDIAN-HINDI-IN-NORTH-AMERICA.jpg",
      stars: 5,
      text: "After my unfortunate accident, I was completely lost with the legal procedures. Sanjana took over everything and fought my case with great dedication. The settlement she secured far exceeded my expectations. More importantly, she was always available to answer my concerns.",
      case: "Personal Injury Claim",
    },
    {
      id: 3,
      name: "Amit Verma",
      position: "HR Lead, Tech Spark Solutions",
      image:
        "https://upgnorthamerica.com/wp-content/uploads/2023/04/Indian-Hindi-in-San-Francisco-2.jpg",
      stars: 5,
      text: "We engaged Sanjana for our company's POSH training and employment contract revisions. Her deep understanding of labor laws and her ability to simplify complex legal terminologies for our employees was impressive. She is now our go-to legal consultant.",
      case: "Employment Law & POSH",
    },
    {
      id: 4,
      name: "Sunita Iyer",
      position: "Client",
      image:
        "https://img.freepik.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg",
      stars: 5,
      text: "Navigating through a difficult family dispute was emotionally draining, but Sanjana's compassionate yet firm approach made a world of difference. She protected my rights and guided me through every step of the mediation process. I am extremely grateful.",
      case: "Family Law & Disputes",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setActiveIndex(index)
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-star"></i>
            <span>Client Testimonials</span>
          </div>
          <h2>What My Clients Say</h2>
          <p>Read about the experiences of individuals and businesses I've had the privilege to represent</p>
        </div>

        <div className="testimonials-wrapper">
          <div className="testimonials-carousel">
            <button className="carousel-arrow prev" onClick={prevTestimonial} aria-label="Previous testimonial">
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="testimonials-container">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-card ${index === activeIndex ? "active" : ""}`}
                  style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
                >
                  <div className="testimonial-content">
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fas fa-star ${i < testimonial.stars ? "filled" : ""}`}></i>
                      ))}
                    </div>
                    <div className="testimonial-case">
                      <span className="case-badge">
                        <i className="fas fa-gavel"></i>
                        {testimonial.case}
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-arrow next" onClick={nextTestimonial} aria-label="Next testimonial">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeIndex ? "active" : ""}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="testimonial-cta">
          <h3>Ready to Discuss Your Legal Needs?</h3>
          <p>Schedule a consultation to see how I can help with your case</p>
          <button
            className="btn btn-secondary"
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          >
            <i className="fas fa-calendar-check"></i>
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
