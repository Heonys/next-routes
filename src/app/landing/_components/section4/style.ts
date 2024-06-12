"use client";
import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 320px;
  position: relative;
  background: #010a29;
  color: white;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
  text-align: center;
  width: 320px;
  height: 264px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 44px;
  letter-spacing: -0.5px;
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.5px;
  max-width: 40%;
`;

export const Backdrop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 120px;
  height: 120px;
  background: #171e36;
  border-radius: 16px;
`;
