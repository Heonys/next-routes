import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getReviewList } from "@/services";
import * as S from "./style";
import ImageSlide from "./ImageSlide";

const Section7 = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["reviews"], queryFn: getReviewList });
  const dehydratedState = dehydrate(queryClient);

  return (
    <S.Container>
      <S.Header2>의뢰자 만족 비율 98.7%</S.Header2>
      <S.Header1>
        <S.Title>국내 대기업, 공공기관의</S.Title>
        <S.Title>이유있는 선택</S.Title>
      </S.Header1>
      <S.ContentsBox>
        <S.ContentsHeader>
          <S.ContentsTitle>실시간 고객 후기</S.ContentsTitle>
          <S.Badge>4.8점</S.Badge>
        </S.ContentsHeader>
        <HydrationBoundary state={dehydratedState}>
          <ImageSlide />
        </HydrationBoundary>
      </S.ContentsBox>
    </S.Container>
  );
};

export default Section7;
