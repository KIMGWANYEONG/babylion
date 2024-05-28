const Header = () => {
  return (
    <header className="sticky bg-my-color z-20">
      <img className="p-2 w-[130px]" src="/images/logo.svg" alt="Logo" />
      <img
        className="flex items-end p-2 w-[30px]"
        src="/images/telegram.svg"
        alt="telegram"
      />
      <img
        className="flex items-end p-2 w-[30px]"
        src="/images/kr.svg"
        alt="kr"
      />
      <img
        className="flex items-end p-2 w-[30px]"
        src="/images/x.png"
        alt="x"
      />
      <div className="container-style flex justify-between items-center">
        <div className="flex items-center">
          <div className="p-6"></div>
          <nav className="hidden lg:flex"></nav>
        </div>
        <div>
          <button className="font-['HUFairy170'] text-2xl p-4">소개</button>
          <button className="font-['HUFairy170'] text-2xl p-4">구매방법</button>
        </div>
        <div className="bg-gray-900 w-[93px] text-white font-['HUFairy170'] text-2xl p-2 rounded-md mr-80 mb-6">
          BUY NOW
        </div>
      </div>
    </header>
  );
};

export default Header;
