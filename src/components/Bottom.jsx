const Bottom = () => {
  return (
    <div className="relative">
      <img className="p-2 w-[3300px]" src="/images/Middle.png" alt="Logo" />
      <img
        className="relative w-[3300px]"
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
        className="absolute top-80 right-0 w-[616px]"
        src="/images/how-to-img.png"
        alt="how-to-img"
      />
      <div className="absolute bottom-20">
        SEALANA 구매 방법... 위젯으로 구매: 지갑을 구매 위젯에 연결하고 SOL을
        사용하여 $SEAL을 구매하세요. SOL 전송을 통해 구매: 또는 탈중앙화 지갑에
        보유하고 있는 SOL을 다음 주소로 전송해서 구매할 수도 있습니다:
        DJ15ZYXqUNMYJ3hL7z4ciSaSFAw5cbos3YjGpdvwmF6c
      </div>
    </div>
  );
};
export default Bottom;
