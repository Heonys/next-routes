"use client";
import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
  height: 1000px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 40px;
  color: white;

  position: absolute;
  transform: translate(-50%);
  left: 50%;
  top: 107px;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 8px 40px;
  gap: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100px;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
  text-align: center;
  letter-spacing: -0.5px;
`;

export const Header1 = styled.h1`
  font-weight: 700;
  font-size: 60px;
  line-height: 100%;

  text-align: center;
  letter-spacing: -0.5px;
`;

export const Header2 = styled.h2`
  font-weight: 700;
  font-size: 40px;
  line-height: 100%;
  letter-spacing: -0.5px;

  background: linear-gradient(274.83deg, #00d254 0%, #0ea8ff 100%);
  background-clip: text;
  text-fill-color: transparent;
`;
