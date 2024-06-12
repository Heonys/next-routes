import Image from "next/image";
import { Background3 } from "@/assets/images";
import * as S from "./style";

const ModalLeftSide = () => {
  return (
    <S.LeftContainer>
      <Image src={Background3} alt="background" />
      <S.LeftContents>
        <S.LeftTitle>
          <div>대한민국 No.1 공모전 대행</div>
          <div>라우드소싱</div>
        </S.LeftTitle>
        <S.LeftDescription>
          <div>20만 디자이너와 함께하는 공모전 전문 라우드소싱에서</div>
          <div>성공적인 공모전 대행을 경험하세요</div>
        </S.LeftDescription>
      </S.LeftContents>
    </S.LeftContainer>
  );
};

export default ModalLeftSide;
