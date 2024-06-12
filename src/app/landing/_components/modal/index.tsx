"use client";
import ModalLeftSide from "./ModalLeftSide";
import ModalRightSide from "./ModalRightSide";
import usePreventScroll from "@/hooks/usePreventScroll";
import * as S from "./style";

const ModalPage = () => {
  usePreventScroll();
  return (
    <S.Container>
      <S.ModalContainer>
        <ModalLeftSide />
        <ModalRightSide />
      </S.ModalContainer>
    </S.Container>
  );
};

export default ModalPage;
