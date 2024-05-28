const Header = () => {
  return (
    <header className="relative bg-my-color h-[100px]">
      <img
        className="absolute flex items-end top-[55px] right-[150px] rounded-lg"
        src="/images/kr.svg"
        alt="kr"
      />
      <img
        className="absolute w-[180px] ml-10 mt-8"
        src="/images/logo.svg"
        alt="Logo"
      />
      <img
        className="absolute flex p-2 top-[40px] right-[90px] w-[50px]"
        src="/images/telegram.svg"
        alt="telegram"
      />

      <img
        className="absoulte flex items-end p-2 top-[40px] ml-[2470px] w-[50px]"
        src="/images/x.png"
        alt="x"
      />
      <div className="container-style flex justify-between items-center">
        <div className="flex items-center">
          <div className="p-6"></div>
          <nav className="hidden lg:flex"></nav>
        </div>
        <div class Name="">
          <button className="font-['HUFairy170'] text-3xl p-4">소개</button>
          <button className="font-['HUFairy170'] text-3xl p-4">구매방법</button>
        </div>
        <div className="bg-gray-900 w-[93px] text-white font-['HUFairy170'] text-2xl p-2 rounded-md mr-[200px] mb-[10px]">
          BUY NOW
        </div>
      </div>
    </header>
  );
};

export default Header;
