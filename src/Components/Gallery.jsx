// components/Gallery.js
const Gallery = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <img src="./cons.jpeg" alt="Building 1" className="w-full h-40 object-cover" />
          <img src="../app/Public/cons.jpeg" alt="Building 2" className="w-full h-40 object-cover" />
          <img src="https://via.placeholder.com/400" alt="Building 3" className="w-full h-40 object-cover" />
          <img src="https://via.placeholder.com/400" alt="Building 4" className="w-full h-40 object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
