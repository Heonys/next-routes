import { Image1, Image2, Image3 } from "@/assets/images";
import * as S from "./style";
import ContentsCard from "./ContentsCard";

const Section5 = () => {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>혁신적으로 줄인</S.HeaderText>
        <S.HeaderText>간단하고 쉬운 콘테스트 개최</S.HeaderText>
      </S.Header>
      <S.Flexbox>
        <ContentsCard image={Image1} step={1} title="의뢰서 작성하기" />
        <ContentsCard image={Image2} step={2} title="상금 결제하기" />
        <ContentsCard image={Image3} step={3} title="평균 26.7건 시안 받기" />
      </S.Flexbox>
    </S.Container>
  );
};

export default Section5;
