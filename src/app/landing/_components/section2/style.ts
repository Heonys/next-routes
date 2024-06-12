"use client";
import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 100px 320px 80px;
  position: relative;
  background: #010a29;
  color: white;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Header1 = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 120%;

  text-align: center;
  letter-spacing: -0.5px;
`;

export const Header2 = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 0px 30px;

  font-weight: 700;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: -0.5px;

  background: linear-gradient(274.83deg, #00d254 0%, #43bbff 100%);
  background-clip: text;
  text-fill-color: transparent;
`;
