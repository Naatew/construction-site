// components/MainServices.js
const MainServices = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Main Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Residential"
            description="We provide excellent residential services."
            imgUrl="https://via.placeholder.com/400"
          />
          <ServiceCard
            title="Commercial"
            description="Our commercial services meet modern standards."
            imgUrl="https://via.placeholder.com/400"
          />
          <ServiceCard
            title="Industrial"
            description="High-quality industrial construction."
            imgUrl="https://via.placeholder.com/400"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, imgUrl }) => {
  return (
    <div className="p-4 bg-white shadow-lg">
      <img src={imgUrl} alt={title} className="h-40 w-full object-cover mb-4" />
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default MainServices;
