import React from 'react';

const Gallery = () => {
  const images = [
    "img/portfolio/UKRAINE.jpg",
    "img/portfolio/UKRAINE.jpg",
    "img/portfolio/UKRAINE.jpg",
    "img/portfolio/UKRAINE.jpg",
    "img/portfolio/UKRAINE.jpg",
    "img/portfolio/UKRAINE.jpg",
    "img/portfolio/UKRAINE.jpg"
  ];
  return (
    <div className="w-full">
      {/* Banner */}
      <div
        style={{
          width: '100vw',
          height: '50vh',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
          alt="Banner"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <h1
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255, 0, 0, 0.7)',
            color: 'white',
            padding: '1rem 2rem',
            fontSize: '3rem',
            borderRadius: '8px',
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          }}
        >
          GALLERY
        </h1>
      </div>

      {/* Gallery Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          padding: '3rem 2rem',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Gallery  ${index + 1}`}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.03)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;