// components/Hero.js
const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center" 
      style={{
        backgroundImage:
          "url('/cons.jpeg')", // Replace with your background image URL
      }} m w
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl font-bold">We Are Professional Quality Services</h1>
        <p className="mt-4 text-lg">Building the Future with Precision and Expertise</p>
        <a
          href="#"
          className="bg-yellow-500 px-6 py-3 mt-6 text-black font-semibold hover:bg-yellow-600 transition-colors"
        >
          Discover More
        </a>
      </div>
    </section>
  );
};

export default Hero;
