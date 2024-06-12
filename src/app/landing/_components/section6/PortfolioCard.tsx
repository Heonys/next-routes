import Image from "next/image";
import Link from "next/link";
import { Portfolio } from "@/app/api/get-portfolio-list/route";
import * as S from "./style";

type Props = {
  portfolio: Portfolio;
};

const PortfolioCard = ({ portfolio: { thumbnail, company, title, url } }: Props) => {
  return (
    <Link href={url} target="_blank">
      <S.GridCard>
        <Image src={thumbnail} alt="thumbnail" width="302" height="207" />
        <S.GridTitle>{title}</S.GridTitle>
        <S.GridDescription>{company}</S.GridDescription>
      </S.GridCard>
    </Link>
  );
};

export default PortfolioCard;
