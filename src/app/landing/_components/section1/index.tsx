import Image from "next/image";
import { Background1 } from "@/assets/images";
import * as S from "./style";

const Section1 = () => {
  return (
    <S.Section>
      <Image src={Background1} alt="background" fill />
      <S.Container>
        <S.Header>
          <S.Content>98.7%의 만족도</S.Content>
          <S.Content>1,3000,000개의 디자인</S.Content>
          <S.Content>30,000건의 의뢰</S.Content>
        </S.Header>

        <S.Intro>
          <S.Header2>대한민국 1등</S.Header2>
          <S.Header1>디자이너 플랫폼 라우드소싱</S.Header1>
        </S.Intro>
      </S.Container>
    </S.Section>
  );
};

export default Section1;
