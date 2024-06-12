import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import PortfolioGrid from "./PortfolioGrid";
import { getPortfolioList } from "@/services";
import ShowMoreButton from "./ShowMoreButton";
import * as S from "./style";

const Section6 = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["portfolios"], queryFn: getPortfolioList });
  const dehydratedState = dehydrate(queryClient);

  return (
    <S.Container>
      <S.Header2>실제 의뢰 시안 공개, 최고의 신뢰도</S.Header2>
      <S.Header1>
        <S.Title>라우드 소싱은 국내 유일</S.Title>
        <S.Title>3만 건의 결과물을 확인할 수 있습니다</S.Title>
      </S.Header1>
      <HydrationBoundary state={dehydratedState}>
        <PortfolioGrid title="대기업" category="category1" />
        <PortfolioGrid title="공공기관" category="category2" />
      </HydrationBoundary>
      <ShowMoreButton />
    </S.Container>
  );
};

export default Section6;
