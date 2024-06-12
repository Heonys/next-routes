import ModalForm from "./ModalForm";
import * as S from "./style";

const ModalRightSide = () => {
  return (
    <S.ModalForm>
      <S.Header>
        <S.Header2>1분만에 작성하면 끝!</S.Header2>
        <S.Header1>상담을 위한 간단 정보를 입력해주세요!</S.Header1>
      </S.Header>
      <ModalForm />
    </S.ModalForm>
  );
};

export default ModalRightSide;
