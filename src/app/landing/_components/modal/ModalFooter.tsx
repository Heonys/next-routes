"use client";
import { useState } from "react";
import * as S from "./style";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ModalFooter = () => {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  const handleModalClose = () => {
    router.back();
  };

  return (
    <S.FooterContainer>
      <S.CheckboxForm>
        <S.Checkbox
          type="checkbox"
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
        />
        <S.CheckboxText>
          <Link
            href={"https://help.loud.kr/hc/ko/articles/25982032035097-개인정보-처리방침-20231211 "}
            target="_blank"
          >
            <S.CheckboxTextBlue>개인정보 처리방침</S.CheckboxTextBlue>
          </Link>
          에 동의합니다.
        </S.CheckboxText>
      </S.CheckboxForm>
      <S.ButtonGroup>
        <S.ButtonCancel onClick={handleModalClose}>닫기</S.ButtonCancel>
        <S.ButtonPrimary disabled={!checked}>작성완료</S.ButtonPrimary>
      </S.ButtonGroup>
    </S.FooterContainer>
  );
};

export default ModalFooter;
