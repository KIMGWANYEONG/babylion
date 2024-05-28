const Bottom = () => {
  return (
    <div className="relative">
      <img
        className="bg-[#DFDCC4] p-2 w-[3300px]"
        src="/images/Middle.png"
        alt="Middle"
      />
      <img
        className="relative w-full y-full"
        src="/images/bottomBg.svg"
        alt="bottomBg"
      />
      <div>
        <img
          className="absolute bottom-0 left-20 w-[477px]"
          src="/images/how-to-bottom.png"
          alt="bottomAdd"
        />
      </div>
      <img
        className="absolute top-80 mt-[880px] right-10 w-[616px]"
        src="/images/how-to-img.png"
        alt="how-to-img"
      />
      <div className="absolute bottom-[400px] ml-4 text-white font-['HUFairy170'] text-4xl">
        SEALANA 구매 방법...
      </div>
      <div className="absolute bottom-[350px] ml-4 text-white font-['HUFairy170'] text-2xl">
        위젯으로 구매: 지갑을 구매 위젯에 연결하고 SOL을 사용하여
        <div className="absolute bottom-[350px] ml-4 text-white font-['HUFairy170'] text-2xl"></div>
        $SEAL을 구매하세요.
      </div>
      <div className="absolute bottom-[300px] ml-4 text-white font-['HUFairy170'] text-2xl">
        SOL 전송을 통해 구매: 또는 탈중앙화 지갑에 보유하고 있는 SOL을 다음
        주소로 전송해서 구매할 수도 있습니다
        <div className="absolute bottom-[200px] ml-4 text-white font-['HUFairy170'] text-2xl"></div>
        DJ15ZYXqUNMYJ3hL7z4ciSaSFAw5cbos3YjGpdvwmF6c
      </div>
    </div>
  );
};
export default Bottom;
