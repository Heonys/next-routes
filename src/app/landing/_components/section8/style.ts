"use client";
import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.section`
  position: relative;
  height: 509px;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: -1px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 40px;
`;

export const HeaderText = styled.div`
  font-weight: 700;
  font-size: 44px;
  line-height: 100%;
  letter-spacing: -0.5px;
  color: #ffffff;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 64px;
`;

export const DescriptionText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.5px;
  color: #ffffff;
`;

export const LinkButton = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 17px;
  gap: 10px;

  background: #0a57ff;
  border-radius: 4px;
  color: white;

  font-weight: 700;
  font-size: 15px;

  border: none;
`;
