"use client"

import { useState } from "react"
import "./Testimonials.css"

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Michael Thompson",
      position: "CEO, Thompson Enterprises",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      stars: 5,
      text: "Sanjana's expertise in corporate law saved our company from a complex legal dispute that could have cost us millions. Her strategic approach and attention to detail were instrumental in achieving a favorable settlement. I cannot recommend her services highly enough.",
      case: "Corporate Litigation",
    },
    {
      id: 2,
      name: "Jennifer Rodriguez",
      position: "Personal Injury Client",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      stars: 5,
      text: "After my accident, I was overwhelmed with medical bills and insurance claims. Sanjana not only secured a settlement that covered all my expenses but also provided compassionate guidance throughout the entire process. She truly cares about her clients' wellbeing.",
      case: "Personal Injury",
    },
    {
      id: 3,
      name: "David Wilson",
      position: "Former Employee at Global Tech",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      stars: 5,
      text: "When I faced workplace discrimination, Sanjana fought tirelessly for my rights. Her knowledge of employment law and dedication to justice resulted in not just compensation for me, but also important policy changes at my former workplace. She's a true advocate for workers' rights.",
      case: "Employment Discrimination",
    },
    {
      id: 4,
      name: "Rebecca Chen",
      position: "Family Law Client",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      stars: 5,
      text: "During my difficult divorce, Sanjana provided not just legal expertise but also emotional support. She protected my interests and helped negotiate a fair settlement while keeping the process as amicable as possible for the sake of our children. I'm forever grateful for her guidance.",
      case: "Family Law",
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
            className="btn btn-primary"
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
