"use client";
import useReviewQuery from "@/hooks/useReviewQuery";
import ImageSlideCard from "./ImageSlideCard";
import * as S from "./style";

const ImageSlide = () => {
  const { postsQuery } = useReviewQuery();
  return (
    <S.AutoSlider>
      {postsQuery.data?.reviews.map((review, index) => {
        return <ImageSlideCard key={index} review={review} />;
      })}
      {postsQuery.data?.reviews.map((review, index) => {
        return <ImageSlideCard key={index} review={review} />;
      })}
    </S.AutoSlider>
  );
};

export default ImageSlide;
