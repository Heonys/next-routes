"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";
import { formSchema } from "@/utils/validate";
import type { FormType } from "@/types";
import InpurForm from "./InpurForm";
import ModalFooter from "./ModalFooter";
import { postNewForm } from "@/services";
import LoadingSpinner from "@/components/LoadingSpinner";
import * as S from "./style";

const ModalForm = () => {
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (value: FormType) => {
    setIsloading(true);
    try {
      await postNewForm(value);
      router.back();
      setIsloading(false);
      toast.success("접수 되었습니다.");
    } catch (error) {
      setIsloading(false);
      return;
    }
  };

  return (
    <S.FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      {isLoading && <LoadingSpinner />}
      <InpurForm
        label="회사명/사업체명"
        required
        placeholder="회사명 입력"
        register={register("company")}
        errorMessage={errors.company?.message}
      />
      <InpurForm
        label="담당자명"
        required
        placeholder="담당자명 입력"
        register={register("name")}
        errorMessage={errors.name?.message}
      />
      <InpurForm
        label="이메일 주소"
        required
        placeholder="abc@stunning.kr"
        type="email"
        register={register("email")}
        errorMessage={errors.email?.message}
      />
      <InpurForm label="연락처" placeholder="01012345678" register={register("phone")} />
      <S.Line />
      <ModalFooter />
    </S.FormContainer>
  );
};

export default ModalForm;
