import ContentsCard from "./ContentsCard";
import { Icon1, Icon2, Icon3, Icon4 } from "@/assets/images";
import * as S from "./style";

const contents = [
  { id: 1, image: Icon1, title: "22만", description: "활동 창작자 수" },
  { id: 2, image: Icon2, title: "3만", description: "개최 콘테스트 수" },
  { id: 3, image: Icon3, title: "98.7%", description: "의뢰자 만족 비율" },
  { id: 4, image: Icon4, title: "80%", description: "국내 디자이너 중 라우드소싱 회원" },
];

const Section4 = () => {
  return (
    <S.Container>
      <S.FlexBox>
        {contents.map(({ id, image, title, description }) => {
          return <ContentsCard key={id} image={image} title={title} description={description} />;
        })}
      </S.FlexBox>
    </S.Container>
  );
};

export default Section4;
