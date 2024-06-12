"use client";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px;
  position: relative;
  height: 756px;
  background: #f5f8ff;

  overflow: hidden;
  position: relative;
`;

export const Header1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 64px;
  gap: 30px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: -0.5px;
  color: #000000;
`;

export const Header2 = styled.h2`
  font-weight: 700;
  font-size: 26px;
  line-height: 100%;
  letter-spacing: -0.5px;
  padding-bottom: 30px;

  background: linear-gradient(274.83deg, #2fe7a5 0%, #168fff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContentsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  height: 50px;
  gap: 10px;
`;

export const ContentsTitle = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 34px;

  letter-spacing: -0.5px;
  color: #101c33;
`;

export const Badge = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 6px 12px;
  gap: 10px;
  background: #2656f6;

  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  line-height: 12px;
  letter-spacing: -0.15px;
  color: #ffffff;
`;

const slideAnimation = keyframes`
  from { transform: translateX(39%) }
  to { transform: translateX(-11.1%) }
`;

export const AutoSlider = styled.div`
  display: flex;
  justify-content: start;
  gap: 24px;
  width: 100%;
  animation: ${slideAnimation} 30s linear infinite;
`;

export const SlideCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px;
  gap: 12px;
  width: 411px;
  height: 282px;
  background: #ffffff;
  border: 1px solid #e9ebed;
  border-radius: 4px;
  position: relative;
`;

export const SlideHeader = styled.div`
  display: flex;
  gap: 1rem;
`;
export const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ReviewerText = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.15px;
  color: #6f7785;
`;

export const DateText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.25px;
  color: #8e94a0;
`;

export const SlideDescription = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 180%;
  letter-spacing: -0.5px;
  color: #101c33;

  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const SlideFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ProductType = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.25px;
  color: #8e94a0;
`;

type ProductType = {
  type: "Market" | "Contest" | "Deal";
};

const mappingColor = {
  Market: { bg: "#E3F7E7", text: "#009B15" },
  Contest: { bg: "#E1EDFF", text: "#2656F6" },
  Deal: { bg: "#FFF5D3", text: "#FF8A00" },
};

export const CategoryBadge = styled.div<ProductType>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 10px;
  gap: 10px;

  background: ${(props) => mappingColor[props.type].bg};
  color: ${(props) => mappingColor[props.type].text};
  border-radius: 4px;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: -0.15px;
`;

export const RateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RateStars = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const RateText = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: -0.5px;

  color: #101c33;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 80px;
  height: 55px;
`;

export const EmptyThumbnail = styled.div`
  background-color: #f9fafb;
  width: 80px;
  height: 55px;
  border-radius: 4px;
  position: relative;
`;
