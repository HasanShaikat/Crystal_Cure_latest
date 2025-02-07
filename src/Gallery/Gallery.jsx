
const Gallery = () => {
  return (
    <div className="container mx-auto my-6">
        <h1 className='text-red-800 font-bold text-2xl text-center pb-8'>Gallery</h1>
        <div className="grid md:grid-cols-3 justify-items-center gap-4">
          <img src="/public/images/IMG_20241216_124358.jpg" alt="" className="h-96"/>
          <img src="/public/images/IMG_20241216_124948.jpg" alt="" className="h-96"/>
          <img src="/public/images/IMG_20241216_125224.jpg" alt="" className="h-96"/>
        </div>
    </div>
  )
}

export default Gallery