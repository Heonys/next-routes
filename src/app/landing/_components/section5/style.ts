"use client";
import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px;
  gap: 64px;
  position: relative;
  height: 621px;
  background: #ffffff;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 16px;
`;
export const HeaderText = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 100%;
  letter-spacing: -0.5px;
  color: #000000;
`;

export const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;
`;

export const Backdrop = styled.div`
  border-radius: 16px;
  overflow: hidden;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 0px;
  gap: 12px;
`;

export const Step = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  align-items: center;
  background: #e9ebed;
  border-radius: 100px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.5px;
  color: #000000;
`;
