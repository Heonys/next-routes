import Image from "next/image";
import { ArrowRight, Icon5 } from "@/assets/images";
import TopButton from "./TopButton";
import * as S from "./style";

const Footer = () => {
  return (
    <S.CTAContainer>
      <TopButton />
      <S.LinkHeader>
        <Image src={Icon5} alt="imoji" />
        <S.LinkText>
          오직 이 비밀링크에서만!
          <S.LinkTextBlue> 즉시 할인 쿠폰으로 저렴하게 </S.LinkTextBlue>
          시안을 받아보세요
        </S.LinkText>
      </S.LinkHeader>
      <S.LinkButton href="/landing/modal" scroll={false}>
        지금 바로 상담받기
        <ArrowRight fill="white" />
      </S.LinkButton>
    </S.CTAContainer>
  );
};

export default Footer;
