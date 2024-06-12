import Link from "next/link";
import { ArrowRight } from "@/assets/images";
import * as S from "./style";

const ShowMoreButton = () => {
  return (
    <Link href="https://www.loud.kr/portfolio" target="_blank">
      <S.Button>
        <S.ButtonText>포트폴리오 더보기</S.ButtonText>
        <ArrowRight fill="#404A5C" />
      </S.Button>
    </Link>
  );
};

export default ShowMoreButton;
