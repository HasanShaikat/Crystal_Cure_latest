import React, { useState } from "react";

const Gallery = () => {
    const images = [
      '/images/gellary-1.jpg',
      '/images/gellary-3.jpg',
      '/images/gellary-4.jpg',
      '/images/gellary-5.jpg',
      
    ];
  
    const [selectedImage, setSelectedImage] = useState(null);
      return (
        <div className="container mx-auto p-6" id="Gallery">
          <h2 className="text-3xl font-semibold text-center text-red-900 mb-2">Gallery</h2>
           <p className="text-center mb-8">Our Experties Working Time</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index}`}
                className="rounded-lg shadow cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => setSelectedImage(src)}
              />
            ))}
          </div>
    
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt="Enlarged"
                className="max-w-full max-h-full rounded"
              />
            </div>
          )}
        </div>
      );
    };
  
  export default Gallery;