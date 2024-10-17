



const ContactForm = () => {
    return (
      <section className="py-16 ">
        <div className="container mx-auto ">
          <h2 className="text-center text-2xl font-bold mb-8">Contact Us</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded"/>
            <input type="email" placeholder="Email" className="w-full p-2 border rounded"/>
            <input type="text" placeholder="Phone" className="w-full p-2 border rounded"/>
            <textarea placeholder="Message" className="w-full p-2 border rounded"></textarea>
            <button type="submit" className="bg-yellow-500 w-full py-2 text-white font-bold">Submit</button>
          </form>
        </div>
      </section>
    );
  }
  export default ContactForm;
  
