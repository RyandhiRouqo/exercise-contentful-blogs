const Navbar = () => {
  return (
    <>
      <nav className="sticky inset-0 z-50 bg-black flex justify-between items-center w-full mx-auto min-h-14">
        <div className="ml-10">
          <p className="font-bold text-blue-500 font-sans">CodeHub</p>
        </div>
        <div className="mr-10">
          <ul className="flex items-center gap-[4vw] font-semibold">
            <li>
              <a className="text-white hover:text-blue-500" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-white hover:text-blue-500" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-white hover:text-blue-500" href="#">
                Contact
              </a>
            </li>            
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
