const Navbar = () => {
    return (
      <nav className="bg-black text-white p-4 sticky top-0 z-20 ">
        <div className="container mx-auto flex justify-between items-center m-auto ">
          <div className="text-yellow-500 font-bold text-xl">Build Care</div>
          <ul className="flex space-x-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <a href="#" className="bg-yellow-500 px-4 py-2 rounded">Get A Quote</a>
        </div>
      </nav>
    );
  };
  export default Navbar;
  