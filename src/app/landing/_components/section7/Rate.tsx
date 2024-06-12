import { FaStar } from "react-icons/fa";
import * as S from "./style";

type Props = {
  rate: number;
};

const Rate = ({ rate }: Props) => {
  return (
    <S.RateContainer>
      <S.RateStars>
        {Array.from({ length: 5 }, (v, i) => (rate >= i + 1 ? 1 : 0)).map((v, i) => {
          return <FaStar key={i} color={v === 1 ? "#FFB800" : "#DBDEE2"} />;
        })}
      </S.RateStars>
      <S.RateText>{rate} 점</S.RateText>
    </S.RateContainer>
  );
};

export default Rate;
