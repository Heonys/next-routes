"use client";
import usePortfolioQuery from "@/hooks/usePortfolioQuery";
import { GetPortfolioListResponse } from "@/app/api/get-portfolio-list/route";
import PortfolioCard from "./PortfolioCard";
import * as S from "./style";

type Props = {
  title: string;
  category: keyof GetPortfolioListResponse;
};

const PortfolioGrid = ({ title, category }: Props) => {
  const { postsQuery } = usePortfolioQuery();

  return (
    <S.ContentsContainer>
      <S.ContentsHeader>
        <S.ContentsTitle>{title}</S.ContentsTitle>
      </S.ContentsHeader>
      <S.ContentsGrid>
        {postsQuery.data?.[category]?.map((portfolio) => {
          return <PortfolioCard key={portfolio.title} portfolio={portfolio} />;
        })}
      </S.ContentsGrid>
    </S.ContentsContainer>
  );
};

export default PortfolioGrid;
