"use client";
import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 320px;

  position: relative;
  background: #010a29;
`;

export const Header1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
  padding-bottom: 64px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 100%;
  letter-spacing: -0.5px;
  color: #ffffff;
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
export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
`;

export const ContentsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 50px;
`;

export const ContentsTitle = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 34px;
  letter-spacing: -0.5px;

  color: #ffffff;
`;

export const ContentsGrid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 954px;
  height: 261px;
`;

export const GridCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
`;

export const GridImage = styled.div``;

export const GridTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-align: justify;
  letter-spacing: -0.5px;
  color: #ffffff;
`;

export const GridDescription = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: justify;
  letter-spacing: -0.15px;
  color: #8e94a0;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px 12px 17px;
  gap: 4px;
  width: 343px;
  height: 42px;
  background: #ffffff;
  border-radius: 4px;
  border: none;
`;

export const ButtonText = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.5px;
  color: #101c33;
`;
