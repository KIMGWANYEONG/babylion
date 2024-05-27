const Header = () => {
  return (
    <header className="sticky bg-my-color z-20">
      <img className="p-2 w-[130px]" src="/images/logo.svg" alt="Logo" />
      <div className="container-style flex justify-between items-center">
        <div className="flex items-center">
          <div className="p-6"></div>
          <nav className="hidden lg:flex"></nav>
        </div>
        <div>
          <button className="font-['HUFairy170'] text-2xl p-4">소개</button>
          <button className="font-['HUFairy170'] text-2xl p-4">구매방법</button>
        </div>
        <div className="font-['HUFairy170'] text-2xl p-1">BUY NOW</div>
      </div>
    </header>
  );
};

export default Header;
