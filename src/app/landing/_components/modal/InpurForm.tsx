"use client";
import { UseFormRegisterReturn } from "react-hook-form";
import { FormType } from "@/types";
import * as S from "./style";

type Props = {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn<keyof FormType>;
  errorMessage?: string;
  required?: boolean;
  type?: React.ComponentPropsWithoutRef<"input">["type"];
};

const InpurForm = ({ label, placeholder, required, register, errorMessage, type }: Props) => {
  return (
    <S.InputForm>
      <S.FormLabel htmlFor={label}>
        {label}
        {required && <S.Asterisk>*</S.Asterisk>}
      </S.FormLabel>
      <S.FormInput type={type} id={label} placeholder={placeholder} {...register} />
      {required && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.InputForm>
  );
};

export default InpurForm;
