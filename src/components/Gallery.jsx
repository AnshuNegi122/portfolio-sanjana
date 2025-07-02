"use client"

import { useState, useEffect, useRef } from "react"
import "./Gallery.css"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [showThumbnails, setShowThumbnails] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [rotation, setRotation] = useState(0)
  const intervalRef = useRef(null)

  // Gallery images 
  const images = [
    {
      src: "/images/one.jpg",
      thumbnail: "/images/one.jpg",
      title: "Courthouse & Justice",
      description: "Representing clients in courtrooms with excellence and integrity",
      photographer: "Sanjana Bisht",
      location: "Gurgaon, India",
    },
    {
      src: "/images/two.jpg",
      thumbnail: "/images/two.jpg",
      title: "Modern Law Office Interior",
      description: "Contemporary workspace with state-of-the-art facilities",
      photographer: "Legal Studio",
      location: "Delhi, India",
    },
    {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      title: "Legal Documentation & Research",
      description: "Comprehensive legal research and documentation services",
      photographer: "Professional Team",
      location: "Law Library",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      title: "Professional Legal Team",
      description: "Experienced legal professionals dedicated to your success",
      photographer: "Corporate Photography",
      location: "Business District",
    },
    {
      src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      title: "Courthouse & Justice",
      description: "Representing clients in courtrooms with excellence and integrity",
      photographer: "Justice Photography",
      location: "Supreme Court",
    },
    {
      src: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      title: "Legal Library & Resources",
      description: "Extensive legal library with comprehensive research resources",
      photographer: "Academic Team",
      location: "University Library",
    },
    {
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      title: "Strategic Business Meetings",
      description: "Collaborative approach to complex legal challenges",
      photographer: "Business Photography",
      location: "Conference Room",
    },
    {
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      title: "Contract & Agreement Services",
      description: "Professional contract drafting and legal agreement services",
      photographer: "Legal Documentation",
      location: "Office Suite",
    },
    {
      src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      title: "Legal Consultation",
      description: "One-on-one legal consultation services",
      photographer: "Client Services",
      location: "Consultation Room",
    },
    {
      src: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      title: "Court Proceedings",
      description: "Professional representation in legal proceedings",
      photographer: "Court Photography",
      location: "District Court",
    },
    {
      src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      title: "Legal Research",
      description: "Thorough legal research and case preparation",
      photographer: "Research Team",
      location: "Research Center",
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      thumbnail:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      title: "Professional Environment",
      description: "Modern and professional legal workspace",
      photographer: "Workspace Design",
      location: "Corporate Office",
    },
  ]

  const openModal = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
    setIsModalOpen(true)
    setZoomLevel(1)
    setRotation(0)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
    setIsPlaying(false)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    document.body.style.overflow = "unset"
  }

  const navigateModal = (direction) => {
    let newIndex
    if (direction === "next") {
      newIndex = (currentIndex + 1) % images.length
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length
    }

    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
    setZoomLevel(1)
    setRotation(0)
  }

  const goToImage = (index) => {
    setCurrentIndex(index)
    setSelectedImage(images[index])
    setZoomLevel(1)
    setRotation(0)
  }

  const toggleSlideshow = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current)
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
      intervalRef.current = setInterval(() => {
        navigateModal("next")
      }, 3000)
    }
  }

  const handleZoom = (direction) => {
    if (direction === "in") {
      setZoomLevel((prev) => Math.min(prev + 0.25, 3))
    } else {
      setZoomLevel((prev) => Math.max(prev - 0.25, 0.5))
    }
  }

  const handleRotate = (direction) => {
    if (direction === "left") {
      setRotation((prev) => prev - 90)
    } else {
      setRotation((prev) => prev + 90)
    }
  }

  const resetTransforms = () => {
    setZoomLevel(1)
    setRotation(0)
  }

  const downloadImage = () => {
    const link = document.createElement("a")
    link.href = selectedImage.src
    link.download = `${selectedImage.title}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const shareImage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: selectedImage.title,
          text: selectedImage.description,
          url: selectedImage.src,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(selectedImage.src)
      alert("Image URL copied to clipboard!")
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isModalOpen) return

      switch (event.key) {
        case "ArrowLeft":
          navigateModal("prev")
          break
        case "ArrowRight":
          navigateModal("next")
          break
        case "Escape":
          closeModal()
          break
        case " ":
          event.preventDefault()
          toggleSlideshow()
          break
        case "r":
        case "R":
          handleRotate("right")
          break
        case "+":
        case "=":
          handleZoom("in")
          break
        case "-":
          handleZoom("out")
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen, currentIndex])

  // Cleanup slideshow on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-camera"></i>
            <span>Professional Gallery</span>
          </div>
          <h2>Visual Excellence</h2>
          <p>Discover our professional environment through a curated collection of high-quality imagery</p>
        </div>

        {/* Enhanced Gallery Grid */}
        <div className="gallery-showcase">
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div
                key={index}
                className="gallery-card"
                onClick={() => openModal(image, index)}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="card-image-container">
                  <img src={image.src || "/placeholder.svg"} alt={image.title} />
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <div className="card-info">
                        <h3>{image.title}</h3>
                        <p>{image.description}</p>
                        <div className="card-meta">
                          <span className="photographer">
                            <i className="fas fa-camera"></i>
                            {image.photographer}
                          </span>
                          <span className="location">
                            <i className="fas fa-map-marker-alt"></i>
                            {image.location}
                          </span>
                        </div>
                      </div>
                      <div className="view-button">
                        <i className="fas fa-expand"></i>
                        <span>View Full Size</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Fullscreen Modal with Comprehensive Controls */}
      {isModalOpen && selectedImage && (
        <div className="fullscreen-modal">
          {/* Image Counter */}
          <div className="image-counter">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Enhanced Top Control Toolbar */}
          <div className="control-toolbar">
            <div className="control-group">
              <button className="control-btn" onClick={shareImage} title="Share Image">
                <i className="fas fa-share-alt"></i>
              </button>
              <button className="control-btn" onClick={() => handleRotate("left")} title="Rotate Left">
                <i className="fas fa-undo"></i>
              </button>
              <button className="control-btn" onClick={() => handleRotate("right")} title="Rotate Right">
                <i className="fas fa-redo"></i>
              </button>
            </div>

            <div className="control-group">
              <button className="control-btn" onClick={() => navigateModal("prev")} title="Previous Image">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="control-btn" onClick={() => navigateModal("next")} title="Next Image">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            <div className="control-group">
              <button className="control-btn" onClick={resetTransforms} title="Reset View">
                <i className="fas fa-expand-arrows-alt"></i>
              </button>
              <button
                className={`control-btn ${isPlaying ? "active" : ""}`}
                onClick={toggleSlideshow}
                title={isPlaying ? "Pause Slideshow" : "Start Slideshow"}
              >
                <i className={`fas fa-${isPlaying ? "pause" : "play"}`}></i>
              </button>
            </div>

            <div className="control-group">
              <button className="control-btn" onClick={() => handleZoom("out")} title="Zoom Out">
                <i className="fas fa-search-minus"></i>
              </button>
              <button className="control-btn zoom-indicator" title={`Zoom: ${Math.round(zoomLevel * 100)}%`}>
                {Math.round(zoomLevel * 100)}%
              </button>
              <button className="control-btn" onClick={() => handleZoom("in")} title="Zoom In">
                <i className="fas fa-search-plus"></i>
              </button>
            </div>

            <div className="control-group">
              <button className="control-btn" onClick={downloadImage} title="Download Image">
                <i className="fas fa-download"></i>
              </button>
              <button className="control-btn close-btn" onClick={closeModal} title="Close Gallery">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          {/* Thumbnail Toggle */}
          <button
            className="thumbnail-toggle"
            onClick={() => setShowThumbnails(!showThumbnails)}
            title={showThumbnails ? "Hide Thumbnails" : "Show Thumbnails"}
          >
            <i className={`fas fa-${showThumbnails ? "eye-slash" : "eye"}`}></i>
          </button>

          {/* Navigation Arrows */}
          <button
            className="modal-nav modal-nav-prev"
            onClick={() => navigateModal("prev")}
            aria-label="Previous image"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button className="modal-nav modal-nav-next" onClick={() => navigateModal("next")} aria-label="Next image">
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Main Image Container */}
          <div className="modal-image-container">
            {isLoading && (
              <div className="modal-loading">
                <div className="loading-spinner"></div>
              </div>
            )}
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.title}
              className="modal-image"
              style={{
                transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                transition: "transform 0.3s ease",
              }}
              onLoad={() => setIsLoading(false)}
              onLoadStart={() => setIsLoading(true)}
            />
          </div>

          {/* Image Information */}
          <div className="image-info-panel">
            <div className="info-content">
              <h3>Photo by - {selectedImage.photographer}</h3>
              <p>
                Location - {selectedImage.location} <span className="separator">•</span> {selectedImage.description}
              </p>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className={`thumbnail-navigation ${showThumbnails ? "visible" : "hidden"}`}>
            <div className="thumbnail-container">
              <div className="thumbnail-scroll">
                {images.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail-item ${index === currentIndex ? "active" : ""}`}
                    onClick={() => goToImage(index)}
                    aria-label={`View ${image.title}`}
                  >
                    <img src={image.thumbnail || image.src || "/placeholder.svg"} alt={image.title} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
