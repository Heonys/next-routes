"use client";
import { ArrowTop } from "@/assets/images";
import * as S from "./style";

const TopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <S.Circle onClick={handleScrollToTop}>
      <ArrowTop />
    </S.Circle>
  );
};

export default TopButton;
