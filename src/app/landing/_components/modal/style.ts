"use client";
import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 500;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 1050px;
  height: 830px;

  border-radius: 8px;
  overflow: hidden;
`;

export const LeftContainer = styled.div`
  position: relative;
  z-index: 150;
  flex-grow: 1;
`;

export const LeftContents = styled.div`
  position: absolute;
  left: 57px;
  top: 62px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LeftTitle = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 34px;
  letter-spacing: -0.5px;

  color: #ffffff;
`;

export const LeftDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.5px;

  color: #ffffff;
`;

export const ModalForm = styled.div`
  position: relative;
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  flex-grow: 1;
`;

export const FormContainer = styled.form`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  padding-top: 62px;
  padding-bottom: 1.5rem;
`;

export const Header2 = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #404a5c;
`;

export const Header1 = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 34px;
  letter-spacing: -0.5px;
  color: #101c33;
`;

export const ErrorMessage = styled.div`
  color: red;
`;

export const FormLabel = styled.label`
  font-weight: 700;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: -0.5px;
  color: #101c33;

  display: flex;
  align-items: center;
  gap: 1px;
`;

export const FormInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 11px 18px;
  gap: 10px;

  width: 400px;
  height: 42px;

  background: #ffffff;
  border: 1px solid #dbdee2;
  border-radius: 5px;
`;

export const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Asterisk = styled.span`
  color: #f21724;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;
export const CheckboxForm = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #999;
  appearance: none;
  cursor: pointer;
  transition: background 0.2s;
  &:checked {
    background: #2656f6;
    border: 3px solid #999;
  }
`;

export const CheckboxText = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.5px;
`;

export const CheckboxTextBlue = styled.span`
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.5px;
  text-decoration-line: underline;
  color: #2656f6;
`;

export const Line = styled.div`
  width: 398px;
  height: 0px;
  border: 1px solid #dbdee2;
  margin-top: 1rem;
`;

export const ButtonCancel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 17px;
  gap: 10px;

  width: 141px;
  height: 46px;

  background: #eef3fd;
  border-radius: 4px;

  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.5px;
  color: #2656f6;
  cursor: pointer;
`;

type InputProps = {
  disabled?: boolean;
};

export const ButtonPrimary = styled.button<InputProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 17px;
  gap: 10px;

  width: 248px;
  height: 46px;

  background: #2656f6;
  border-radius: 4px;

  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.5px;
  border: none;
  color: #ffffff;

  ${(props) =>
    props.disabled &&
    `
    background-color: lightgray;
    color: darkgray;
    cursor: not-allowed;
  `}
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 4rem;
`;
