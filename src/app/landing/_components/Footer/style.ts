"use client";
import styled from "@emotion/styled";
import Link from "next/link";

export const CTAContainer = styled.section`
  position: sticky;
  bottom: 0;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
  gap: 12px;

  background: #ffffff;
`;

export const LinkHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  margin: 0 auto;
`;

export const LinkText = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.5px;
  color: #404a5c;
`;

export const LinkTextBlue = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.5px;
  color: #2656f6;
`;

export const LinkButton = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 15px 11px 16px;
  gap: 6px;

  margin: 0 auto;
  background: #2656f6;
  border-radius: 4px;

  font-weight: 400;
  font-size: 15px;
  line-height: 26px;

  text-align: center;
  letter-spacing: -0.5px;
  color: #ffffff;

  width: 287px;
  height: 50px;
`;

export const Circle = styled.button`
  position: absolute;
  z-index: 50;

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
  gap: 10px;

  width: 50px;
  height: 50px;
  right: 24px;
  bottom: 108px;

  background: #ffffff;
  border: 1px solid #dbdee2;
  border-radius: 240px;
`;
