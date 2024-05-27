const Header = () => {
  return (
    <header className="sticky bg-my-color z-20">
      <div className="container-style flex justify-between items-center">
        <div className="flex items-center">
          <div className="p-6"></div>
          <nav className="hidden lg:flex"></nav>
          <img className="rounded-xl" src={`/images/${Logo}.png`} alt="Logo" />
        </div>
        <div className="flex pr-2 lg:pr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="32"
            className="p-2 inline-block lg:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
