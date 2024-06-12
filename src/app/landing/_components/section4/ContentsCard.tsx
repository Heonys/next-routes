import Image, { StaticImageData } from "next/image";
import * as S from "./style";

type Props = {
  image: StaticImageData;
  title: string;
  description: string;
};

const ContentsCard = ({ image, title, description }: Props) => {
  return (
    <S.Item>
      <S.Backdrop>
        <Image src={image} alt="item-image" />
      </S.Backdrop>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Item>
  );
};

export default ContentsCard;
