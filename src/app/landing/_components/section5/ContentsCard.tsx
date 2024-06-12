import Image, { StaticImageData } from "next/image";
import * as S from "./style";

type Props = {
  image: StaticImageData;
  step: number;
  title: string;
};

const ContentsCard = ({ image, step, title }: Props) => {
  return (
    <S.ContentsContainer>
      <S.Backdrop>
        <Image src={image} alt="section-imgage" />
      </S.Backdrop>
      <S.Contents>
        <S.Step>{step}</S.Step>
        <S.Title>{title}</S.Title>
      </S.Contents>
    </S.ContentsContainer>
  );
};

export default ContentsCard;
