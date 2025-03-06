const Gallery = () => {
    const images = [
      '/images/IMG_20241216_124358.jpg',
      '/images/IMG_20241216_124948.jpg',
      '/images/IMG_20241216_124358.jpg',
      '/images/IMG_20241216_125224.jpg',
    ];
  
    return (
      <div className="container mx-auto p-6" id="Gallery">
        <h2 className="text-3xl font-semibold text-center text-red-900 mb-2">Gallery</h2>
        <p className="text-center mb-8">Our Experties Working Time</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-xs">
          {images.map((src, index) => (
            <div key={index} className="relative overflow-hidden size-auto rounded-lg shadow-lg"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;