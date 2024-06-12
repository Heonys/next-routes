import { z } from "zod";

export const formSchema = z.object({
  company: z
    .string()
    .min(1, { message: "회사명/사업체명을 입력해주세요" })
    .max(30, { message: "30자 이내로 작성해주세요" }),
  name: z
    .string()
    .min(1, { message: "담당자명을 입력해주세요" })
    .max(20, { message: "20자 이내로 작성해주세요" }),
  email: z
    .string()
    .min(1, { message: "이메일을 입력해주세요" })
    .email({ message: "이메일 형식으로 입력해주세요" }),
  phone: z.optional(z.string().regex(/^\d*$/, { message: "숫자로만 입력해주세요" })),
});
