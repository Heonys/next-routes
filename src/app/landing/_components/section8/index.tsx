import Image from "next/image";
import { Background2 } from "@/assets/images";
import * as S from "./style";

const Section8 = () => {
  return (
    <>
      <S.Container>
        <Image src={Background2} alt="backgorund2" fill />
        <S.Intro>
          <S.Header>
            <S.HeaderText>내 상황에 꼭 맞는</S.HeaderText>
            <S.HeaderText>의뢰 방식을 제안받아 보세요</S.HeaderText>
          </S.Header>
          <S.Description>
            <S.DescriptionText>담당 매니저가 영업일 기준</S.DescriptionText>
            <S.DescriptionText>1일 내에 연락드립니다.</S.DescriptionText>
          </S.Description>
          <S.LinkButton href="/landing/modal" scroll={false}>
            간편 상담받기
          </S.LinkButton>
        </S.Intro>
      </S.Container>
    </>
  );
};

export default Section8;
